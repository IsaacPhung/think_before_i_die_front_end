import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../services/auth.service";
import { setMessage } from "../message/messageSlice";

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }, thunkAPI) => {
    try {
      const data = await AuthService.login(username, password);
      return {
        user: data?.user,
      };
    } catch (error) {
      thunkAPI.dispatch(setMessage("Sai tài khoản hoặc mật khẩu"));
      return thunkAPI.rejectWithValue(error);
    }
  }
);
