import React from "react";
import Image from "next/image";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function Widgets() {
  return (
    <div className="border border-gray-400 bg-gray-100 m-4 rounded-xl sticky top-4 h-[calc(100vh-32px)]">
      <div className="flex items-center bg-gray-200 mx-6 my-4 rounded-full h-12 px-6 gap-2">
        <SearchOutlinedIcon sx={{fontSize:24}}/>
        <input type="text" placeholder="Search ChatMAX..." className="outline-none" />
      </div>

      <div className="m-6 rounded-3xl p-6 bg-gray-200 flex flex-col">
        <h1 className="font-bold text-[1.5rem] mb-4">What's happening?</h1>
        <WhatsHappeningWidgetComponent />
        <WhatsHappeningWidgetComponent />
        <WhatsHappeningWidgetComponent />
        {/* <WhatsHappeningWidgetComponent /> */}
      </div>

      <div className="m-6 rounded-3xl p-6 bg-gray-200 flex flex-col">
        <h1 className="font-bold text-[1.5rem] mb-6">Recommended for you</h1>
        <RecommendedForYouWidgetComponent />
        <RecommendedForYouWidgetComponent />
        <RecommendedForYouWidgetComponent />
      </div>
    </div>
  );
}

function WhatsHappeningWidgetComponent() {
  return (
    <div className="flex flex-col mb-4">
      <div className="flex justify-between items-center">
        <span className="text-gray-500 text-[0.7rem]">Trending in Hyderabad</span>
        <span className="flex justify-center items-center w-6 h-6 text-[1.3rem] cursor-pointer hover:bg-gray-300 rounded-full">···</span>
      </div>
      <span className="font-bold text-[0.9rem]">#Web Development</span>
      <span className="text-gray-500 text-[0.7rem]">280k conversations</span>
    </div>
  );
}

function RecommendedForYouWidgetComponent() {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center gap-3">
        <Image src={"/assets/ProfilePic.jpg"} width={56} height={56} alt="Profile Picture" className="h-14 w-14 rounded-full" />
        <div className="flex flex-col">
          <span>Syed Asad</span>
          <span className="text-gray-500">@s.asad.leo</span>
        </div>
      </div>
      <button className="rounded-full bg-black text-white px-4 py-2 cursor-pointer hover:scale-110 transition-transform duration-150 ease-in-out">Follow</button>
    </div>
  );
}
