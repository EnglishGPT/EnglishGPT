// frontend/src/components/Exam/ExamSelection.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const ExamSelection: React.FC = () => {
  const navigate = useNavigate();

  const navigateToExam = (examType: string) => {
    navigate(`/exam/${examType}`);
  };

  return (
    <div>
      <h2>Select an Exam Type</h2>
      <button onClick={() => navigateToExam('vocabulary')}>Vocabulary Exam</button>
      <button onClick={() => navigateToExam('sentence')}>Sentence Exam</button>
      <button onClick={() => navigateToExam('grammar')}>Grammar Exam</button>
    </div>
  );
};

export default ExamSelection;
