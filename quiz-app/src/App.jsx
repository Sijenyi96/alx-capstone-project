import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import RegisterForm from './components/RegisterForm';
import LoginPage from './components/LoginPage';
import QuizStart from './components/QuizStart';
import QuestionCard from './components/QuestionCard';

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/start" element={<QuizStart/>} />
        <Route path="/Search Questions" element={<QuestionCard/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;







