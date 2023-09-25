import React from 'react';
import './GoogleMap.css'
function GoogleMapTour() {
  return (
    <div className='googleMapContainer'>
        <iframe className='googleMap' title='GoogleMap Aktobe' src="https://www.google.com/maps/embed?pb=!4v1679753191554!6m8!1m7!1sCAoSLEFGMVFpcE5XLXczWS1nc0lZUzB4NnBpRDJ4dUJUVjZHb1kxdVJCUWJTOVRP!2m2!1d50.28477859205704!2d57.18540639429619!3f173.4007932249039!4f-0.40710005327574095!5f0.7820865974627469" width="600" height="700" style={{border:0}}allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
}

export default GoogleMapTour;