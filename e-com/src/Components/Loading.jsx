import React from 'react'
import { ThreeCircles } from 'react-loader-spinner'
;

function Loading() {
  return (
    <div className='flex items-center justify-center h-screen'>
        <ThreeCircles color="black" />
    </div>
  )
}

export default Loading