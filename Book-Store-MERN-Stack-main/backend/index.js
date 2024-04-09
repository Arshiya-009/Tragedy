import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());
app.use(express.static('uploads'))


app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('testing');
});

app.use('/books', booksRoute);

mongoose
  .connect("mongodb://127.0.0.1:27017/books-collection")
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
