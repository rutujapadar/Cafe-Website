import React from "react";
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div style={{color:"white"}}>{<span class="material-symbols-outlined">
location_on
</span>}</div>;

// const renderMarkers = (map, maps) => {
//     let marker = new maps.Marker({
//     position: { lat: , lng: longitude },
//     map,
//     title: 'Hello World!'
//     });
//     return marker;
//    };
  
export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 18.520430,
      lng: 73.856743
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '70vh', width: '90%' ,margin:'auto',marginTop:'20px',marginLeft:'9%'}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDU9IGeyJo-DROGOjTubF6NU9pGlIIHdRc" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={18.499380}
          lng={73.822968}
          text="📌"
        />
        <AnyReactComponent
          lat={18.579306}
          lng={73.982346}
          text="📌"
        />


      </GoogleMapReact>
    </div>
  );
}
