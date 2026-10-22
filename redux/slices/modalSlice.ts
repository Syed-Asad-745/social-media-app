import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signUpModalState: false,
  logInModalState: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openSignUpModal: (state) => {
      state.signUpModalState = true;
    },
    closeSignUpModal: (state) => {
      state.signUpModalState = false;
    },
    openLogInModal: (state) => {
      state.logInModalState = true;
    },
    closeLogInModal: (state) => {
      state.logInModalState = false;
    },
  },
});

export const { openSignUpModal, closeSignUpModal, openLogInModal, closeLogInModal } = modalSlice.actions;

export default modalSlice.reducer;
