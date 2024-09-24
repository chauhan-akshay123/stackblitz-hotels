let express = require("express");
let app = express();
let cors = require('cors');
app.use(cors());

let hotels = [
  {
    id: 1,
    name: "Romantic Getaway",
    category: "resort",
    rating: 2.2,
    reviews: 4572,
    amenity: "spa",
    price: 10464,
    country: "south africa",
  },
  {
    id: 2,
    name: "Wellness Retreat",
    category: "family",
    rating: 2.8,
    reviews: 2114,
    amenity: "pool",
    price: 13243,
    country: "australia",
  },
  {
    id: 3,
    name: "Romantic Getaway",
    category: "luxury",
    rating: 3.1,
    reviews: 4359,
    amenity: "restaurant",
    price: 3299,
    country: "germany",
  },
  {
    id: 4,
    name: "Luxury Suites",
    category: "family",
    rating: 4.9,
    reviews: 3651,
    amenity: "bar",
    price: 16359,
    country: "united kingdom",
  },
  {
    id: 5,
    name: "Luxury Suites",
    category: "budget",
    rating: 4.6,
    reviews: 688,
    amenity: "gym",
    price: 15570,
    country: "france",
  },
  {
    id: 6,
    name: "Cultural Heritage Hotel",
    category: "boutique",
    rating: 2.0,
    reviews: 219,
    amenity: "pet friendly",
    price: 2321,
    country: "usa",
  },
  {
    id: 7,
    name: "Business Hotel",
    category: "mid-range",
    rating: 3.7,
    reviews: 1040,
    amenity: "free wifi",
    price: 4523,
    country: "india",
  },
  {
    id: 8,
    name: "Historic Plaza Hotel",
    category: "mid-range",
    rating: 3.5,
    reviews: 300,
    amenity: "parking",
    price: 8543,
    country: "australia",
  },
  {
    id: 9,
    name: "Adventure Resort",
    category: "boutique",
    rating: 4.2,
    reviews: 1222,
    amenity: "gym",
    price: 11894,
    country: "south africa",
  },
  {
    id: 10,
    name: "Mountain Retreat",
    category: "resort",
    rating: 4.8,
    reviews: 4015,
    amenity: "spa",
    price: 17560,
    country: "india",
  },
  {
    id: 11,
    name: "Eco Friendly Lodge",
    category: "family",
    rating: 2.4,
    reviews: 528,
    amenity: "restaurant",
    price: 3124,
    country: "germany",
  },
  {
    id: 12,
    name: "Urban Boutique Hotel",
    category: "mid-range",
    rating: 3.9,
    reviews: 1401,
    amenity: "free wifi",
    price: 9245,
    country: "france",
  },
  {
    id: 13,
    name: "Beachfront Hotel",
    category: "luxury",
    rating: 4.5,
    reviews: 489,
    amenity: "pool",
    price: 14567,
    country: "usa",
  },
  {
    id: 14,
    name: "Ocean View Resort",
    category: "budget",
    rating: 3.3,
    reviews: 783,
    amenity: "spa",
    price: 7432,
    country: "united kingdom",
  },
  {
    id: 15,
    name: "City Central Hotel",
    category: "boutique",
    rating: 4.1,
    reviews: 2133,
    amenity: "bar",
    price: 9823,
    country: "australia",
  },
  {
    id: 16,
    name: "Casino Resort",
    category: "luxury",
    rating: 4.9,
    reviews: 5000,
    amenity: "bar",
    price: 18900,
    country: "south africa",
  },
  {
    id: 17,
    name: "Golf Resort",
    category: "mid-range",
    rating: 4.7,
    reviews: 789,
    amenity: "gym",
    price: 16340,
    country: "france",
  },
  {
    id: 18,
    name: "Family Fun Hotel",
    category: "family",
    rating: 3.2,
    reviews: 1322,
    amenity: "pool",
    price: 7500,
    country: "germany",
  },
  {
    id: 19,
    name: "Spa and Relaxation Hotel",
    category: "luxury",
    rating: 4.4,
    reviews: 2314,
    amenity: "spa",
    price: 14900,
    country: "united kingdom",
  },
  {
    id: 20,
    name: "Country House Hotel",
    category: "budget",
    rating: 3.6,
    reviews: 1876,
    amenity: "parking",
    price: 6234,
    country: "australia",
  },
];


function sortedPricingLowToHigh(hotel1, hotel2){
  return hotel1.price - hotel2.price;
}

function sortedPricingHighToLow(hotel1, hotel2){
  return hotel2.price - hotel1.price;
}

app.get('/hotels/sort/pricing', (req, res)=>{
  sortedHotels = hotels.slice();
  let pricing = req.query.pricing;
  if(pricing === 'low-to-high'){
    sortedHotels.sort(sortedPricingLowToHigh);   
  }
  else{
    sortedHotels.sort(sortedPricingHighToLow);
  }
  res.json({hotels: sortedHotels});
});

function sortedRatingLowToHigh(hotel1, hotel2){
  return hotel1.rating - hotel2.rating;
}

function sortedRatingHighToLow(hotel1, hotel2){
  return hotel2.rating - hotel1.rating;
}

app.get('/hotels/sort/rating', (req, res)=>{
 let rating = req.query.rating;
 sortedHotels = hotels.slice();
 if(rating === 'low-to-high'){
   sortedHotels.sort(sortedRatingLowToHigh);
 }
 else{
   sortedHotels.sort(sortedRatingHighToLow);
 }
 res.json({hotels: sortedHotels});
});

function sortedReviewsLeastToMost(hotel1, hotel2) {
  return hotel1.reviews - hotel2.reviews;
}

function sortedReviewsMostToLeast(hotel1, hotel2) {
  return hotel2.reviews - hotel1.reviews;
}

app.get('/hotels/sort/reviews', (req, res) => {
  let reviews = req.query.reviews;
  let sortedHotels = [...hotels];

  if (reviews === 'least-to-most') {
    sortedHotels.sort(sortedReviewsLeastToMost);
  } else {
    sortedHotels.sort(sortedReviewsMostToLeast);
  }
  
  res.json({ hotels: sortedHotels });
});

function filterAmenity(hotel, amenity){
   return hotel.amenity === amenity;
}

app.get('/hotels/filter/amenity', (req, res)=>{
  let amenity = req.query.amenity;
  let filteredHotels = hotels.filter(hotel =>filterAmenity(hotel, amenity));
  res.json({hotels: filteredHotels});
});

function filterCountry(hotel, country){
  return hotel.country === country;
}

app.get('/hotels/filter/country', (req, res)=>{
  let country = req.query.country;
  let filteredHotels = hotels.filter(hotel => filterCountry(hotel, country));
  res.json({hotels: filteredHotels});
});

function filterCategory(hotel, category){
  return hotel.category === category;
}

app.get('/hotels/filter/category', (req, res) => {
  let category = req.query.category;
  let filteredHotels = hotels.filter(hotel => filterCategory(hotel, category));
  res.json({hotels: filteredHotels});
});

app.get('/hotels', (req, res)=>{
 res.json({hotels: hotels});
});

PORT = 3000;
app.listen(PORT, ()=>{
 console.log("Server is running on https://localhost" + PORT);
});