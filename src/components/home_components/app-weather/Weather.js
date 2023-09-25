import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Weather() {
    const {t}=useTranslation();
    return (
        <div className="container" data-aos="fade-right">
            <div className="aboutng">
                <h2>{t("home_weather_title")}</h2>
                <br />
                <a title="Погода Актобе" className="weatherwidget-io" href="https://forecast7.com/ru/50d2857d17/aktobe/" data-label_1="AKTOBE" data-label_2="WEATHER" data-font="Roboto" data-icons="Climacons Animated" data-theme="pure" data-suncolor="#ff9742" data-cloudfill="#eaeaea" data-raincolor="#0072c4" >AKTOBE WEATHER</a>
                {!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js')}
            </div>
            
        </div>
    )
}

