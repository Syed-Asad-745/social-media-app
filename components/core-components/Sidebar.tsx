import React from "react";
import Image from "next/image";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import MarkunreadOutlinedIcon from "@mui/icons-material/MarkunreadOutlined";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export default function Sidebar() {
  return (
    <nav className="h-[calc(100vh-32px)] hidden sm:flex flex-col sticky top-4 border border-gray-400 bg-gray-100 m-4 rounded-xl">
      <div className="mx-auto my-6">
        <Image src={"/assets/FullLogo.png"} width={9999} height={9999} alt="Logo" className="rounded-full h-16 w-40" />
      </div>

      <div className="mx-6 flex flex-col gap-2 h-full">
        <SidebarLink icon={<HomeOutlinedIcon sx={{ fontSize: 24, color: "purple" }} />} text="Home" />
        <SidebarLink icon={<SearchOutlinedIcon sx={{ fontSize: 24, color: "purple" }} />} text="Explore" />
        <SidebarLink icon={<NotificationsActiveOutlinedIcon sx={{ fontSize: 24, color: "purple" }} />} text="Notifications" />
        <SidebarLink icon={<MarkunreadOutlinedIcon sx={{ fontSize: 24, color: "purple" }} />} text="Messages" />
        <SidebarLink icon={<BookmarksOutlinedIcon sx={{ fontSize: 24, color: "purple" }} />} text="Bookmarks" />
        <SidebarLink icon={<AccountCircleOutlinedIcon sx={{ fontSize: 24, color: "purple" }} />} text="Profile" />
        <SidebarLink icon={<MoreHorizOutlinedIcon sx={{ fontSize: 24, color: "purple" }} />} text="More" />

        <div className="mt-auto mb-8">
          <SidebarLink icon={<SettingsOutlinedIcon sx={{ fontSize: 24, color: "purple" }} />} text="Settings" />
        </div>
      </div>
    </nav>
  );
}

function SidebarLink({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center cursor-pointer hover:bg-gray-200 gap-2 px-4 py-2 rounded-xl transition-all duration-300 ease-in-out">
      {icon} <span>{text}</span>
    </div>
  );
}
