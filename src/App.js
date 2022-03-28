import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './component/header/header';
import Home from './component/home/home';
import BookingContainer from './component/booking/bookingContainer';
import Footer from './component/footer/footer';
import AboutUs from './component/aboutUs/aboutUSPage';
import Payment from './component/payment/payment';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header>
      <Header />
      </header>
      <div>
        <Routes>
          <Route path='/booking' element={<BookingContainer/>}/>
          <Route path='' element={<Home/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
        </Routes>
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
