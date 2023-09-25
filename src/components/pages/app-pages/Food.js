import React from 'react';
import Info from '../../FoodInfo';
import RestaurantMap from '../app-restaurant/RestaurantMap';
import '../../styleFood.css'
import { Translation, useTranslation } from 'react-i18next';


export default function Food () {
    const {t}=useTranslation()
    return (
        <div>
            <div className="food">
                <RestaurantMap/>
            </div>
            <div className="text-food">
                <h1>{t("restaurants_banner_title")}</h1>
                <div />
            </div>
            <div className="container pt-5 pb-5" style={{display: "flex", flexWrap: "wrap"}}>            
            <Translation>
            {
            (t) => {
                return t('foodInfo',{returnObjects:true}).map(item=>{
                    return <Info key={item.id} item={item} />
                })
            }
            }
            </Translation>
            </div>
        </div>
    )
}