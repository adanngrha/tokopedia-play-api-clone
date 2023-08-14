require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const routes = require('./routes');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_CONNECTION_STRING, )
  .then(() => {
    console.log('Connected to MongoDB')
})
  .catch(err => {
    console.log(err)
});

app.use('/api', routes);

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));