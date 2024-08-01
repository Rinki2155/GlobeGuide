import React from 'react';
import ReactPlayer from 'react-player';
import { useState } from 'react';

const VideoPayer = () => {
  const YoutubePlayer = [
    'https://www.youtube.com/watch?v=72__Mdioty8',
    'https://www.youtube.com/watch?v=MtCMtC50gwY',
    'https://www.youtube.com/watch?v=21mKbR-4VTA',
    'https://www.youtube.com/watch?v=Alx4N-cFCK8',
    'https://www.youtube.com/watch?v=Y7N55VlsuoU',
    'https://www.youtube.com/watch?v=Osi_BGVCv_I',
    'https://www.youtube.com/watch?v=aw8bVyONgxA',
    'https://www.youtube.com/watch?v=LOI0b4RYKqs',
    'https://www.youtube.com/watch?v=ra9F6FMm0kg',
    'https://www.youtube.com/watch?v=WLSYf-09NEA',
    'https://www.youtube.com/watch?v=JwtNvBNhXnc',
    'https://www.youtube.com/watch?v=Sr4rIMb83mA',
    'https://www.youtube.com/watch?v=PhBU6mcE1tA',
    'https://www.youtube.com/watch?v=vTZgGJ3XnhA',
    'https://www.youtube.com/watch?v=OrIDTJH2ZZM',
    'https://www.youtube.com/watch?v=rrNeeUWX2Jw',
    'https://www.youtube.com/watch?v=qmGYnJgCW1o',
    'https://www.youtube.com/watch?v=wSHXd-K-jIk',
    'https://youtube.com/watch?v=MpzJbmDzR-E',
    'https://www.youtube.com/watch?v=kYr7p5BMio4',
    'https://www.youtube.com/watch?v=ZP0-3i65gZQ',
    'https://www.youtube.com/watch?v=Wk5f-WMic9s',
    'https://www.youtube.com/watch?v=WxB4CEIfBkQ',
    'https://www.youtube.com/watch?v=FogOKo0TMK0',
    'https://www.youtube.com/watch?v=KJ9ClfrsA8c',
    'https://www.youtube.com/watch?v=Osi_BGVCv_I',
    'https://www.youtube.com/watch?v=aw8bVyONgxA',
    'https://www.youtube.com/watch?v=LOI0b4RYKqs',
  ]

  const [visiablevideo, setvisiableVideo] = useState(8);
  const [playingIndex, setPlayingIndex] = useState(null);

  const handleWatchmore = () => {
    setvisiableVideo(YoutubePlayer.length);
  }

  function handlePlay(index:any) {
    setPlayingIndex(index);
  }
  return (
    <>
       <div className="backgradent">
        <h3 className="text-center py-5">Instantly Watch on Globe-Guide Travel Channel in 2024 - Our Latest Travel Video Guides </h3>
        <div className="container-xxl video-container">
          {YoutubePlayer.slice(0, visiablevideo).map((video, index) => (
            <>
              <div className='py-5' key={index}>
                <ReactPlayer url={video} controls width='310px' height='250px' playing={playingIndex === index} onPlay={() => handlePlay(index) } />
              </div>
            </>
          ))}
        </div>
        {visiablevideo < YoutubePlayer.length && (
          <button className='btn btn-primary d-block mx-auto my-5' onClick={handleWatchmore}>Watch More</button>
        )}
        <h4 className='text-center'>Airports, Local Transportation, Attractions and Much more in our Travel Guides for Travelers - FREE INFO
        </h4>
        
      </div>

    </>
  )
}

export default VideoPayer
