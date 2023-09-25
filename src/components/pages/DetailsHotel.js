import React from 'react'
import '../styleHotels.css'
import { useTranslation } from 'react-i18next';

export default function DetailsHotel() {
    const {t}=useTranslation();
    let chache='';
    if(localStorage.getItem('detailCard')){
        chache=JSON.parse(localStorage.getItem('detailCard'));
    } 
    const{
        headerTitle,
        img,
        images,
        maps,
        price,
        extras,
        maxCapacity,
        description,
        onlineBooking
    } = chache;
    let onlineBookingItem='';
    if(!!onlineBooking) onlineBookingItem=<p className='parallax-title'> <a className='parallax-link' target={"_blank"} href={onlineBooking}>{t("hotel_card_button_book")}</a></p>
    ;
    
    return (
        <>
            <div className="hotels-details">
                <div className="title-hotels-main">
                    <h1>{headerTitle}</h1>
                    <div className="divred" />
                </div>
            </div>
            <div className="container">
                <div className="title-hotels">
                    <h1>{t("hotel_card_subtitle")}</h1>
                    <div className="divred" />
                    <img src={img} alt="img" className="detail-hotels-image"/>
                    <div className="hotels-single-images">
                        {images.map((item, index) => {return <img key={index} src={item} alt=""/>})}
                    </div>
                </div>
                {onlineBookingItem}

                <section className="about-place">
                                <div className="about-place-info">
                                    <article className="details text-left">
                                        <h3>{t("hotel_card_description_title")}</h3>
                                        <p>{description}</p>
                                    </article>
                                    <article className="info text-left">
                                        <h3>{t("hotel_card_info_title")}</h3>
                                        <h6>{t("hotel_card_info_title_price")} {price}</h6>
                                        <h6>{t("hotel_card_info_title_max_size")} {maxCapacity} </h6>
                                    </article>
                                </div>       
                </section>
                <section className="main-extras">
                                <h3 className="text-left">{t("hotel_card_additional_services_title")}</h3>
                                <ul className="extras text-left">
                                {extras.map((item,index) => {return <li key={index}>- {item}</li>})}
                                </ul>
                </section>
                <div className="map-rev">
                    <div className="mt-5">
                        <h3>{t("hotel_card_map_title")}</h3>
                        <iframe title="map" src={maps} style={{border: '0',height:'28.125rem',width: '100%', frameborder: '0' }}/>
                    </div>
                </div>

                <br/> 
            </div>
        </>
                    

    )
}
