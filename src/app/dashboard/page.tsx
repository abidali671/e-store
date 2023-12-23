import Image from "next/image";
import React from "react";
import SearchICon from "../../../public/icons/Search";
import InfoICon from "../../../public/icons/Info";
import OptionsIcon from "../../../public/icons/Options";
import OptionHorizontal from "../../../public/icons/OptionHorizontal";
import Emoji from "../../../public/icons/Emoji";
import Mic from "../../../public/icons/Mic";
import SendIcon from "../../../public/icons/Send";

const Dashboard = () => {
  return (
    <div className="bg-gray-light  relative w-full bg-contain bg-[url('https://doot-light.react.themesbrand.com/static/media/pattern-05.ffd181cdf9a08b200998.png')]">
      <div className="sticky top-0  z-20 ">
        <div className="chat-head h-28 px-5   flex items-center       backdrop-blur-3xl  ">
          <div className="flex py-3 gap-x-5 items-center  basis-full">
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
          <div className="flex    gap-x-6 w-full   basis-40">
            <SearchICon className="w-7 h-7 text-gray-medium cursor-pointer" />
            <InfoICon />
            <OptionsIcon />
          </div>
        </div>
      </div>

      {/* conversation */}
      <div className="px-10 flex flex-col gap-y-5 h-[calc(100vh_-_100px)] relative scrollbar-thin    scrollbar-thumb-warmGray-300 overflow-y-scroll ">
        <div className="flex gap-x-5  ">
          <Image
            alt=""
            height={50}
            width={50}
            className="rounded-full object-cover h-10 w-10  self-end"
            src=" https://static.vecteezy.com/system/resources/previews/029/310/240/non_2x/ai-generative-happy-business-man-in-a-suit-white-transparent-background-free-photo.jpg"
          />
          <div className="flex flex-col items-start gap-y-4">
            <p className="bg-white   p-4 px-6 text-center shadow-md rounded-md text-lg text-gray-medium">
              Good morning 😊
            </p>
            <div className="flex items-center gap-x-5">
              <h2 className="font-bold text-base text-gray-medium">
                Marguerite Campbell
              </h2>
              <p className="text-gray-medium  ">1:30pm</p>
            </div>
          </div>
        </div>
        <div className="flex gap-x-5 ml-auto flex-row-reverse">
          <Image
            alt=""
            height={50}
            width={50}
            className="rounded-full object-cover h-10 w-10  self-end"
            src=" https://static.vecteezy.com/system/resources/previews/029/310/240/non_2x/ai-generative-happy-business-man-in-a-suit-white-transparent-background-free-photo.jpg"
          />
          <div className="flex flex-col items-start gap-y-4   ">
            <p className="bg-[#CCE2D3]    p-4 px-6 text-right shadow-md rounded-md text-lg text-gray-medium">
              Good morning, How are you? What about our next meeting?
            </p>
            <div className="flex   ml-auto gap-x-5  flex-row-reverse">
              <h2 className="font-bold text-base text-gray-medium  ">You</h2>
              <p className="text-gray-medium  ">1:30pm</p>
            </div>
          </div>
        </div>

        <div className="flex gap-x-5  ">
          <Image
            alt=""
            height={50}
            width={50}
            className="rounded-full object-cover h-10 w-10  self-end"
            src=" https://static.vecteezy.com/system/resources/previews/029/310/240/non_2x/ai-generative-happy-business-man-in-a-suit-white-transparent-background-free-photo.jpg"
          />
          <div className="flex flex-col items-start gap-y-4">
            <p className="bg-white   p-4 px-6 text-center shadow-md rounded-md text-lg text-gray-medium">
              Good morning 😊
            </p>
            <div className="flex items-center gap-x-5">
              <h2 className="font-bold text-base text-gray-medium">
                Marguerite Campbell
              </h2>
              <p className="text-gray-medium  ">1:30pm</p>
            </div>
          </div>
        </div>
        <div className="flex gap-x-5 ml-auto flex-row-reverse">
          <Image
            alt=""
            height={50}
            width={50}
            className="rounded-full object-cover h-10 w-10  self-end"
            src=" https://static.vecteezy.com/system/resources/previews/029/310/240/non_2x/ai-generative-happy-business-man-in-a-suit-white-transparent-background-free-photo.jpg"
          />
          <div className="flex flex-col items-start gap-y-4   ">
            <p className="bg-[#CCE2D3]    p-4 px-6 text-right shadow-md rounded-md text-lg text-gray-medium">
              Good morning, How are you? What about our next meeting?
            </p>
            <div className="flex   ml-auto gap-x-5  flex-row-reverse">
              <h2 className="font-bold text-base text-gray-medium  ">You</h2>
              <p className="text-gray-medium  ">1:30pm</p>
            </div>
          </div>
        </div>
      </div>
      {/* conversation end */}
      <div className="chat-footer bg-gray-light h-20 sticky bottom-0    w-full py-4  xs:px-3 sm:px-8 md:px-20">
        <div className="flex justify-center items-center gap-x-2 md:gap-x-5 ">
          <div className=" flex   w-20 md:w-24  gap-x-2 md:gap-x-5">
            <OptionHorizontal />
            <Emoji />
          </div>
          <div className=" flex basis-full">
            <input
              type="text"
              placeholder="Type your message.."
              className="outline-none w-full p-3 rounded-md"
              name=""
            />
          </div>

          <div className=" flex w-20 md:w-24 gap-x-2 md:gap-x-5">
            <Mic />
            <div className="bg-green-light w-28 text-white p-4 rounded-lg  cursor-pointer">
              <SendIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
