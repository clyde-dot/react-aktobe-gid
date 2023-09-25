import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './TravelGuide.css'

export default function Highlights() {
    
    const {t}=useTranslation();

    return (
        <div className='container' data-aos="zoom-out" >
        <h2>{t('home_travel_guide_title')}</h2>
        <main className="page-content">
            <div className="cardHigh"
            data-aos="zoom-out"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" >
                <div className="content">
                    <h2 className="title" data-aos="zoom-out-up" data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">{t("home_travel_guide_card_nature")}</h2>
                    <p className="copy">{t("home_travel_guide_card_nature_description")}</p><Link to="/nature-map"  className="btn">{t("component_button_open")}</Link>
                </div>
            </div>
            <div className="cardHigh"
            data-aos="zoom-out"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            >
                <div className="content">
                    <h2 className="title" data-aos="zoom-out-up" data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">{t("home_travel_guide_sacral_places")}</h2>
                    <p className="copy">{t("home_travel_guide_sacral_places_description")}</p><Link to="/nature-places"  className="btn">{t("component_button_open")}</Link>
                </div>
            </div>
            <div className="cardHigh"
            data-aos="zoom-out"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            >
                <div className="content">
                    <h2 className="title" data-aos="zoom-out-up" data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">{t("home_travel_guide_memorable_places")}</h2>
                    <p className="copy">{t("home_travel_guide_memorable_places_description")}</p><Link to="/landmark_places"  className="btn">{t("component_button_open")}</Link>
                </div>
            </div>
            
        </main> 
        </div>
            
    )

}
