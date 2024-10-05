import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReactNode } from "react";

interface ModalState {
  isOpen: boolean;
  title: string;
  description: string;
  content: (() => ReactNode) | null; // content can be a function returning ReactNode
  footer: (() => ReactNode) | null; // content can be a function returning ReactNode
}

const initialState: ModalState = {
  isOpen: false,
  title: "",
  description: "",
  content: null,
  footer: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<Partial<ModalState>>) => {
      state.isOpen = true;
      state.title = action.payload.title || "";
      state.description = action.payload.description || "";
      state.content = action.payload.content || null;
      state.footer = action.payload.footer || null;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.title = "";
      state.description = "";
      state.content = null;
      state.footer = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
