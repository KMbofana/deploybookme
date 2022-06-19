import './App.css';
import './Theme.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/frontend/Home';
import Specialist from './pages/frontend/Specialist';
import Uploadtest from './pages/frontend/Uploadtest';
import Login from './pages/auth/Login';
import VerifyAccount from './pages/auth/VerifyAccount';
import Specialistmore from './pages/frontend/Specialistmore';
import Register from './pages/auth/Register';
import  ImageCropper  from './pages/frontend/components/editimages/ImageCropper';
import Orderdetails from './pages/frontend/Orderdetails'
import CarouselCrop from './pages/frontend/components/Specialistcomponents/CarouselCrop';
// i

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/more/:id" element={<Specialistmore />}/>
      <Route path="/specialist/:category" element={<Specialist />}/>
      <Route path="/verify/" element={<VerifyAccount />}/>
      <Route path="/specialist" element={<Specialist />}/>
      <Route path="/upload/" element={<Uploadtest />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/login/" element={<Login />}/>
      <Route path="/testImage" element={<ImageCropper/>}/>
      <Route path="/testImage2" element={<CarouselCrop/>}/>
      <Route path="/specialistmore" element={<Specialistmore/>}/>
      <Route path="/order" element={<Orderdetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;
