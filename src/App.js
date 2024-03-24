import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Layout from './components/layout/Layout';
import CatalogPage from './pages/catalog/CatalogPage';
import CartPage from './pages/cart/CartPage';
import NotFoundPage from './pages/notFound/NotFoundPage';
import AppProvider from './providers/AppProvider';

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<CatalogPage/>}/>
          <Route path="cart" element={<CartPage/>}/>
        </Route>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </AppProvider>
  );
}

export default App;
