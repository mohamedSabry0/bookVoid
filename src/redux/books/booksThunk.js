import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/HYYvKmGO3upxaXekhp4l/books';
const delURL = (id) => `${URL}/${id}`;

const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(URL)
    .then(({ data }) => data).catch((error) => {
      throw new Error(`HTTP error! Error: ${error}`);
    });

  return response;
});

const addBook = createAsyncThunk('books/addBook', async (book) => {
  const response = await axios.post(URL, book)
    .then(({ data }) => data).catch((error) => {
      throw new Error(`HTTP error! Error: ${error}`);
    });
  return { response, book };
});

const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  const response = await axios.delete(delURL(id), { item_id: id })
    .then(({ data }) => data).catch((error) => {
      throw new Error(`HTTP error! Error: ${error}`);
    });
  return { response, id };
});

export { fetchBooks, addBook, removeBook };
