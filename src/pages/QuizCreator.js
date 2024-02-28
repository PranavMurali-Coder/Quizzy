import React from 'react';
import CreateQuizForm from '../components/CreateQuizForm';

const QuizCreator = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-8 text-white">
          <span className="text-blue-500">Q</span>
          <span className="text-green-500">u</span>
          <span className="text-yellow-500">i</span>
          <span className="text-red-500">z</span>
          <span className="text-purple-500">z</span>
          <span className="text-indigo-500">y</span>
        </h1>
        <h2 className="text-3xl font-bold my-4 text-white">Create a Quiz</h2>
        <CreateQuizForm />
      </div>
    </div>
  );
};

export default QuizCreator;
