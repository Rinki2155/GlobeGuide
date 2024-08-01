
import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const GoogleMapPage = () => {

  const mapStyles = {
    height: "100vh",
    width: "100%"
  };

  const defaultCenter = {
    lat: 28.7041, lng: 77.1025
  }; return (
    <>
      <div className='container-fluid'>
        <div className="d-flex text-center py-4 d-flex justify-content-center align-items-center mb-4">
          <img src='https://avatars.mds.yandex.net/i?id=61960c81194986898e60968bdca742c8cb091a895e263b99-12475824-images-thumbs&n=13' height='40px' width='40px' alt='mapLogo' />
          <h4>Choose your Destination</h4>
        </div>
        {/* <img src="https://fthmb.tqn.com/GhWV0JeRNWXJIm9bFY7lv0xelLA=/4636x2332/filters:fill(auto,1)/walkingdirections-1-56ae8b315f9b58b7d010f5c4.png" height='600px' width='100%' /> */}

        <LoadScript googleMapsApiKey='AIzaSyCtyCF2GXt9H9yhdpTYraaZGOmWj6vx2E4'>
          <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter} />
        </LoadScript>
      </div>
    </>
  )
}

export default GoogleMapPage