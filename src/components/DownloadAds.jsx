import React from 'react'
import { useMediaQuery } from 'react-responsive'

function DownloadAds() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
    })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const downloadImgStyle='border-[2px] border-[#232A4E] rounded-[13px] h-[3rem] w-[10rem]';
  return (
    <div className='download'>
      {isDesktopOrLaptop && <div className="download_images flex">
        <img className={downloadImgStyle+ ' mr-[2rem] cursor-pointer'} src={require("../img/App Store.png")} alt="" />
        <img className={downloadImgStyle+ " cursor-pointer"} src={require("../img/Google Play.png")} alt="" />
      </div>}

      {isTabletOrMobile && <div className="download_images flex justify-center">
        <img className={downloadImgStyle+ ' mr-[2rem] cursor-pointer'} src={require("../img/App Store.png")} alt="" />
        <img className={downloadImgStyle+ " cursor-pointer"} src={require("../img/Google Play.png")} alt="" />
      </div>}
      
    </div>
  )
}

export default DownloadAds
