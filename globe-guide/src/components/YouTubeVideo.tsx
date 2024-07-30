import React from 'react'

export const YouTubeVideo = () => {
  return (
    <> <div className="video-container" style={{ width: '300px', height: '250px', margin: 'auto', marginTop: '20px' }}>
    <iframe
        width="300"
        height="250"
        src="https://www.youtube.com/watch?v=Jj2WnvDaJpE"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ background: `url(${process.env.PUBLIC_URL + '/Image/me.png'}) no-repeat center center`, backgroundSize: 'cover' }}
    ></iframe>
</div></>
  )
}
