// import './App.css';
// import Home from './Pages/Home';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Profile from './Component/Profile';
// import Login from './Login/Login';
// import Signup from './Login/Signup';

// function App() {
//   return (
//     <Router>
//     <Routes>

//     <Route path="/login" element={<Login />} />
//     <Route path="/signup" element={<Signup />} />
//       <Route path="/" element={<Home />} />
//       <Route path="/profile" element={<Profile />} />
     
//     </Routes>
//   </Router>
//   );
// }

// export default App;
import './App.css';
import './index.css';

import Home from './Pages/Home';
import Profile from './Component/Profile';
import Login from './Login/Login';
import Signup from './Login/Signup';
import ProtectedRoute from './Login/ProtectedRoute';
import EditProfile from './Component/Editprof';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Editprof from './Component/Editprof';
import Sell from './Component/Sell';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      

      <Route
          path="/editprof"
          element={
            <ProtectedRoute>
              <Editprof/>
            </ProtectedRoute>
          }
        />

      <Route
          path="/sell"
          element={
            <ProtectedRoute>
             <Sell/>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

