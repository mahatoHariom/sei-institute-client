import { User } from "@/types/user";
import { createSlice } from "@reduxjs/toolkit";

// Define the state type as a union of User and null
type UserState = User | null;

const initialState: UserState = null;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
    clearUser: () => {
      return null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
