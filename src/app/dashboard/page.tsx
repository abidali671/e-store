import Image from "next/image";
import React from "react";
import SearchICon from "../../../public/icons/Search";
import InfoICon from "../../../public/icons/Info";
import OptionsIcon from "../../../public/icons/Options";

const Dashboard = () => {
  return (
    <div className="bg-gray-light h-screen">
      <div className="chat-head   flex justify-between h-28 px-5 backdrop-blur-3xl items-center   ">
        <div className="flex py-3 gap-x-5 items-center">
          <Image
            alt="user"
            width={56}
            height={56}
            className="w-12 h-12 rounded-full object-cover"
            src="https://static.vecteezy.com/system/resources/previews/029/310/240/non_2x/ai-generative-happy-business-man-in-a-suit-white-transparent-background-free-photo.jpg"
          />
          <div className="flex flex-col">
            <h2 className="font-bold text-black/60 text-xl  ">
              Marguerite Campbell
            </h2>
            <p className="text-gray-medium">Active</p>
          </div>
        </div>
        <div className="flex items-center gap-x-10  [&>*]:flex-1">
          <SearchICon className="w-7 h-7 text-gray-medium cursor-pointer" />
          <InfoICon />
          <OptionsIcon />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
