import './scss/app.scss';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Header from './components/Header';
import Cart from './components/pages/Cart';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
