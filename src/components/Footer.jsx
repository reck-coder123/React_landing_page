import React from "react";
import CenterMenu from "./CenterMenu";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useMediaQuery } from 'react-responsive'

function Footer() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
    })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const SocialStyle = "rounded-full border-2 border-white p-2 mr-[5rem]"
  return (
    <>
    {isDesktopOrLaptop && <div className=" footer flex flex-col items-center justify-start px-[5rem] bg-[#081730] h-[45rem] pt-[18rem] mt-[-10rem] relative z-[-1]">
      <CenterMenu />
      {/* Social icons */}
      <div className="flex w-[100%] justify-center mt-14">
        <div className={SocialStyle}>
          <FacebookIcon />
        </div>{" "}
        <div className={SocialStyle}>
          <TwitterIcon />
        </div>{" "}
        <div className={SocialStyle}>
          <YouTubeIcon/>
        </div>{" "}
        <div className={SocialStyle}>
          <LinkedInIcon />
        </div>
      </div>
      {/* detail */}
      <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[4rem]">
        Duis feugiat congue metus, ultrices vulputate nibh viverra eget.
        Vestibulum ullamcorper volutpat varius.
      </span>
    </div>}

    {isTabletOrMobile && <div className=" footer flex flex-col items-center justify-start bg-[#081730] h-[45rem] pt-[18rem] mt-[-5rem] relative z-[-1]">
      <div className="centermenu relative top-[-238px] left-[-36px]">
        
      <CenterMenu />
      </div>
      {/* Social icons */}
      <div className="flex w-[100%] justify-center mt-[7rem]">
        <div className={SocialStyle}>
          <FacebookIcon />
        </div>{" "}
        <div className={SocialStyle}>
          <TwitterIcon />
        </div>{" "}
        <div className={SocialStyle}>
          <YouTubeIcon/>
        </div>{" "}
        <div className={SocialStyle}>
          <LinkedInIcon />
        </div>
      </div>
      {/* detail */}
      <span className="text-[1rem] text-gray-400 px-[1rem] mt-[4rem] text-center flex justify-start">
        Duis feugiat congue metus, ultrices vulputate nibh viverra eget.
        Vestibulum ullamcorper volutpat varius.
      </span>
    </div>}
    
    </>
    
  );
}

export default Footer;