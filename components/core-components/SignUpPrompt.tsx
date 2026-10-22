import React from "react";
import LoginModal from "../modals/LoginModal";
import SignupModal from "../modals/SignUpModal";

export default function SignUpPrompt() {
  return (
    <div className="fixed bottom-0 w-full bg-yellow-300 h-20 flex items-center justify-center">
      <div className="text-center">
        <p className="text-[1.3rem]">Don't miss out on the latest trending chatter</p>
        <p>ChatMAX has the most tea spilling community ever!</p>
      </div>

      <div className="absolute right-8 flex">
        <LoginModal />
        <SignupModal />
      </div>
    </div>
  );
}
