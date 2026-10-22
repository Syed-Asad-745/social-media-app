import React from "react";
import Image from "next/image";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import MoodOutlinedIcon from "@mui/icons-material/MoodOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import PostButton from "./PostButton";

export default function PostInput() {
  return (
    <div className="mb-24">
      <div className="flex items-center mx-12 mt-12 gap-4">
        <Image src={"/assets/Logo.png"} width={9999} height={9999} alt="Logo" className="rounded-full h-12 w-12" />
        <input type="text" className="h-12 w-full rounded-lg px-6 outline-yellow-300" placeholder="Post a thought..." />
      </div>
      <hr className="ml-32 mr-12 my-4 text-gray-300" />

      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-4 text-[2rem]  mx-12 px-24">
          <PostInputShortcuts icon={<PhotoCameraOutlinedIcon />} />
          <PostInputShortcuts icon={<SignalCellularAltOutlinedIcon />} />
          <PostInputShortcuts icon={<MoodOutlinedIcon />} />
          <PostInputShortcuts icon={<EventNoteOutlinedIcon />} />
          <PostInputShortcuts icon={<FmdGoodOutlinedIcon />} />
        </div>
        <PostButton />
      </div>
    </div>
  );
}

function PostInputShortcuts({ icon }: { icon: React.ReactNode }) {
  return <span className="text-yellow-400 cursor-pointer hover:text-yellow-300 hover:scale-[1.3] transition-all duration-150 ease-in-out">{icon}</span>;
}
