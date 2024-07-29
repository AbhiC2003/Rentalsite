const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");

const validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map(el => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

// Index route
router.get("/", wrapAsync(async (req, res) => {
    const allListing = await Listing.find({});
    res.render("listing/index", { allListing });
}));

// New route
router.get("/new", (req, res) => {
    res.render("listing/new");
});

// Show route
router.get("/:id", wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    if(!listing){
        req.flash("error"," Listing you requested for does not exist");
        res.redirect("/listings")
    }
    res.render("listing/show", { listing });
}));

// Create route
router.post("/", validateListing, wrapAsync(async (req, res, next) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    req.flash("success","New listing created");
    res.redirect("/listings");
}));

// Edit route
router.get("/:id/edit", wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error"," Listing you requested for does not exist");
        res.redirect("/listings")
    }
    res.render("listing/edit", { listing });
}));

// Update route
router.put("/:id", validateListing, wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findByIdAndUpdate(id, req.body.listing, { new: true, runValidators: true });
    req.flash("success"," listing updated!");
    res.redirect(`/listings/${id}`);
}));

// Delete route
router.delete("/:id", wrapAsync(async (req, res) => {
    const { id } = req.params;
    const deleteListing = await Listing.findByIdAndDelete(id);
    console.log(deleteListing);
    req.flash("success"," listing Deleted!");
    res.redirect(`/listings`); 
}));

module.exports = router;
