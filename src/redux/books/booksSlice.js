import { createSlice } from '@reduxjs/toolkit';
import { unique } from '../../util/util';
import fetchBooks from './booksThunk';

const initialState = {
  books: [],
  status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => ({
      ...state,
      books: state.books.filter((book) => book.item_id !== action.payload),
    }),
  },
  extraReducers(builder) {
    builder

      .addCase(fetchBooks.fulfilled, (state, action) => ({
        ...state,
        // TODO: handle (should be redundant) render => the cause was strict mode
        books: unique(action.payload, state.books),
        status: 'succeeded',
      }));
  },
});

export const booksState = (state) => state.books;
export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
