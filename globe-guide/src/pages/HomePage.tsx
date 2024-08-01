import React from 'react'
import Slider from './Slider'
import VideoPayer from './VideoPayer'
import VideoPlayerDest from './VideoPlayerDest'
import AccordianOptions from './AccordianOptions'
import GoogleMapPage from './GoogleMapPage'

const HomePage = () => {
  return (
    <>
      <Slider />
      <VideoPayer />
      <AccordianOptions />
      <VideoPlayerDest />
      <GoogleMapPage />
      <VideoPlayerDest />
    </>
  )
}

export default HomePage
