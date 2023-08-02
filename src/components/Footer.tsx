import Image from "next/image";
import logo from "../images/logo.png"

const Footer = () => {
  return (
    <>
    <div className="footer1">
        <p>Back To Top</p>
    </div>
    <div className="footer2">
      <div>
      <ul>
        <p>Get to Know Us</p>
          <a>Careers</a>
          <a>Blog</a>
          <a>About Amazon</a>
          <a>Investor Relations</a>
          <a>Amazon Devices</a>
          <a>Amazon Science</a>
      </ul>
      </div>
      <div>
      <ul>
        <p>Make Money with Us</p>
        <a>Sell products on Amazon</a>
        <a>Sell apps on Amazon</a>
        <a>Become an Affiliate</a>
        <a>Advertise Your Products</a>
        <a>Self-Publish with Us</a>
       </ul>
       </div>
       <div>
      <ul>
        <p>Amazon Payment Products</p>
          <a>Amazon Business Card</a>
          <a>Shop with Points</a>
          <a>Reload Your Balance</a>
          <a>Amazon Currency Converter</a>
      </ul></div>
      <div>
      <ul>
       <p>Let Us Help You</p>
        <a>Amazon and COVID-19</a>
        <a>Your Account</a>
        <a>Your Orders</a>
        <a>Amazon Assistant</a>
        <a>Manage Your Content and Devices</a>
        <a>Help</a>
      </ul>
      </div>
    </div>
    <div className="d">
    <div className="w-full h-20 bg-amazon_light text-gray-300
     flex items-center justify-center border-top-white-[0.5px] gap-4">
       <Image className="w-24" src={logo} alt="logo" />
    </div>
    </div>
    <div className="footer4">
    <div className="pages">
      <a>Condition of Use</a>
      <a>Privacy Notice</a>
      <a>Your Ads Privacy Choices</a>
    </div>
    <div className="copyright">
      @ 1996-2023, <a href="https://amazon.com" target="_blank"> amazon.com</a>, Inc. or its affiliates
    </div>
    </div>
    </>
  )
}

export default Footer;