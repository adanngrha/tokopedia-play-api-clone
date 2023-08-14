require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const routes = require('./routes');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  mongoose.connect(process.env.MONGO_CONNECTION_STRING_PROD)
  .then(() => {
    console.log('Connected to MongoDB Atlas')
})
  .catch(err => {
    console.log(err)
});
} else {
  mongoose.connect(process.env.MONGO_CONNECTION_STRING_DEV)
  .then(() => {
    console.log('Connected to Local MongoDB')
})
  .catch(err => {
    console.log(err)
});
}

app.use('/api', routes);

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));