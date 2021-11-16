import {
    ChartBarIcon,
    ClockIcon,
    DotsHorizontalIcon,
    HomeIcon,
  } from "@heroicons/react/solid";
  import { FaMicrophoneAlt } from "react-icons/fa";
  import { RiCompassFill } from "react-icons/ri";
  import Image from "next/image";

function Sidebar() {
    return (
        <div className="fixed top-0 z-14 flex flex-col p-4 items-center bg-red/100 
        w-[90px] h-screen space-y-8">
            {/* Sidebar Spotify Logo */}
            <Image 
               src="https://rb.gy/xkacau" 
               width={56} 
               height={56} 
               objectFit="contain"
            />
            {/* Sidebar Icons */}
            <div className="flex flex-col space-y-8">
               <HomeIcon className="sidebarIcon text-white opacity-[0.85]" />
               <RiCompassFill className="sidebarIcon text-2xl" />
               <FaMicrophoneAlt className="sidebarIcon ml-1" />
               <ChartBarIcon className="sidebarIcon" />
               <ClockIcon className="sidebarIcon" />
               <DotsHorizontalIcon className="sidebarIcon" />
            </div>
        </div>
    )
}

export default Sidebar
