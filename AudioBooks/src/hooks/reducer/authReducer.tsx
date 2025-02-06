import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {
  loginUser,
  logoutUser,
  registerUser,
  updateFavorite,
} from '../authAction';
interface User {
  email: string;
  id: string;
  username: string;
  DateBitrhDay?: any;
  accountname?: string;
  favorite?: string[];
  createAt?: string;
  TwoFA?: boolean;
  emailOTP?: string;
}
interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  error: string | null;
  loading: boolean;
  token: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  error: null,
  loading: false,
  token: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // Xử lý đăng nhập
      .addCase(loginUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.token = action.payload.token;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload as null;
      })

      // Xử lý đăng ký
      .addCase(registerUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isAuthenticated = false;
        // state.user = action.payload;
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload as null;
      })
      .addCase(updateFavorite.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateFavorite.fulfilled, (state, action) => {
        if (state.user) {
          state.user.favorite = action.payload.favorite; // Cập nhật danh sách yêu thích
        }
        state.loading = false;
      })
      .addCase(updateFavorite.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string; // Xử lý lỗi
      })

      // Xử lý đăng xuất
      .addCase(logoutUser.pending, state => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, state => {
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;
        state.error = null;
        state.loading = false;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as null; // Lưu lỗi nếu có lỗi khi đăng xuất
      });
  },
});

export default authSlice.reducer;
