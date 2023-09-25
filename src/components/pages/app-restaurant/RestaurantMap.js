import React from 'react';
import './RestaurantMap.css'

function RestaurantMap() {
  return (
    <div >
        <iframe className='restaurantMap' title="Рестораны и Кафе" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d53668.23286505905!2d57.19187628848058!3d50.26262452645978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0KDQtdGB0YLQvtGA0LDQvdGL!5e1!3m2!1sru!2skz!4v1679689156310!5m2!1sru!2skz" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
}

export default RestaurantMap;