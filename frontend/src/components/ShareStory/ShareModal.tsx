// frontend/src/components/ShareStory/ShareModal.tsx

import React from 'react';

interface ShareModalProps {
  closeModal: () => void;
}

const ShareModal: React.FC<ShareModalProps> = ({ closeModal }) => {
  const shareUrl = "https://example.com/share/your-story-id"; // Replace with the actual URL to share.

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl).then(
      () => {
        alert('Link copied to clipboard');
      },
      (err) => {
        console.error('Could not copy text: ', err);
      }
    );
  };

  return (
    <div>
      <h3>Share this Story</h3>
      <p>Copy the link below:</p>
      <input type="text" value={shareUrl} readOnly />
      <button onClick={copyToClipboard}>Copy</button>
      {/* You can add social media sharing buttons here */}
      <button onClick={closeModal}>Close</button>
    </div>
  );
};

export default ShareModal;
