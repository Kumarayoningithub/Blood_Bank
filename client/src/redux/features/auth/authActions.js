
import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/API";
import { toast } from "react-toastify";

// Login
export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ role, email, password }, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/auth/login", { role, email, password });
      if (data.success) {
        toast.success(data.message);
        localStorage.setItem("token", data.token);
      }
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message || "Unknown error occurred"
      );
    }
  }
);

// Register
export const userRegister = createAsyncThunk(
  "auth/register",
  async (
    {
      name,
      role,
      email,
      password,
      phone,
      organisationName,
      address,
      hospitalName,
      website,
    },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await API.post("/auth/register", {
        name,
        role,
        email,
        password,
        phone,
        organisationName,
        address,
        hospitalName,
        website,
      });
      if (data.success) {
        toast.success("User Registered Successfully");
      }
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message || "Unknown error occurred"
      );
    }
  }
);

// Current User
export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get("/auth/current-user");
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message || "Unknown error occurred"
      );
    }
  }
);
