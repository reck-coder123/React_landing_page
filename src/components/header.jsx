import React from 'react'
import CenterMenu from './CenterMenu'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useMediaQuery } from 'react-responsive'

function Header() {
    const [isclicked,setIsclicked]=useState(false);
    const handleclick = () => {
        if(!isclicked){

            setIsclicked(true);
        }
        else{
            setIsclicked(false);
        }
      }

    const buttonStyle = "border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px]"
    const isDesktopOrLaptop = useMediaQuery({
query: '(min-width: 1224px)'
})
const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <div>
            {isDesktopOrLaptop &&<div className="header bg-[#081730] flex item-center justify-between px-[5rem] pt-[2.4rem] text-[0.8rem]">
                <img src={require("../img/MuzicLogo.png")} alt="logo" className='logo w-[42px] h-[42px]' />
                
                
                <CenterMenu />
                <div className="buttons flex">
                    <button className={'mr-[35px] hover:bg-[#232A4E] ' + buttonStyle}>Log in</button>
                    <button className={buttonStyle +' bg-[#232A4E]'}>Sign up</button>
                </div>
            </div> }

            {isTabletOrMobile && <div className="header bg-[#081730] flex item-center justify-between px-[2.5rem] pt-[2.4rem] text-[0.8rem]">
                <img src={require("../img/MuzicLogo.png")} alt="logo" className='logo w-[42px] h-[42px]' />
                
                <div onClick={handleclick} className='block pl-[3rem]'>
                    <MenuIcon/>
                
                </div>
                <div className={isclicked ?(
                    'active flex flex-col justify-start bg-[#232A4E] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[13px] w-[100%] h-[45%] absolute top-0 left-0 items-stretch p-[80px_0_30px_0] z-[99] transition-[0.3s_ease-in-out] duration-500'
                ):(
                    'active flex flex-col justify-start bg-[#232A4E] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[13px] w-[100%] h-[45%] absolute top-[-100%] left-0 items-stretch p-[80px_0_30px_0] z-[99] transition-[0.3s_ease-in-out] duration-700'
                )}>
                    <div className="cls flex justify-end items-start absolute top-4 right-4" onClick={handleclick}>
                    <CloseIcon />
                    </div>
                    
                <CenterMenu />
                
                <div className="buttons flex justify-around">
                    <button className={'mr-[35px] hover:bg-[#232A4E] ' + buttonStyle}>Log in</button>
                    <button className={buttonStyle +' bg-[#232A4E]'}>Sign up</button>
                </div>
                </div>
            </div>}
            
        </div>
    )
}

export default Header
