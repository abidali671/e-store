import Image from "next/image";
import React from "react";
import SearchICon from "../../../public/icons/Search";
import InfoICon from "../../../public/icons/Info";
import OptionsIcon from "../../../public/icons/Options";
import OptionHorizontal from "../../../public/icons/OptionHorizontal";
import Emoji from "../../../public/icons/Emoji";
import Mic from "../../../public/icons/Mic";
import Send from "../../../public/icons/Send";
import SendIcon from "../../../public/icons/Send";
const Dashboard = () => {
  return (
    <div className="bg-gray-light h-screen relative  bg-contain bg-[url('https://doot-light.react.themesbrand.com/static/media/pattern-05.ffd181cdf9a08b200998.png')]">
      <div className="chat-head   flex justify-between h-28 px-5    backdrop-blur-3xl items-center   ">
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
        <div className="flex items-center gap-x-6   ">
          <SearchICon className="w-7 h-7 text-gray-medium cursor-pointer" />
          <InfoICon />
          <OptionsIcon />
        </div>
      </div>

      <div className=" absolute bottom-6 w-full  px-20">
        <div className="flex gap-x-5 items-center ">
          <div className=" flex   gap-x-5">
            <OptionHorizontal />
            <Emoji />
          </div>
          <div className=" flex basis-full">
            <input
              type="text"
              placeholder="Type your message.."
              className="outline-none w-full p-3 rounded-md"
              name=""
              id=""
            />
          </div>

          <div className="flex  items-center gap-x-5">
            <Mic />
            <div className="bg-green-light text-white p-4 rounded-lg  cursor-pointer">
              <SendIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
