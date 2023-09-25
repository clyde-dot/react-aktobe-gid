import React from 'react';
import Info from '../../HotelInfo';
import '../../styleHotels.css'
import { Translation, useTranslation } from 'react-i18next';
export default function Hotels() {
    const {t}=useTranslation();
    return (
        <div>
            <div className="hotels">
            <h1>{t("hotel_banner_title")}</h1>
            <div />
            <p>{t("hotel_banner_subtitle")}</p>
            </div>            
            <div className="container pt-5 pb-5" style={{display: "flex", flexWrap: "wrap"}}>            
                <Translation>
                {
                (t) => {
                    return t('placeInfo',{returnObjects:true}).map(item=>{
                        return <Info key={item.id} item={item} />
                    })
                }
                }
                </Translation>
            </div>
        </div>
    )
}

