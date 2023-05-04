import React from 'react';

interface StorySectionProps {
  englishText: string;
  chineseText: string;
  vocabList: { word: string; translation: string }[];
}

const StorySection: React.FC<StorySectionProps> = ({ englishText, chineseText, vocabList }) => {
  return (
    <div className="story-section">
      <div className="text">
        <p className="english">{englishText}</p>
        <p className="chinese">{chineseText}</p>
      </div>
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
    </div>
  );
};

export default StorySection;
