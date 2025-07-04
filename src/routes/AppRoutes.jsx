import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

import Layout from '../layout/Layout';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
