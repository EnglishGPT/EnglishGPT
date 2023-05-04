// frontend/src/components/ShareStory/ShareButton.tsx

import React, { useState } from 'react';
import ShareModal from './ShareModal';

const ShareButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleModal}>Share</button>
      {isOpen && <ShareModal closeModal={toggleModal} />}
    </>
  );
};

export default ShareButton;
