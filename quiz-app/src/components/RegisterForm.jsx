import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RegisterForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setEmail("");
    setUsername("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setUsername('')
    setEmail('') 
    setPassword('')
  };

  return (
    
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
               <form onSubmit={handleSubmit}  className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-4" >
                       <h1 className="text-4xl font-bold text-blue-500 mb-6">You don't have an account? Register here to continue!</h1>
                       <label className="block font-bold mb-1">Username:</label>
                       <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter Username"
                            className="w-full border border-gray-300 p-2 rounded"
                       />
                  </div>
                  <div className="mb-4" >
                       <label className="block font-bold text-gray-700">Email:</label>
                       <input
                           type="email"
                           name="email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           placeholder="Enter Email Address"
                           className="w-full border border-gray-300 p-2 rounded"
                       />
                  </div>
                  <div className="mb-4" >
                       <label className="block font-bold mb-1">Password:</label>
                       <input
                           type="password"
                           name="password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           placeholder="Enter Password"
                           className="w-full border border-gray-300 p-2 rounded"
                       />
                  </div>
                  <Link to="/login">
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
                             Register
                        </button>
                  </Link>
              </form>
          </div>
       </div>
   
  );
};

export default RegisterForm;