require('dotenv').config();

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/user');
const Video = require('./models/video');
const Product = require('./models/product');
const Comment = require('./models/comment');
const { seedUsers } = require('./seeders/userSeeder');
const { seedVideos } = require('./seeders/videoSeeder');
const { seedProducts } = require('./seeders/productSeeder');
const { seedComments } = require('./seeders/commentSeeder');

let mongoURL, log;
if (process.env.NODE_ENV === 'production') {
    mongoURL = process.env.MONGO_CONNECTION_STRING_PROD;
    log = 'Connected to MongoDB Atlas';
} else {
    mongoURL = process.env.MONGO_CONNECTION_STRING_DEV;
    log = 'Connected to MongoDB Local';
}

mongoose.connect(mongoURL)
    .then(() => {
        console.log(log)
    })
    .catch(err => {
        console.log(err)
    });

const seedDB = async () => {
    // hashing
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash('password123', saltRounds);

    seedUsers.map(user => {
        user.password = hashedPassword;
        return user;
    })

    // seeding
    await User.deleteMany({});
    await User.insertMany(seedUsers);
    await Video.deleteMany({});
    await Video.insertMany(seedVideos);
    await Product.deleteMany({});
    await Product.insertMany(seedProducts);
    await Comment.deleteMany({});
    await Comment.insertMany(seedComments);

    console.log('Database seeded');
}

seedDB().then(() => {
    mongoose.connection.close();
});