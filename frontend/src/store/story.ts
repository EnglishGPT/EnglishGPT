import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StoryState {
  stories: any[];
  error: string | null;
}

const initialState: StoryState = {
  stories: [],
  error: null,
};

const storySlice = createSlice({
  name: 'story',
  initialState,
  reducers: {
    setStories: (state, action: PayloadAction<any[]>) => {
      state.stories = action.payload;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { setStories, setError } = storySlice.actions;

export default storySlice.reducer;
