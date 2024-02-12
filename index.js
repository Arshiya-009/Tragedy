import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import { Book } from './models/bookModel.js';
// import mongoose from 'mongoose';
// import booksRoute from './routes/booksRoute.js';
// import cors from 'cors';

const app = express();


app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('la la la lai la lai');
});

app.use('/books', booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });