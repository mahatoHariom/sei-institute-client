import { Role } from "@/types/user";
import { createSlice } from "@reduxjs/toolkit";

// Define the state type as a union of User and null
// type UserState = User;

// const initialState: UserState = null;

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    fullName: "",
    isVerified: false,
    role: Role.user,
  },
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
    // clearUser: () => {
    //   return iit;
    // },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
