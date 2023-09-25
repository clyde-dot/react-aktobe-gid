import React from 'react'
import DetailMapTour from './DetailMap'
import './DetailCard.css'
import MyGallery from './DetailGalleraya'
export default function DetailParralax (props) {
    const natureTitle=props.natureTitle;
    const imgBanner=props.imgBanner;
    const natureText=props.natureText;
    const natureMap=props.natureMap;
    const imgCollection=props.imgCollection;
    const virualMapLink=props.virualMapLink;
    
    let virtualMapItem='';
    if(!!virualMapLink) virtualMapItem=<DetailMapTour virualMapLink={virualMapLink}/>;
    return (
        <div id="parallax-world-of-ugg">
    
            <section className='parallax-banner'>
                <div className="parallax-one" style={{backgroundImage: `url(${imgBanner})`}}>
                <h2>{natureTitle}</h2>
                </div>
            </section>
            <section>
            <div className="block">
                <p><span className="first-character sc">I</span>{natureText}</p>
            </div>
            </section>
            <MyGallery imgCollection={imgCollection}/>
            <br />
            <p className='parallax-title'>Показать на <a className='parallax-link' target={"_blank"} href={natureMap}>Google Maps</a></p>
            {virtualMapItem}
        </div>
        );
    
  
}
