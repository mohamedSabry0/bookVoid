import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

export default function BookForm() {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const author = form.author.value;
    const itemId = uuidv4();
    const category = form.category.value;

    dispatch(addBook({
      item_id: itemId, title, author, category,
    }));

    form.reset();
  };

  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <h3>ADD NEW BOOK</h3>
        <label htmlFor="title">
          <input
            id="title"
            name="title"
            placeholder="Book title"
          />
        </label>
        <label htmlFor="author">
          <input
            id="author"
            name="author"
            placeholder="Author"
          />
        </label>
        <label htmlFor="category">
          <select
            name="category"
          >
            <option value="Action" selected>Action</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Economy">Economy</option>
          </select>
        </label>
        <button type="submit" className="add-button"> Add </button>
      </form>
    </>
  );
}
