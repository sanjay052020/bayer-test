import { createSlice } from '@reduxjs/toolkit';
import { Doctor } from './doctorTypes';
import { fetchDoctors } from './doctorThunks';

interface DoctorState {
  items: Doctor[];
  loading: boolean;
  error: string | null;
}

const initialState: DoctorState = {
  items: [],
  loading: false,
  error: null,
};

const doctorSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctors.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDoctors.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchDoctors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch doctors';
      });
  },
});

export default doctorSlice.reducer;