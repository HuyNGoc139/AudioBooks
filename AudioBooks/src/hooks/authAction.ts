import {createAsyncThunk} from '@reduxjs/toolkit';
import {Alert} from 'react-native';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (
    {email, password}: {email: string; password: string},
    {rejectWithValue},
  ) => {
    try {
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (
    {
      email,
      password,
      username,
    }: {email: string; password: string; username: string},
    {rejectWithValue},
  ) => {
    try {
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const updateUser = createAsyncThunk(
  'auth/update',
  async (
    {
      userId,
      user,
      isEnabled,
      urlprofile,
      emailOTP,
    }: {
      userId: string;
      user: any;
      isEnabled: boolean;
      urlprofile: string;
      emailOTP: string;
    },
    {rejectWithValue},
  ) => {
    try {
    } catch (error) {
      return rejectWithValue('Update failed!');
    }
  },
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, {rejectWithValue}) => {
    try {
    } catch (error) {
      return rejectWithValue('Logout failed!');
    }
  },
);
