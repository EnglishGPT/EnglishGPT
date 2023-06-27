import React, { useState } from 'react';
import { Box, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/components/GenerateStory.module.css';

const GenerateStory: React.FC = () => {
  const [storyType, setStoryType] = useState('');
  const [storyStyle, setStoryStyle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Submit the form and generate a new story
    console.log('Story generated');
    navigate('/dashboard/stories/read');
  };

  return (
    <Box className="generateStory">
      <FormControl fullWidth className="formControl">
        <InputLabel>Story Type</InputLabel>
        <Select value={storyType} onChange={e => setStoryType(e.target.value)}>
          <MenuItem value="type1">Type 1</MenuItem>
          <MenuItem value="type2">Type 2</MenuItem>
          <MenuItem value="type3">Type 3</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth className="formControl">
        <InputLabel>Story Style</InputLabel>
        <Select value={storyStyle} onChange={e => setStoryStyle(e.target.value)}>
          <MenuItem value="style1">Style 1</MenuItem>
          <MenuItem value="style2">Style 2</MenuItem>
          <MenuItem value="style3">Style 3</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Description"
        multiline
        rows={4}
        fullWidth
        className="formControl"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <Button variant="contained" color="primary" className="submitButton" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
};

export default GenerateStory;
