import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  loggedIn: boolean;
  userData: any;
  error: string | null;
}

const initialState: UserState = {
  loggedIn: false,
  userData: null,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.loggedIn = true;
      state.userData = action.payload;
      state.error = null;
    },
    setLogout: (state) => {
      state.loggedIn = false;
      state.userData = null;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { setUser, setLogout, setError } = userSlice.actions;

export default userSlice.reducer;
