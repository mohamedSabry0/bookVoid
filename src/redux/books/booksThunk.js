import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/HYYvKmGO3upxaXekhp4l/books';
// const delURL = (id) => `${URL}/${id}`;

const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(URL)
    .then(({ data }) => data);
  // if (!res.ok) {
  //   throw new Error(`HTTP error! Error: ${res.status} ${res.statusText}`);
  // }

  return response;
});

export default fetchBooks;
