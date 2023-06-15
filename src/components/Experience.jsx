import React from 'react'
import Feature from "./Feature";
import { useMediaQuery } from 'react-responsive'

function Experience() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
    })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  return (
    <>
    {isDesktopOrLaptop && <div className="experience flex flex-col items-center justify-start px-[5rem] bg-[#020917] 
    h-[60rem] pt-[18rem] mt-[-10rem] relative z-[2] rounded-b-[5rem]">
        <img src={require("../img/Path 318.png")} alt="" className='w-[5rem]' />

        <div className="headline mt-7 flex flex-col items-center text-[2rem]">
            <span>An Amazing App Can Change Your Daily Life</span>
            <span>
                <b>
                    Music Experience
                </b>
            </span>
        </div>
        <div className="feature flex items-center justify-around mt-[6rem] w-[100%]">
        <Feature icon="Group 2" title="For live Music" />
        <Feature icon="music icon" title="For Daily Music" />
        <Feature icon="Group 4" title="For Artists" />
        </div>
    </div>}

    {isTabletOrMobile && <div className="experience flex flex-col items-center justify-start px-[5rem] pb-8 bg-[#020917] 
    h-[100%] pt-[18rem] mt-[-10rem] relative z-[2] rounded-b-[5rem]">
        <img src={require("../img/Path 318.png")} alt="" className='w-[5rem]' />

        <div className="headline mt-7 flex flex-col items-center text-[2rem]">
            <span>An Amazing App Can Change Your Daily Life</span>
            <span>
                <b>
                    Music Experience
                </b>
            </span>
        </div>
        <div className="feature flex flex-col items-center justify-around mt-[6rem] w-[100%]">
        <Feature icon="Group 2" title="For live Music" />
        <Feature icon="music icon" title="For Daily Music" />
        <Feature icon="Group 4" title="For Artists" />
        </div>
    </div>}
    </>
    
  );
}

export default Experience

