// frontend/src/components/Exam/GrammarExam.tsx

import React from 'react';

const GrammarExam: React.FC = () => {
  const questions = [
    { question: 'Is this sentence correct?', sentence: 'I likes apples.', answer: 'No' },
    { question: 'Is this sentence correct?', sentence: 'She is eating a banana.', answer: 'Yes' },
    { question: 'Is this sentence correct?', sentence: 'He buy some oranges.', answer: 'No' },
  ];

  return (
    <div>
      <h2>Grammar Exam</h2>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            {question.question} "{question.sentence}" - Correct answer: {question.answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GrammarExam;
