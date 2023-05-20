import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

export default function Categories() {
  const { categories } = useSelector((store) => store.categories);
  const dispatch = useDispatch();
  return (
    <>
      <button
        type="button"
        onClick={() => {
          dispatch(checkStatus('Under construction'));
        }}
      >
        Check status
      </button>
      <p>{categories}</p>
    </>
  );
}
