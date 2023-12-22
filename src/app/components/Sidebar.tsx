// Sidebar.tsx
import Link from "next/link";
import React from "react";
import { MenuItem, menuItems } from "../data/sidebar";
import Image from "next/image";
import SearchICon from "../../../public/icons/Search";

const Sidebar: React.FC = () => {
  const groupedMenu: Record<string, MenuItem[]> = menuItems.reduce(
    (acc, menuItem) => {
      const category = menuItem.category || "Uncategorized";
      acc[category] = acc[category] || [];
      acc[category].push(menuItem);
      return acc;
    },
    {} as Record<string, MenuItem[]>
  );
  console.log(groupedMenu, "#4eac6d");

  return (
    <div className="col-span-3 px-6 pt-6 flex flex-col gap-8 h-screen overflow-auto  ">
      <div className="flex justify-between   items-center ">
        <h1 className="font-bold text-xl">Chats</h1>
        <button className=" bg-gray-dark w-9 h-9 rounded-md font-medium text-green-light">
          +
        </button>
      </div>
      <div className=" bg-gray-light flex w-full justify-between px-5 h-12 items-center">
        <input
          type="text"
          className="bg-transparent rounded-sm outline-none"
          placeholder="Search here.."
        />
        <SearchICon className="w-4   h-4 cursor-pointer" />
      </div>
      <div className="sidebar">
        <ul>
          {Object.entries(groupedMenu).map(([category, items], index) => (
            <div className="flex flex-col " key={index}>
              <li className="py-4">
                <h6 className="uppercase text-sm text-gray-medium font-medium tracking-tighter">
                  {category}
                </h6>
              </li>

              {items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="flex py-2  items-center text-warmGray-700"
                >
                  {item.img && (
                    <Image
                      src={item.img}
                      className="h-9 w-9 rounded-full object-cover inline-block mr-2"
                      alt={`Image for ${item.name}`}
                      width={24}
                      height={24}
                    />
                  )}
                  <Link href={item.route}>{item.name}</Link>
                </li>
              ))}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
