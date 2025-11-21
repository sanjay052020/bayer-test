import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Doctor } from './doctorTypes';

export const fetchDoctors = createAsyncThunk<Doctor[]>(
  'doctors/fetchDoctors',
  async () => {
    const response = await axios.get<Doctor[]>('http://localhost:5000/api/doctors');
    return response.data;
  }
);