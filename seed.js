require('dotenv').config();

const mongoose = require('mongoose');
const User = require('./models/user');
const Video = require('./models/video');
const Product = require('./models/product');
const { seedUsers } = require('./seeders/userSeeder');
const { seedVideos } = require('./seeders/videoSeeder');
const { seedProducts } = require('./seeders/productSeeder');

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch(err => {
        console.log(err)
    });

const seedDB = async () => {
    await User.deleteMany({});
    await User.insertMany(seedUsers);
    await Video.deleteMany({});
    await Video.insertMany(seedVideos);
    await Product.deleteMany({});
    await Product.insertMany(seedProducts);

    console.log('Database seeded');
}

seedDB().then(() => {
    mongoose.connection.close();
});