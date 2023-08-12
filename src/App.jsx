import { Routes, Route, useLocation } from 'react-router-dom';

import { Category, Checkout, HomePage, ProductDetail } from './pages';
import { Header, About, Footer } from './components';

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:category" element={<Category />} />
        <Route path="/:category/:slug" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<div />} />
      </Routes>
      {pathname !== '/checkout' && <About />}
      <Footer />
    </>
  );
}

export default App;
