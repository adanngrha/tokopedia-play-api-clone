require('dotenv').config();

const mongoose = require('mongoose');
const Video = require('./models/video');

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch(err => {
        console.log(err)
    });

const seedVideos = [
    {
        title: 'ONE PIECE | Trailer Resmi | Netflix',
        description: 'Bebaskan dirimu. Arungi Lautan. Perjalanan untuk menemukan ONE PIECE dimulai 31 Agustus. Hanya di Netflix.',
        url_video: 'https://youtu.be/RlzJ6hbsaQo',
        url_thumbnail: 'https://img.youtube.com/vi/RlzJ6hbsaQo/0.jpg',
    },
    {
        title: 'wave to earth - bad (Official Lyric Video)',
        description: 'bad Official Lyric Video',
        url_video: 'https://youtu.be/6Q5xqNkCk7w',
        url_thumbnail: 'https://img.youtube.com/vi/6Q5xqNkCk7w/0.jpg',
    },
    {
        title: 'NewJeans (뉴진스) \'OMG\' Official MV (Performance ver.1)',
        description: 'Producer: MIN HEE JIN\n' +
            'Music Video Director: Wooseok Shin (DOLPHINERS FILM)',
        url_video: 'https://youtu.be/sVTy_wmn5SU',
        url_thumbnail: 'https://img.youtube.com/vi/sVTy_wmn5SU/0.jpg',
    },
    {
        title: 'ECLAT & KALEB J - Berakhir Sama (Official Music Video)',
        description: 'Inginnya cinta berujung indah, namun berakhir sama...',
        url_video: 'https://youtu.be/Thp67YG4Fts',
        url_thumbnail: 'https://img.youtube.com/vi/Thp67YG4Fts/0.jpg',
    },
    {
        title: 'Nyobain HP 37 Juta yang bisa dilipet!',
        description: 'Kok lucu ya.',
        url_video: 'https://youtu.be/Jz2jprGz4Ag',
        url_thumbnail: 'https://img.youtube.com/vi/Jz2jprGz4Ag/0.jpg',
    },
];

const seedDB = async () => {
    await Video.deleteMany({});
    await Video.insertMany(seedVideos);
    console.log('Database seeded');
}

seedDB().then(() => {
    mongoose.connection.close();
});