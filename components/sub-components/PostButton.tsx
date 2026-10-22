"use client";

import React from "react";
import { openSignUpModal } from "@/redux/slices/modalSlice";
import { useDispatch } from "react-redux";

export default function PostButton() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => dispatch(openSignUpModal())}
        className="bg-yellow-300 w-fit px-8 py-1 text-[1.3rem] rounded-full shadow-lg shadow-gray-400 mr-16 cursor-pointer hover:bg-yellow-400 hover:scale-110 active:scale-90 transition-all duration-50 ease-in-out"
      >
        Post
      </button>
    </div>
  );
}
