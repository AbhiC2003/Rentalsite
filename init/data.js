const sampleListing = [
    {
      "title": "Beachfront Villa",
      "description": "A luxurious villa with stunning sea views and modern amenities.",
      "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGJlYWNoZnJvbnQlMjB2aWxsYXxlbnwwfHx8fDE2OTAxMTAxNjg&ixlib=rb-4.0.3&q=80&w=1080",
      "price": 2000,
      "location": "Goa", 
      "country": "India",
    },
    {
      "title": "Mountain Cabin",
      "description": "A cozy cabin located in the heart of the mountains, perfect for a winter getaway.",
      "image": "https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1vdW50YWluJTIwY2FiaW58ZW58MHx8fHwxNjkwMTEwMTY4&ixlib=rb-4.0.3&q=80&w=1080",
      "price": 1500,
      "location": "Manali",
      "country": "USA",
    },
    {
      "title": "City Apartment",
      "description": "A modern apartment located in the city center, close to all major attractions.",
      "image": "https://images.unsplash.com/photo-1570165411500-ada0e4a1fc32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fGNpdHklMjBhcGFydG1lbnR8ZW58MHx8fHwxNjkwMTEwMTY4&ixlib=rb-4.0.3&q=80&w=1080",
      "price": 1000,
      "location": "Mumbai",
      "country": "India",
    },
    {
        title:"Abhishek House",
        description:"It is located in the nitur village",
        price:2222,
        image:"https://images.unsplash.com/photo-1570165411500-ada0e4a1fc32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fGNpdHklMjBhcGFydG1lbnR8ZW58MHx8fHwxNjkwMTEwMTY4&ixlib=rb-4.0.3&q=80&w=1080",
        location:"Nitur",
        country:"India",
    },
    {
      "title": "Countryside Cottage",
      "description": "A charming cottage in the countryside, perfect for a peaceful retreat.",
      "image": "https://images.unsplash.com/photo-1552856128-61a834bda3f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGNvdW50cnlzaWRlJTIwY290dGFnZXxlbnwwfHx8fDE2OTAxMTAxNjg&ixlib=rb-4.0.3&q=80&w=1080",
      "price": 800,
      "location": "Ooty",
      "country": "India"
    },
    {
      "title": "Desert Camp",
      "description": "An exotic camp experience in the desert, with luxurious tents and guided tours.",
      "image": "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGRlc2VydCUyMGNhbXB8ZW58MHx8fHwxNjkwMTEwMTY4&ixlib=rb-4.0.3&q=80&w=1080",
      "price": 1200,
      "location": "Jaisalmer",
      "country": "India"
    },
    {
      "title": "Lake House",
      "description": "A serene lake house with breathtaking views and modern amenities.",
      "image": "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGxha2UlMjBob3VzZXxlbnwwfHx8fDE2OTAxMjQwNzQ&ixlib=rb-4.0.3&q=80&w=1080",
      "price": 2200,
      "location": "Nainital",
      "country": "India"
    },
    {
      "title": "Forest Cabin",
      "description": "A rustic cabin in the forest, surrounded by nature and wildlife.",
      "image": "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZvcmVzdCUyMGNhYmluJXxlbnwwfHx8fDE2OTAxMjQwNzQ&ixlib=rb-4.0.3&q=80&w=1080",
      "price": 1700,
      "location": "Coorg",
      "country": "India"
    },
    {
      "title": "Luxury Penthouse",
      "description": "A spacious penthouse with stunning city views and luxurious amenities.",
      "image": "https://images.unsplash.com/photo-1578894389477-03e160a3f27e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDl8fGx1eHVyeSUyMHBlbnRob3VzZXxlbnwwfHx8fDE2OTAxMjQwNzQ&ixlib=rb-4.0.3&q=80&w=1080",
      "price": 3000,
      "location": "Delhi",
       country:"India",
    },
    {
      "title": "Beach Cottage",
      "description": "A cozy cottage on the beach, perfect for a relaxing seaside vacation.",
      "image": "https://images.unsplash.com/photo-1501117716987-c8d4c31f81f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDZ8fGJlYWNoJTIwY290dGFnZXxlbnwwfHx8fDE2OTAxMjQwNzQ&ixlib=rb-4.0.3&q=80&w=1080",
      "price": 1300,
      "location": "Kerala",
      "country": "India"
    },
    {
      "title": "Hilltop Retreat",
      "description": "A luxurious retreat on top of a hill with panoramic views and modern amenities.",
      "image": "https://images.unsplash.com/photo-1519974719765-e6559eac2575?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGhpZGUlMjB3YXlfcmV0cmVhdCUyMHNpdGV8ZW58MHx8fHwxNjkwMTI0MDc0&ixlib=rb-4.0.3&q=80&w=1080",
      "price": 2500,
      "location": "Shimla",
      "country": "India"
    }
  ];
  
  module.exports = { data: sampleListing };
  