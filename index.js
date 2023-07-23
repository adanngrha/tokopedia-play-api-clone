require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const app = express();

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB')
})
  .catch(err => {
    console.log(err)
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));