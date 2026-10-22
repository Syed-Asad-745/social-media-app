import Image from "next/image";
import React from "react";

export default function Post() {
  return (
    <div className="flex items-center mx-24 mb-6 w-fit bg-white p-6 rounded-[16]">
      <Image src={"/assets/ProfilePic.jpg"} width={64} height={64} alt="Profile picture" className="rounded-full self-start" />
      <div className="ml-4 mt-2">
        <div>
          <span className="font-bold">Syed Asad</span> <span className="text-gray-500">@s.asad.leo • 1 day ago</span>
        </div>
        <div>
          <p className="mt-2">
            Post text message goes here and it is a paragraph element so it can be whatever the user wants it to be. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse accusamus quibusdam, ex praesentium, tempora quis aperiam
            porro aliquid minus, exercitationem non beatae. Hic perferendis ipsum modi qui dicta, maxime laudantium!
          </p>
        </div>
        <div className="flex gap-12 mt-4">
          <span>💬 3</span> <span>❤️ 25</span> <span>⌲ 1</span>
        </div>
      </div>
    </div>
  );
}
