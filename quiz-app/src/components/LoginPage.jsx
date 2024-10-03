import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isChecked, setIsChecked]=useState(false)

      // Load email from local storage on component mount
      useEffect(() => {
        const savedEmail = localStorage.getItem("email");
        if (savedEmail) {
            setEmail(savedEmail);
            setIsChecked(true); // Check the box if there is an email saved
        }
    }, []);

    
    const handleLogin = (e) => {
      e.preventDefault();
      
      if (isChecked) {
          // Save email to local storage if checkbox is checked
          localStorage.setItem("email", email);
      } else {
          // Remove email from local storage if checkbox is unchecked
          localStorage.removeItem("email");
     }

      // Clear input fields
      setEmail("");
      setPassword("");
      setIsLoggedIn(true); // Set logged in state to true
  };

  const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
  };

    return (
           <div>
                <div className="flex flex-col items-center justify-center min-h-screen mb-4 p-4 bg-gray-100">
                    <form onSubmit={handleLogin}className="w-full max-w-md bg-white p-6 rounded-lg shadow-md" >
                       <div className="mb-4">
                           <h1 className="text-4xl font-bold text-blue-500 mb-6">Login here with your email account to access the quizzes</h1>
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
                         <Link to="/start">
                              <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
                                  Login
                              </button>
                         </Link>
                   </form>
             </div>
         </div>
      );
}

export default LoginPage;