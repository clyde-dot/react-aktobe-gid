import React from "react";
import { useTranslation } from "react-i18next";
import {Link} from 'react-router-dom';

import './GidCards.css'

export default function GidCards(){
    const {t}=useTranslation()
    return (
        <div class="main-container">
            <div class="grid-container">
                <div class="card card--2x">
                <div class="card__content big-script padding-large">
                    <p>{t('home_gid_banner_title')}</p>
                </div>
                </div>
                <div class="card">
                <div class="card__image">
                    <img alt='image1' src={require('./assets-gid/1.jpg')} />
                </div>
                </div>
                <div class="card">
                <div class="card__image">
                    <img alt='image1' src={require('./assets-gid/2.jpg')} />
                </div>
                </div>
                <div class="card">
                <div class="card__content">
                    <p><em>{t('home_gid_banner_franc_text')}</em></p>
                    <p>— {t('home_gid_banner_franc_author')}.</p>
                </div>
                </div>
                <div class="card card--horizontal">
                <div class="card__image">
                    <img alt='image1' src={require('./assets-gid/3.jpg')} />
                </div>
                </div>
                <div class="card card--featured">
                <div class="card__side-by-side--m">
                    <div class="card__image">
                    <img alt='image1' src={require('./assets-gid/4.jpeg')} />
                    </div>
                    <div class="card__content padding-large--l">
                    <h2>{t('home_gid_banner_quiestions_title')}</h2>
                    <p>{t('home_gid_banner_quiestions_text')}  </p>
                    <Link to='/search-gid' className='card__button_Link'><div class="card__button">{t('home_gid_banner_quiestions_button')}</div></Link>
                    </div>
                </div>
                </div>
                <div class="card card--vertical">
                <div class="card__image">
                    <img alt='image1' src={require('./assets-gid/5.jpg')} />
                </div>
                </div>
                <div class="card">
                <div class="card__image">
                    <img alt='image1' src={require('./assets-gid/6.jpg')} />
                </div>
                </div>
                <div class="card card--horizontal">
                <div class="card__side-by-side">
                    <div class="card__image">
                    <img alt='image1' src={require('./assets-gid/7.jpg')} />
                    </div>
                    <div class="card__content">
                    <h3>{t('home_gid_banner_rey_author')}</h3>
                    <p>{t('home_gid_banner_rey_text')}</p>
                    </div>
                </div>
                </div>
                <div class="card card--vertical">
                <div class="card__image">
                    <img alt='image1' src={require('./assets-gid/8.jpeg')} />
                </div>
                </div>
                <div class="card">
                <div class="card__image">
                    <img alt='image1' src={require('./assets-gid/9.jpg')} />
                </div>
                </div>
                <div class="card">
                <div class="card__content">
                    <p><em>{t('home_gid_banner_metiu_text')}</em></p>
                    <p>— {t('home_gid_banner_meitu_author')}</p>
                </div>
                </div>
                <div class="card card--2x">
                <div class="card__image">
                    <img alt='image1' src={require('./assets-gid/10.jpg')} />
                </div>
                </div>
                <div class="card card--horizontal card--frameless">
                <div class="card__content big-script">
                    <p>{t('home_gid_banner_bye')}</p>
                </div>
                </div>
                <div class="card">
                <div class="card__image">
                    <img alt='image1' src={require('./assets-gid/12.jpg')} />
                </div>
                </div>
                <div class="card card--horizontal">
                <div class="card__image">
                    <img alt='image1' src={require('./assets-gid/11.jpg')} />
                </div>
                </div>
                <div class="card">
                <div class="card__image">
                    <img alt='image1' src={require('./assets-gid/13.jpg')} />
                </div>
                </div>
                <div class="card">
                <div class="card__content">
                    <p><em>{t('home_gid_banner_lao_text')}</em></p>
                    <p>— {t('home_gid_banner_lao_author')}</p>
                </div>
                </div>
                <div class="card">
                <div class="card__image">
                    <img alt='image1' src={require('./assets-gid/14.jpg')} />
                </div>
                </div>
            </div>
        </div>
    )
}