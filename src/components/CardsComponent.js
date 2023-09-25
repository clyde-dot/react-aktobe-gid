import React from 'react'
import {Link} from 'react-router-dom'
import './CardsComponent.css'
import { useTranslation } from 'react-i18next';

export default function CardsComponent (props) {
    const {t}=useTranslation()
    const value=props.item;
    const {
        natureTitle,
        natureLocation,
        natureCoordination,
        imgBanner,
        imgBannerBg,
    } = value;
    let coordinat='';
    if(!!natureCoordination){
        coordinat=t("guidebook_cards_coordination")+natureCoordination;
    }
    localStorage.removeItem('cardData')
    const location={
        pathname: '/natureinfo',
        state: { data: value }
    }
    return (
            <div className="flip-card-container">
                <div className="flip-card">
                    <div className="card-front">
                        <figure>
                            <div className="img-bg"></div>
                            <img className="card-image" loading='lazy' src={imgBanner} alt={natureTitle}/>
                            <figcaption>{natureTitle}</figcaption>
                        </figure>
                        <ul className='card-component-ul'>
                            <li className='card-component-li'>{t("guidebook_cards_location")} {natureLocation}</li>
                            <li className='card-component-li'>{coordinat}</li>
                        </ul>
                    </div>
                    
                    <div className="card-back">
                        <figure>
                            <div className="img-bg"></div>
                            <img className="card-image" src={imgBannerBg} alt="Brohm Lake"/>
                        </figure>
                        
                        <Link className="card-button" to={location}  >
                            {t("guidebook_cards_button")}
                        </Link>
                        <div className="design-container">
                            <span className="design design--1"></span>
                            <span className="design design--2"></span>
                            <span className="design design--3"></span>
                            <span className="design design--4"></span>
                            <span className="design design--5"></span>
                            <span className="design design--6"></span>
                            <span className="design design--7"></span>
                            <span className="design design--8"></span>
                        </div>
                    </div>

                </div>
            </div>
        );
}
  

