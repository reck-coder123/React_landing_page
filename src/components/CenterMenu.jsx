import React from 'react'
import { useMediaQuery } from 'react-responsive'

function CenterMenu() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
    })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const listStyle= "mr-[3rem] hover:cursor-pointer"
  return (
    <div>
      {isDesktopOrLaptop && <div className="menu flex">
        <ul className='flex w-[100%] justify-between'>
            <li className={listStyle}>
                Home
            </li>
            <li className={listStyle}>
                About
            </li>
            <li className={listStyle}>
                Preformer
            </li>
            <li className={listStyle}>
                Event Schedule
            </li>
        </ul>
      </div>}

      {isTabletOrMobile &&<div className="menu flex"> <ul className=' z-[-1] flex flex-col ml-[1.55rem] justify-around w-[100%] h-auto absolute top-0 left-0 items-stretch '>
            <li className={listStyle+ " block p-[2rem_0]"} style={{widows:"100%"}}>
                Home
            </li>
            <li className={listStyle+ " block p-[2rem_0]"} style={{widows:"100%"}}>
                About
            </li>
            <li className={listStyle+ " block p-[2rem_0]"} style={{widows:"100%"}}>
                Preformer
            </li>
            <li className={listStyle+ " block p-[2rem_0]"} style={{widows:"100%"}}>
                Event Schedule
            </li>
        </ul>
      </div>}
      
    </div>
  )
}

export default CenterMenu
