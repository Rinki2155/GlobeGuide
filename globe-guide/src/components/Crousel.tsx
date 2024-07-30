import React from 'react'

export const Crousel = () => {

    const images = [
        'Image/1.png', 'Image/2.png', 'Image/3.png', 'Image/4.png', 'Image/5.png',
        'Image/6.png', 'Image/7.png', 'Image/8.png', 'Image/9.png', 'Image/10.png'
    ];

    const carouselItems = images.map((image, index) => (
        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={image} style={{ backgroundColor: 'rgb(48, 176, 255)' }}>
            <img src={process.env.PUBLIC_URL + '/' + image} className="d-block w-100" alt={`Slide ${index + 1}`} />
        </div>
    ));
    return (
        <>               <h3 className="className text-center py-4">Instantly Watch on Globe-Guide Travel Channel in 2024 - Our Latest Travel Video Guides </h3>
            <div id="carouselExample" className="carousel slide" data-ride="carousel" data-interval="5000">
                <div className="carousel-inner">
                    {carouselItems}
                </div>
                <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div></>
    )
}
