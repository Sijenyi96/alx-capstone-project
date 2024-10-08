import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineSearch } from 'react-icons/ai';

const QuestionCard = () => {
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [questions, setQuestions] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizEnded, setQuizEnded] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [error, setError] = useState('');

  const fetchQuestions = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(
        `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
      );
      setQuestions(response.data.results);
      setFilteredQuestions(response.data.results);
    } catch (err) {
      setError('Failed to fetch questions. Please try again.');
    }
    setLoading(false);
  };

  const handleSearchClick = async () => {
    await fetchQuestions();
    handleSearch(questions);
  };

  const handleSearch = () => {
    const filtered = questions.filter((question) =>
      question.question.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredQuestions(filtered);
    if (filtered.length === 0) {
      setErrorMessage('No questions match your search query.');
    } else {
      setErrorMessage('');
    }
  };

  useEffect(() => {
    if (quizStarted) {
      fetchQuestions();
    }
  }, [quizStarted, category, difficulty]);

  const handleAnswerSelect = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleSubmitAnswer = () => {
    const currentQuestion = filteredQuestions[currentQuestionIndex];
    if (currentQuestion && selectedAnswer === currentQuestion.correct_answer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer('');
    } else {
      setQuizEnded(true);
    }
  };

  const handleStartQuiz = async() => {
    setQuizStarted(true);
    setQuizEnded(false);
    setScore(0);
    setCurrentQuestionIndex(0);
    setSelectedAnswer('');
    setFilteredQuestions([]);
   await fetchQuestions();
  };

  const getAnswers = (question) => {
    const answers = [...question.incorrect_answers, question.correct_answer];
    return (answers);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center p-4 bg-gray-100">
      <h2 className="text-4xl font-bold text-blue-500 mb-6" > Welcome Quizzes</h2>
        <div className="flex items-center border border-gray-300 rounded w-full max-w-md mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for questions..."
            className="w-full p-2 outline-none"
          />
          <button
            onClick={handleSearchClick}
            className="p-2 text-blue-500"
            aria-label="search"
          >
            <AiOutlineSearch size={24} />
          </button>
        </div>
        <div className="flex flex-col w-full max-w-md">
          <label className="mb-2">Category:</label>
          <select
            value={category}
            className="mb-4 p-2 border border-gray-300 rounded"
            onChange={(e) => setCategory(e.target.value)}>
            <option>Select Category</option>
            <option>General Knowledge</option>
            <option>Sports</option>
            <option>History</option>
            <option>Science</option>
          </select>
          <label className="mb-2">Difficulty:</label>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="mb-4 p-2 border border-gray-300 rounded">
            <option value="">Select Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
       
        {loading && <div>Loading quizzes...</div>}
        {errorMessage && (
          <div className="mt-4 text-red-500 w-full max-w-md">{errorMessage}</div>
        )}
        <div className="mb-4 w-full max-w-md">
          <button onClick={handleStartQuiz} className="w-full bg-blue-500 text-white py-2 rounded">
            Start Quiz
          </button>
        </div>
      </div>
      {quizStarted && !quizEnded && filteredQuestions.length > 0 && (
          <div className="flex flex-col w-full  items-center justify-center p-4 bg-gray-100">
          <h2>Question {currentQuestionIndex + 1}/{filteredQuestions.length}</h2>
          {filteredQuestions[currentQuestionIndex]?.question && (
            <p>{filteredQuestions[currentQuestionIndex].question}</p>
          )}
          {getAnswers(filteredQuestions[currentQuestionIndex]).map((answer, index) => (
            <label key={index} className=" flex w-full  items-center justify-center block text-gray-700">
              <input
                type="radio"
                value={answer}
                checked={selectedAnswer === answer}
                onChange={handleAnswerSelect}
              />
              {answer}
            </label>
          ))}
          <button onClick={handleSubmitAnswer} className="mb-4 bg-blue-500 text-white w-full max-w-md py-2 rounded">Submit Answer</button>
        </div>
      )}
      {quizStarted && quizEnded && (
       <div className="flex flex-col w-full  items-center justify-center p-4 bg-gray-100">
          <h2>Quiz Ended</h2>
          <p>Your score: {score}/{filteredQuestions.length}</p>
          <button onClick={handleStartQuiz} className="w-full bg-blue-500 text-white w-full max-w-md py-2 rounded">Restart Quiz</button>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
