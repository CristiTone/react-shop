import { Routes, Route } from 'react-router-dom';
import { Home, Product, Success } from './pages';

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="product/:slug" element={<Product />} />
      <Route path="success" element={<Success />} />
    </Routes>
  );
}

export default App;
