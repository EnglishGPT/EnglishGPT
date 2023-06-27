import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import '../../assets/styles/components/StoryReader.module.css';

// Dummy data
const pages = [
  'This is the first page of the story...',
  'This is the second page of the story...',
  'This is the third page of the story...',
];

const StoryReader: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Box className="storyReader">
      <Typography variant="body1" className="pageContent">
        {pages[currentPage]}
      </Typography>
      <Box display="flex" justifyContent="flex-end" alignItems="center" mt={2}>
        <IconButton onClick={handlePreviousPage} disabled={currentPage === 0}>
          <NavigateBefore />
        </IconButton>
        <Typography>{currentPage + 1} / {pages.length}</Typography>
        <IconButton onClick={handleNextPage} disabled={currentPage === pages.length - 1}>
          <NavigateNext />
        </IconButton>
      </Box>
    </Box>
  );
};

export default StoryReader;
