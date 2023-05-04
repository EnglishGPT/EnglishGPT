// frontend/src/components/Exam/SentenceExam.tsx

import React from 'react';

const SentenceExam: React.FC = () => {
  const questions = [
    { sentence: 'I like apples.', translation: '我喜欢苹果。' },
    { sentence: 'She is eating a banana.', translation: '她正在吃香蕉。' },
    { sentence: 'He bought some oranges.', translation: '他买了一些橙子。' },
  ];

  return (
    <div>
      <h2>Sentence Exam</h2>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            {question.sentence} - {question.translation}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SentenceExam;
