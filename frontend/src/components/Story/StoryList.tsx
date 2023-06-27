import React, { useState } from 'react';
import { Box, Typography, CircularProgress, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/components/StoryList.module.css';

// Dummy data
const stories = [
  { id: 1, title: 'Story 1', progress: 75 },
  { id: 2, title: 'Story 2', progress: 50 },
  { id: 3, title: 'Story 3', progress: 25 },
];

const StoryList: React.FC = () => {
  const [expandedStory, setExpandedStory] = useState<number | null>(null);
    const navigate = useNavigate();

  const handleReadStory = (storyId: number) => {
    navigate(`/dashboard/stories/read/${storyId}`);
  };

  return (
    <Box className="storyList">
      {stories.map(story => (
        <Box
          key={story.id}
          className={`storyItem ${expandedStory === story.id ? 'expanded' : ''}`}
          onClick={() => setExpandedStory(expandedStory === story.id ? null : story.id)}
        >
          <Typography variant="h6">{story.title}</Typography>
          <CircularProgress variant="determinate" value={story.progress} />
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
              e.stopPropagation();
              handleReadStory(story.id);
            }}
          >
            Read
          </Button>
          {expandedStory === story.id && (
            <Box className="progressContainer">
              <Typography>Exams:</Typography>
              {/* Render exams here */}
              <Typography>Vocabularies:</Typography>
              {/* Render vocabularies here */}
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default StoryList;
