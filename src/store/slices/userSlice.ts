import { Role } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state for the user
const initialState = {
  id: "",
  fullName: "",
  isVerified: false,
  role: Role.user,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Sets the user data in the state
    setUser: (state, action: PayloadAction<typeof initialState>) => {
      return action.payload;
    },
    // Clears the user data by resetting to the initial state
    clearUser: () => {
      return initialState; // Reset to initial state
    },
  },
});

// Export the actions
export const { setUser, clearUser } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
