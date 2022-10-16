/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  test: true,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    toggleTest: (state) => {
      state.test = !state.test;
    },
  },
});

export const { toggleTest } = globalSlice.actions;

export default globalSlice.reducer;
