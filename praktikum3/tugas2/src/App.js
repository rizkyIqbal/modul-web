import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';


function App() {
  return (
    <Routes>
    <Route index element={<HomePage />} />
    <Route path='/about' element={<AboutPage />} />
    <Route path='/contact' element={<ContactPage />} />
    {/* <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/order" element={<Order />} />
    <Route path="/seller" element={<SellerList/>} />
    <Route path="/faq" element={<Faq/>} />
    <Route path="/sellerdetail" element={<SellerDetail/>} />
    <Route path="/order/smm" element={<SMMOrder />} />
    <Route path="/about" element={<AboutUs />} />
    <Route path="/contact" element={<ContactUs />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/edit" element={<EditProfile />} />
    <Route path="/order/influencer" element={<InfluencerOrder />} /> */}
  </Routes>
  );
}

export default App;
