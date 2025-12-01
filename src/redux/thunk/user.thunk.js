import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// -------------------- THUNKS --------------------
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
// Signup
export const signupUser = createAsyncThunk(
  "user/signup",
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/signup`, {
        name,
        email,
        password,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);

// Signin
export const signinUser = createAsyncThunk(
  "user/signin",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/signin`, {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);

// Get user by ID
export const getUserDetails = createAsyncThunk(
  "user/getUserDetails",
  async (id, { getState, rejectWithValue }) => {
    try {
      const { token } = getState().user;
      const response = await axios.get(`${API_BASE_URL}/user/${id}`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      return response.data.user;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);

export const updateUserDetails = createAsyncThunk(
  "user/updateUserDetails",
  async ({ id, updatedData }, { getState, rejectWithValue }) => {
    try {
      const { token } = getState().user;
      const response = await axios.put(
        `${API_BASE_URL}/user/update/${id}`,
        updatedData,
        {
          headers: {
            Authorization: `${token}`,
          },
        },
      );
      return response.data.user;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);
