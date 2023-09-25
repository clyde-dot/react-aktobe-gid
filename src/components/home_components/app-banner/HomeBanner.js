import React from 'react'
import { useTranslation } from 'react-i18next' 

import Video from '../../assets/site-image/jeep.mp4'

const Home_animation = () => {
    const {t}=useTranslation();
    return (
        <header>
            <div className="overlay"></div>
                <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                    <source src={Video} type="video/mp4"/>
                </video>
                <div className="container h-100 inner">
                    <div className="d-flex h-100 text-center align-items-center">
                            <div className="w-100 text-white">
                            <h1 className="display-2 font-weight-bold">{t('home_video_title')}</h1>
                            <p className="lead mb-0">{t('home_video_description')}</p>
                            <a href="#id"><button className="btn btn-light">{t('home_video_btn_start_travel')}</button></a>
                        </div>
                    </div>
                </div>
                
        </header>
        )
}
export default Home_animation;