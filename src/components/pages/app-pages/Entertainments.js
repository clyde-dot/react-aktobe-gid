import React from 'react'
import { Translation, useTranslation } from 'react-i18next';
import Info from '../../EntertainmentsInfo';
import '../../styleEntertainments.css'
export default function Entertainments () {
    const {t}=useTranslation();
    return (
        <div>
            <div className="nightlife">
            </div>
            <div className="nightlife-text">
                <h1>{t("entertainments_banner_title")}</h1>
                <div/>
            </div>
            <div className="container pt-5 pb-5" style={{display: "flex", flexWrap: "wrap"}}>            
                <Translation>
                {
                (t) => {
                    return t('entertainmentsInfo',{returnObjects:true}).map(item=>{
                        return <Info key={item.id} item={item} />
                    })
                }
                }
                </Translation>
            </div>
        </div>
        
    )
}
