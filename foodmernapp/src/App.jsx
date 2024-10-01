import './App.css'
import Home from './Screens/Home'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './Screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './Screens/Signup.jsx';
import { Context }from './contextapi/context.jsx';
import Cart from './Screens/Cart.jsx';
import MyOrders from './Screens/MyOrders.jsx';



function App() {

  return (
    <Context>
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/createuser' element={<Signup />} />
          <Route path='/mycart' element={<Cart/>}/>
          <Route path='/myorders' element={<MyOrders/>}/>
        </Routes>
      </div>

    </BrowserRouter>
    </Context>
  )
}

export default App
