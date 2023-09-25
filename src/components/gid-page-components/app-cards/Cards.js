import React from 'react'
import { Translation,useTranslation } from 'react-i18next';
import CardInfo from './app-card/CardInfo';
import './Cards.css'

export default function Cards()  {
    const {t}=useTranslation();
    return (
        <div className='container'>
            <Translation>
            {
            () => {
                return t('gidInfo',{returnObjects:true}).map(item=>{
                    return <CardInfo key={item.id} item={item} /> 
                })
            }
            }
            </Translation>
        </div>
        
    )
}