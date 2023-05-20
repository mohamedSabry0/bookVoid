import { createSlice } from '@reduxjs/toolkit';
import { unique } from '../../util/util';
import { fetchBooks, addBook, removeBook } from './booksThunk';

const initialState = {
  books: [],
  status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
  error: null,
  message: null,
};

const isPendingAction = (action) => action.type.endsWith('/pending');
const isRejectedAction = (action) => action.type.endsWith('/rejected');

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder

      .addCase(fetchBooks.fulfilled, (state, action) => ({
        ...state,
        // TODO: handle (should be redundant) render => the cause was strict mode
        books: unique(action.payload, state.books),
        status: 'succeeded',
      }))
      .addCase(removeBook.fulfilled, (state, action) => ({
        ...state,
        books: [...state.books.filter((item) => item.item_id !== action.payload.id)],
        status: 'succeeded',
        message: action.payload.response,
      }))
      .addCase(addBook.fulfilled, (state, action) => ({
        ...state,
        books: [...state.books, action.payload.book],
        status: 'succeeded',
        message: action.payload.response,
      }))
      // for all pending actions that has the same callback functions
      .addMatcher(isPendingAction, (state) => ({ ...state, status: 'loading' }))

    // for all rejected actions that has the similar callback functions
      .addMatcher(isRejectedAction, (state, action) => ({
        ...state,
        error: action.error.message,
        status: 'failed',
      }));
  },
});

export const booksState = (state) => state.books;
export { fetchBooks, addBook, removeBook };
export default booksSlice.reducer;
