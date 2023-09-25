import React from 'react'
import {Link} from 'react-router-dom'
import './styleCard.css'
import './styleHotels.css'
import { useTranslation } from 'react-i18next'

export default function Info (props) {
    const {t}=useTranslation();
    const value=props.item;
    const {
        headerTitle, 
        headerSubTitle,
        img,
        headerText,
        price,
        phone,
        address
    } = value;
    localStorage.clear()
    return (
        <section className="section-tours p-0 col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <div className="col-12">
            <div className="col-12 p-0 mb-4">
                <div className="my-flip-container">
                    <div className="my-flip-inner my-flip-right">
                        <div className="my-flip-inner-wrapper">
                        <div className="my-flip-side my-flip-front">
                            <div className="my-flip-image my-flip-image--1">
                                <img src={img} alt=""/>                                 
                            </div>
                            <div className="my-flip-details">
                                <h4 className="my-flip-heading">
                                    {headerTitle}
                                </h4>
                                <div className="my-flip-text">
                                    <p>{headerText}</p>
                                </div>
                            </div>
                        </div>
                        <div className="my-flip-side my-flip-back my-flip-back-1">
                            <div className="my-flip-back-inner">
                                <div className="my-flip-price">
                                    <h3>{price}</h3>
                                </div>
                                <div className="my-flip-back-text">
                                    <ul>
                                    <li>{headerTitle}</li>
                                    <li><a className='headerSubtitle-map-link' target={"_blank"}  href={headerSubTitle}>{t("hotel_card_detail_info_show_map_button")}</a></li>
                                    <li>{address}</li>
                                    <li>{phone}</li>
                                    </ul>
                                </div>
                                <div className="my-flip-btn-box">
                                    <Link onClick={()=>localStorage.setItem('detailCard', JSON.stringify(value))} to="/detailshotels" className="my-flip-btn">
                                        {t("hotel_card_detail_info_button")}
                                    </Link>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    
        
    )
}

