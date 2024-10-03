    
import React from "react";
import { Link } from "react-router-dom";

function QuizStart() {


    return ( 
        <div>
            
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
                
                <p className="text-lg text-gray-700 max-w-xl text-center">
                      Are you ready to start the quizzes? click the start button to start.
                    </p>
                    <h1 className="text-4xl font-bold text-blue-500 mb-6">All the best!</h1>
                   <Link to="/Search Questions">
                   <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Start Now</button>
                    </Link>
                    
                </div>
             </div>
        
        
        
     );
}

export default QuizStart;