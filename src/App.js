import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register.jsx';
import MyOrders from './pages/MyOrders.jsx';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { CartProvider } from './components/ContextReducer.jsx';

function App() {
  const email = localStorage.getItem("authToken");
  const check = !!email;
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            {check ? (
              <>
                <Route path='/' element={<Home />} />
                <Route path='/api/orders/orderhistory' element={<MyOrders />} />
                <Route path='*' element={<Navigate to="/" />} />
              </>
            )
              : (
                <>
                  <Route path='/' element={<Home />} />
                  <Route path='/api/auth/login' element={<Login />} />
                  <Route path='/api/auth/register' element={<Register />} />
                  <Route path='*' element={<Navigate to="/api/auth/login" />} />
                </>
              )
            }
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
