import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const SignUp = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { name, email, password } = formData;

    try {
      const response = await fetch('http://localhost:3000/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      });

      if (!response.ok) {
        const data = await response.json();
        alert(data.message || 'Registration failed!');
        return;
      }

      const data = await response.json();
      alert('Registration successful!');
      login(data.token, data.user);
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200 p-5">
      <div className="flex flex-col md:flex-row max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex-1 p-8">
          <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mb-4 w-full p-4 border border-gray-300 rounded-lg text-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mb-4 w-full p-4 border border-gray-300 rounded-lg text-lg"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mb-6 w-full p-4 border border-gray-300 rounded-lg text-lg"
            />
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white rounded-lg text-lg font-semibold transition duration-300 hover:bg-blue-600"
            >
              Sign Up
            </button>
            <div className="mt-6 text-center">
              <p className="text-sm">
                Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Log In</Link>
              </p>
            </div>
          </form>
        </div>
        <div
          className="hidden md:block flex-1 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://www.insidehook.com/wp-content/uploads/2018/03/Graduation-caps-1.jpg?fit=1200%2C800")'
          }}
        ></div>
      </div>
    </div>
  );
};

export default SignUp;
