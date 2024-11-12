import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './Component/Profile';
import Login from './Login/Login';
import Signup from './Login/Signup';
import Sell from './Component/Sell';
import Editprof from './Component/Editprof';
function App() {
  return (
    <Router>
    <Routes>

    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/sell" element={<Sell />} />
      <Route path="/editprof" element={<Editprof />} />
     
    </Routes>
  </Router>
  );
}

export default App;
