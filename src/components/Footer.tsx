
import Image from "next/image";

import logo from "../images/logo.png"

const Footer = () => {
  return (
    <>
    <div className="w-full h-20 bg-amazon_light text-gray-300
     flex items-center justify-center gap-4">
        <Image className="w-24" src={logo} alt="logo" />
        <p className="text-sm -mt-4">All Right Reserved <a className="hover:text-white hover:underline decoration-[1px] 
        cursor-pointer duration-300" href="https://google.com" target="_blank">@Google</a></p>
    </div>
    <div>
      <ul>
        <li>abhishek</li>
        <li>abhishek</li>
        <li>abhishek</li>
        <li>abhishek</li>
      </ul>
      <ul>
        <li>badal</li>
        <li>badal</li>
        <li>badal</li>
        <li>badal</li>
      </ul>
    </div>
    </>
  )
}

export default Footer;