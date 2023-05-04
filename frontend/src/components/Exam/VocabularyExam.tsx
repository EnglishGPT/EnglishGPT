// frontend/src/components/Exam/VocabularyExam.tsx

import React from 'react';

const VocabularyExam: React.FC = () => {
  const questions = [
    { word: 'apple', answer: '苹果' },
    { word: 'banana', answer: '香蕉' },
    { word: 'orange', answer: '橙子' },
  ];

  return (
    <div>
      <h2>Vocabulary Exam</h2>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            {question.word} - {question.answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VocabularyExam;
