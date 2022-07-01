import Fade from "react-reveal/Fade";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
function footer() {
  return (
    <Fade duration={1000} delay={500} right={true} fraction={0.2}>
      <section className=" bg-black mt-28 pt-20 pb-8">
        <div className=" flex  items-center space-y-8 flex-col justify-center container mx-auto px-20 ">
          <div className="text-white pb-8   container flex md:flex-row flex-col items-center  justify-center space-y-4 sm:space-y-0 sm:justify-between  ">
            <span className="text-bold text-2xl">Audiophile</span>
            <div>
              <ul className="md:space-y-0 text-sm space-y-4  mt-3 flex-col sm:flex md:flex-row md:space-x-4 ">
                <li className="transition ease-in-out duration-700 hover:text-orange-400">
                  <a href="/Home">HOME</a>
                </li>
                <li className="transition ease-in-out duration-700 hover:text-orange-400">
                  <a href="/Headphones">HEADPHONES</a>
                </li>
                <li className="transition ease-in-out duration-700 hover:text-orange-400">
                  <a href="/Speakers">SPEAKERS</a>
                </li>
                <li className="transition ease-in-out duration-700 hover:text-orange-400">
                  <a href="/Earphones">EARPHONES</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w[700px] mx-auto items-center flex flex-col md:justify-around md:space-x-8 md:space-y-0 space-y-8 md:flex-row">
            <p className="text-gray-400 max-w-[70%] md:max-w-[40%] text-base">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we're open 7 days a week.
            </p>
            <div className="md:max-w-[40%] max-w-[70%]">
              <ul className="text-white flex flex-row space-x-4 pb-8">
                <li>
                  <a className=" text-[#1DA1F2] " href="/">
                    <BsTwitter size={20} />
                  </a>
                </li>
                <li>
                  <a className=" text-blue-600 " href="/">
                    <FaLinkedin size={20} />
                  </a>
                </li>
                <li>
                  <a className=" text-blue-600 " href="/">
                    <FaFacebook size={20} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <span className="text-gray-400 text-sm">
            Copyright 2022. All Rights Reserved
          </span>
        </div>
      </section>
    </Fade>
  );
}
export default footer;
