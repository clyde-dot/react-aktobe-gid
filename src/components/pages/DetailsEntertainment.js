import React from 'react'
import '../styleEntertainments.css'
import { useTranslation } from 'react-i18next';

export default function DetailsEntertainment () {
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
        maxCapacity,
        description,
        openFrom
    } = chache;
    return (
        <>
            <div className="nightlife-details">
                <div className="title-nightlife-main">
                    <h1>{headerTitle}</h1>
                    <div className="divred" />
                </div>
            </div>
            <div className="container">
                <div className="title-nightlife">
                    <h1>{t("entertainments_card_subtitle")}</h1>
                    <div className="divred" />
                    <img src={img} alt="img" className="detail-nightlife-image"/>
                    <div className="nightlife-single-images">
                        {images.map((item, index) => {return <img key={index} src={item} alt=""/>})}
                    </div>
                </div>
                <section className="about-place">
                                <div className="about-place-info">
                                <article className="details text-left">
                                    <h3>{t("entertainments_card_description_title")}</h3>
                                    <p>{description}</p>
                                </article>
                                <article className="info text-left">
                                    <h3>{t("entertainments_card_info_title")}</h3>
                                    <h6>{t("entertainments_card_info_title_price")} {price}</h6>
                                    <h6>{t("entertainments_card_info_title_max_size")}{maxCapacity} </h6>
                                </article>
                                <h3>{t("entertainments_card_work_time")} {openFrom} </h3>
                                </div>      
                </section>
                <div className="map-rev">
                <div className="mt-5">
                    <h3>{t("entertainments_card_map_title")}</h3>
                    <iframe title="map" src={maps} style={{border: '0',height:'28.125rem',width: '100%', frameborder: '0' }}/>
                </div>
                <br />
                </div> 
            </div>
        </>
                    

    )
}
