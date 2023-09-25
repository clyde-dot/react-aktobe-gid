import React from 'react'
import { useTranslation } from 'react-i18next'
import './Banner.css'
import Video from './norway.mp4'

export default function Banner()  {
    const {t}=useTranslation();
    return (
        <header>
            <div className="overlay"></div>
                <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                    <source src={Video} type="video/mp4"/>
                </video>
                <h1 className='gid-h1'>{t("gid-banner-title")}</h1>
                
        </header>
    )
}