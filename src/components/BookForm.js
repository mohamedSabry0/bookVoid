import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

export default function BookForm() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target.parentElement;
    const title = form.title.value;
    const author = e.target.parentElement.author.value;
    const itemId = `item${Math.floor(Math.random() * 100)}`;
    dispatch(addBook({ itemId, title, author }));
    form.reset();
  };

  return (
    <form>
      <input name="title" placeholder="title" />
      <input name="author" placeholder="author" />
      <button type="submit" onClick={handleSubmit}> Add </button>
    </form>
  );
}
