import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Layout from './components/Layout';
import BooksPage from './components/BooksPage';
import CategoriesPage from './components/CategoriesPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<BooksPage />} />
      <Route path="categories" element={<CategoriesPage />} />
      <Route path="*" element={<h2>Page Not Found</h2>} />
    </Route>,
  ),
);

export default router;
