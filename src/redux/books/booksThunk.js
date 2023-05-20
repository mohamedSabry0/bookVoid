import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/HYYvKmGO3upxaXekhp4l/books';
// const delURL = (id) => `${URL}/${id}`;

const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(URL)
    .then(({ data }) => data).catch((error) => {
      throw new Error(`HTTP error! Error: ${error}`);
    });
  // if (!res.ok) {
  //   throw new Error(`HTTP error! Error: ${res.status} ${res.statusText}`);
  // }

  return response;
});

const addBook = createAsyncThunk('books/addBook', async (book) => {
  const response = await axios.post(URL, book)
  // await fetch(URL, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(book),
  // })
    .then(({ data }) => data).catch((error) => {
      throw new Error(`HTTP error! Error: ${error}`);
    });
  return { response, book };
});

export { fetchBooks, addBook };
