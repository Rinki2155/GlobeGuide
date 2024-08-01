import React, { useState } from 'react'
import ReactPlayer from 'react-player'

const VideoPlayerDest = () => {
  const videos = [
    'https://www.youtube.com/watch?v=72__Mdioty8',
    'https://www.youtube.com/watch?v=MtCMtC50gwY',
    'https://www.youtube.com/watch?v=21mKbR-4VTA',
    'https://www.youtube.com/watch?v=Alx4N-cFCK8',
    'https://www.youtube.com/watch?v=Y7N55VlsuoU',
    'https://www.youtube.com/watch?v=Osi_BGVCv_I',
    'https://www.youtube.com/watch?v=aw8bVyONgxA',
    'https://www.youtube.com/watch?v=LOI0b4RYKqs',
  ]
  const [visablevideo, setvisiableVideo] = useState(4);
  const handleClickvisVideo = () => {
    setvisiableVideo(videos.length)
  }
  return (
    <>
      <h4 className='text-center py-5'>Featured Destinations - Island of Hawai'I, Hawaii - The Big Island</h4>
      <div className='container mt-5 d-flex video-container'>
        {videos.slice(0, visablevideo).map((video, index) => (
          <ReactPlayer url={video} controls width='310px' height='250px' />
        ))}

        <button className='btn btn-primary d-block mx-auto my-5' onClick={handleClickvisVideo}>Watch More</button>
      </div>
      <div style={{ marginBottom: '3%' }}></div>
    </>
  )
}

export default VideoPlayerDest
