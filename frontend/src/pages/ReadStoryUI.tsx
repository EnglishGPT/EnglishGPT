// frontend/src/pages/ReadStoryUI.tsx

import React from 'react';
import StorySection from '../components/ReadStory/StorySection';
import VocabularyList from '../components/ReadStory/VocabularyList';

const ReadStoryUI: React.FC = () => {
  // ... your existing code
  // Mock data for demonstration purposes
  const englishText = 'The brave astronaut fought the aliens.';
  const chineseText = '勇敢的宇航员与外星人作战。';
  const vocabList = [
    { word: 'brave', translation: '勇敢' },
    { word: 'astronaut', translation: '宇航员' },
    { word: 'fought', translation: '作战' },
    { word: 'aliens', translation: '外星人' },
  ];

  return (
    <div>
      <h1>Read Story</h1>
      <StorySection
        englishText={englishText}
        chineseText={chineseText}
        vocabList={vocabList}
      />
      <VocabularyList vocabList={vocabList} />
    </div>
  );
};

export default ReadStoryUI;
