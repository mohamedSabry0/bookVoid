import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

export default function BookForm() {
  const dispatch = useDispatch();
  // const { error, status, message } = useSelector(booksState);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const author = form.author.value;
    const itemId = uuidv4();
    const category = 'Action';

    dispatch(addBook({
      item_id: itemId, title, author, category,
    }));

    form.reset();
  };

  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <input name="title" placeholder="title" />
        <input name="author" placeholder="author" />
        <button type="submit"> Add </button>
      </form>
    </>
  );
}
