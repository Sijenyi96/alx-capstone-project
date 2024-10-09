import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'; 

function LoginPage() {
   // State variables to manage user input (email, password), login status, and 'remember me' checkbox
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate(); 

   // useEffect hook to load saved email from localStorage if 'remember me' was checked
  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
      setEmail(savedEmail);
      setIsChecked(true); 
    }
  }, []);
  
    // Handle the login form submission
  const handleLogin = (e) => {
    e.preventDefault();

    
    // If 'remember me' is checked, save the email in localStorage
   if (isChecked) {
      localStorage.setItem("email", email);
    } else {
    // If unchecked, remove the saved email from localStorage
      localStorage.removeItem("email");
    }

      //check if both email and password are filled
    if (email && password) {
      setIsLoggedIn(true);

      navigate("/start");
    } else {
      alert("Please enter both email and password.");
    }
  };

   // Handle 'remember me' checkbox
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen mb-4 p-4 bg-gray-100">
        <form onSubmit={handleLogin} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <h1 className="text-4xl font-bold text-blue-500 mb-6"> Login</h1>
            <label className="block font-bold text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email Address"
            />
          </div>

          <div className="mb-4">
            <label className="block font-bold text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            />
          </div>

          <div className="mb-4">
            <label>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              Remember me!
            </label>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
