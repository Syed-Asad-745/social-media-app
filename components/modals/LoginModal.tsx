"use client";

import React, { useState } from "react";
import { Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { closeLogInModal, openLogInModal } from "@/redux/slices/modalSlice";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

export default function LoginModal() {
  const isOpen = useSelector((state: RootState) => state.modals.logInModalState);

  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <button onClick={() => dispatch(openLogInModal())} className="h-12 w-32 px-4 py-2 cursor-pointer hover:scale-110 hover:bg-white transition-all duration-150 ease-in-out border-3 border-white rounded-full mr-6">
        Login
      </button>

      <Modal open={isOpen} onClose={() => dispatch(closeLogInModal())} className="flex justify-center items-center  backdrop-blur-xs">
        <div className="relative h-fit w-150 bg-white rounded-xl flex flex-col  p-10">
          <CloseIcon onClick={() => dispatch(closeLogInModal())} sx={{ fontSize: 48 }} className="self-end mt-6 mr-6 rounded-full cursor-pointer absolute -right-2 -top-2" />
          <form className="flex flex-col items-center w-full">
            <h2 className="font-black text-3xl w-full my-6">Log into your account</h2>
            <input type="email" placeholder="Email" className="w-full outline-none bg-white mb-6 px-4 py-2 rounded-xl border-2 border-gray-300 focus:border-yellow-300" />
            <div className="w-full flex border-2 border-gray-300 rounded-xl pr-4 items-center h-fit mb-6">
              <input type={showPassword ? "text" : "password"} placeholder="Password" className="w-full outline-none bg-white px-4 py-2 rounded-xl border-none focus:border-yellow-300 focus:border-2" />
              <span onClick={() => setShowPassword(!showPassword)} className="cursor-pointer">
                {!showPassword ? <VisibilityOutlinedIcon className="text-gray-400" /> : <VisibilityOffOutlinedIcon className="text-gray-400" />}
              </span>
            </div>
            <button type="submit" className="text-black bg-yellow-300 py-2 px-6 rounded-full cursor-pointer font-bold hover:scale-120 transition-all duration-300 ease-in-out">
              Log in
            </button>
            <span className="my-2">or</span>
            <button type="submit" className="text-black border-2 border-yellow-300 py-2 px-6 rounded-full cursor-pointer font-bold hover:scale-120 transition-all duration-300 ease-in-out">
              Log in as Guest
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
}
