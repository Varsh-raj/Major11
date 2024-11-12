import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './Component/Profile';
import Login from './Login/Login';
import Signup from './Login/Signup';

function App() {
  return (
    <Router>
    <Routes>

    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
     
    </Routes>
  </Router>
  );
}

export default App;
