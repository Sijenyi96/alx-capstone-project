import React from "react";
import { Link } from "react-router-dom";


function HomePage() {

    return ( 
                 <div className="flex flex-col items-center justify-center min-h-screen p-4 mb-4 bg-gray-100 " >
                      <h1 className="text-4xl font-bold text-blue-500 mb-6">Welcome to QuizMaster!</h1>
                      <p className="text-lg text-gray-700 max-w-xl text-center">
                           Ready to test your knowledge? Welcome to QuizMaster, the ultimate quiz app where you can challenge yourself 
                           with a wide range of topics, from history to science, entertainment, and much more! Choose your category, 
                           select your difficulty level, and see how much you really know. Whether you're a trivia enthusiast or just 
                           looking for some fun, QuizMaster has something for everyone. Dive in, start a quiz, and let the fun begin!
                      </p>
                      <Link to="/register">
                          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded">Register Here!</button>
                      </Link>
                      <Link to="/login">
                          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded">Login Here!</button>
                      </Link>
                 </div>
         );
}

export default HomePage;