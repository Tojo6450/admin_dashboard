import { createSlice } from '@reduxjs/toolkit';
import dummyData from '../../data/dummyData.json';
import type { DashboardStats } from '../../types';

const initialState: DashboardStats = dummyData.stats;

const dashSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    // We only need the data for display as per the current instructions
  },
});

export default dashSlice.reducer;