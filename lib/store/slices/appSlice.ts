import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AppState = {
  counter: number;
};

interface IncreasePayload {
  num: number;
}

export const initialState: AppState = {
  counter: 0,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    increase(state: AppState, action: PayloadAction<IncreasePayload>) {
      const { num } = action.payload;
      state.counter += num;
    },
  },
});

export const { increase } = appSlice.actions;

export default appSlice.reducer;
