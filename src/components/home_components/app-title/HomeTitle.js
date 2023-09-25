import React from 'react'
import { useTranslation } from 'react-i18next'
export default function Some_text() {
    const {t}=useTranslation();
    return (
        <div id="id" className="container" data-aos="zoom-out"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine">
                <div className="aboutng">
                    <h1>{t('home_wellcome_title')}</h1>
                <div />
                <p>
                {t('home_wellcome_description')}
                </p>
            </div>
            
        </div>
    )
    
}
