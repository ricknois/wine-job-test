import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home, ProductsDetails } from '../pages';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
