import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Order from './pages/Order/Order';
import Cart from './pages/cart/cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';
import MyState from './context/myState';
import Login from './pages/registration/Login';
import ProductInfo from './pages/productInfo/ProductInfo';
import Signup from './pages/registration/Signup';
import { ToastContainer } from 'react-toastify';
import AddProduct from './pages/page/AddProduct';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <MyState>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={
          <ProtectedRoutes>
            <Order />
          </ProtectedRoutes>
        } />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={<ProtectedRoutesForAdmin><Dashboard /></ProtectedRoutesForAdmin>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/productinfo/:id" element={<ProductInfo />} />
        <Route path="/addproduct" element={<AddProduct />} />
        
        <Route path="/*" element={<NoPage />} />
      </Routes>
      <ToastContainer />
    </MyState>
  );
}

export default App;

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('currentUser')) {
    return children;
  } else {
    return <Navigate to='/login' />;
  }
};

export const ProtectedRoutesForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('user'));
  console.log(admin.user.email);
  if (admin.user.email === 'test@gmail.com') {
    return children;
  } else {
    return <Navigate to='/login' />;
  }
};
