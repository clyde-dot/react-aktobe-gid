import React from 'react'
import '../styleFood.css'
import { useTranslation } from 'react-i18next';
export default function DetailsFood () {
    const {t}=useTranslation()
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
        maxCapacity,
        description
    } = chache;
    return (
        <>
            <div className="food-details">
                <div className="title-food-main">
                    <h1>{headerTitle}</h1>
                    <div className="divred" />
                </div>
            </div>
            <div className="container">
                <div className="title-food">
                    <h1>{t("restaurants_card_subtitle")}</h1>
                    <div className="divred" />
                    <img src={img} alt="img" className="detail-food-image"/>
                    <div className="food-single-images">
                        {images.map((item, index) => {return <img key={index} src={item} alt=""/>})}
                    </div>
                </div>
                <section className="about-place">
                                <div className="about-place-info">
                                <article className="details text-left">
                                    <h3>{t("restaurants_card_description_title")}</h3>
                                    <p>{description}</p>
                                </article>
                                <article className="info text-left">
                                    <h3>{t("restaurants_card_info_title")}</h3>
                                    <h6>{t("restaurants_card_info_title_price")} {price}</h6>
                                    <h6>{t("restaurants_card_info_title_max_size")} {maxCapacity} </h6>
                                </article>
                                </div>       
                </section>
                <div className="map-rev">
                <div className="mt-5">
                    <h3>{t("restaurants_card_map_title")}</h3>
                    <iframe title="map" src={maps} style={{border: '0',height:'28.125rem',width: '100%', frameborder: '0' }}/>
                </div>
                <br />
                </div> 
            </div>
        </>          
    )
}

            
            
                           
