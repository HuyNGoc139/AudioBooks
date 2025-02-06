import {createAsyncThunk} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {API_ENDPOINT} from '@env';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TAuthStackParamList} from '@src/types/routes/auth.route';
import {TAppStackParamList} from '@src/types/routes/app.route';

const API_URL = `${API_ENDPOINT}/auth`;

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (
    {accountname, password}: {accountname: string; password: string},
    {rejectWithValue},
  ) => {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        accountname,
        password,
      });

      if (response.data.token) {
        // Lưu token vào AsyncStorage
        await AsyncStorage.setItem('token', response.data.token);
      }

      return response.data?.user; // Trả về thông tin user và token
    } catch (error: any) {
      Alert.alert('Lỗi', error.response?.data?.message || 'Đăng nhập thất bại');
      return rejectWithValue(
        error.response?.data?.message || 'Đăng nhập thất bại',
      );
    }
  },
);

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (
    {
      accountname,
      email,
      password,
      username,
    }: {accountname: string; email: string; password: string; username: string},
    {rejectWithValue},
  ) => {
    try {
      const response = await axios.post(`${API_URL}/register`, {
        accountname,
        username,
        email,
        password,
      });

      Alert.alert('Thành công', 'Đăng ký thành công, hãy đăng nhập!');

      return response.data?.user; // Trả về thông tin user (nếu cần)
    } catch (error: any) {
      Alert.alert('Lỗi', error.response?.data?.message || 'Đăng ký thất bại');
      return rejectWithValue(
        error.response?.data?.message || 'Đăng ký thất bại',
      );
    }
  },
);

export const updateFavorite = createAsyncThunk(
  'auth/updateFavorite',
  async (
    {userId, favorite}: {userId: string; favorite: string[]},
    {rejectWithValue},
  ) => {
    try {
      const response = await axios.put(
        `${API_ENDPOINT}/users/${userId}/favorite`,
        {favorite},
      );

      Alert.alert('Thành công', 'Cập nhật danh sách yêu thích thành công!');
      // navigation.replace('HomeTab');
      return response.data.user;
    } catch (error: any) {
      Alert.alert('Lỗi', error.response?.data?.message || 'Cập nhật thất bại');
      return rejectWithValue(
        error.response?.data?.message || 'Cập nhật thất bại',
      );
    }
  },
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, {rejectWithValue}) => {
    try {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('user');
      return true; // Thành công
    } catch (error) {
      return rejectWithValue('Logout failed!');
    }
  },
);
