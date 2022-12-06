// requiring modules to use
const mongoose = require("mongoose");
const Campground = require("../models/campground");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelper");

// creating connection to database
mongoose.connect("mongodb://localhost:27017/yelp-camp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// catching any errors
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database Connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

// deletes all data and repopulates it with random generated words from lists
const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 300; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20 + 10);
    const camp = new Campground({
      author: "637265d05e850d8030d74837",
      location: `${cities[random1000].city}, ${cities[random1000].state} `,
      title: `${sample(descriptors)} ${sample(places)}`,
      description: "this is my very short desc of the image for all images",
      price,
      geometry: {
        type: "Point",
        coordinates: [
          cities[random1000].longitude,
          cities[random1000].latitude,
        ],
      },
      images: [
        {
          url: "https://res.cloudinary.com/djeknw5kr/image/upload/v1668999189/YelpCamp/vpwwcvkp9x9z0aeqyet3.jpg",
          filename: "YelpCamp/vpwwcvkp9x9z0aeqyet3",
        },
        {
          url: "https://res.cloudinary.com/djeknw5kr/image/upload/v1668999189/YelpCamp/jdnsujznd1b7bpos9tjv.jpg",
          filename: "YelpCamp/jdnsujznd1b7bpos9tjv",
        },
      ],
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
