// frontend/src/components/ReadStory/VocabularyList.tsx

import React from 'react';

interface VocabularyListProps {
  vocabList: { word: string; translation: string }[];
}

const VocabularyList: React.FC<VocabularyListProps> = ({ vocabList }) => {
  return (
    <div className="vocab-list">
      <h3>Vocabulary List</h3>
      <ul>
        {vocabList.map((vocab, index) => (
          <li key={index}>
            {vocab.word} - {vocab.translation}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VocabularyList;
