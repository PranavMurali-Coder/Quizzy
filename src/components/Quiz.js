import React, { useState, useEffect } from 'react';
import questionsData from '../data/questions.json';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userResponses, setUserResponses] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
   
    setQuestions(questionsData);
  }, []);

  const handleOptionSelect = (optionIndex) => {
   
    setUserResponses([...userResponses, optionIndex]);

    
    if (optionIndex === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const restartQuiz = () => {
    
    setCurrentQuestionIndex(0);
    setUserResponses([]);
    setScore(0);
  };

  return (
    <div>
      {/* Render quiz questions */}
      {currentQuestionIndex < questions.length ? (
        <div>
          <h2 className="text-white">{questions[currentQuestionIndex].question}</h2>
          <ul>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <li key={index} onClick={() => handleOptionSelect(index)} className="text-white cursor-pointer">{option}</li>
            ))}
          </ul>
        </div>
      ) : (
        
        <div>
          <h2 className="text-white">Quiz Completed!</h2>
          <p className="text-white">Your Score: {score} out of {questions.length}</p>
          <button onClick={restartQuiz} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
