import React from 'react'
import banner from '../assets/banner.png'
import mainbanner from '../assets/mainbanner.png'

function Banner() {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-3 gap-4 py-11">
            {/* Main Banner */}
            <div className="col-span-2">
                <img
                    src={mainbanner}
                    alt="Main Banner"
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>
            {/* Right side small banners */}
            <div className="flex flex-col gap-4">
                <img
                    src={banner}
                    alt="Small Banner 1"
                    className="w-full object-cover rounded-lg"
                />
                <img
                    src={banner}
                    alt="Small Banner 2"
                    className="w-full object-cover rounded-lg"
                />
                <img
                    src={banner}
                    alt="Small Banner 3"
                    className="w-full object-cover rounded-lg"
                />
            </div>
        </div>
  )
}

export default Banner