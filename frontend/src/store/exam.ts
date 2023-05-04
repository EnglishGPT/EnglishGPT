import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ExamState {
  exams: any[];
  error: string | null;
}

const initialState: ExamState = {
  exams: [],
  error: null,
};

const examSlice = createSlice({
  name: 'exam',
  initialState,
  reducers: {
    setExams: (state, action: PayloadAction<any[]>) => {
      state.exams = action.payload;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { setExams, setError } = examSlice.actions;

export default examSlice.reducer;
