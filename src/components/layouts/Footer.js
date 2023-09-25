import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const {t}=useTranslation();
    return (
        <FooterCon className="main-footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 footer">
                            <h4>ГУ Управление предпринимательства Актюбинской области</h4>
                            <ul className="categories-footer">
                                <p className="pp">​проспект Абилкайыр-хана, 52а Астана район</p>
                                <p>Телефон : <a href="tel: +7132412012">+7 (7132) 41‒20‒12</a></p>
                                <p>Email: <a href="mailto: visitaktobe@mail.ru">visitaktobe@mail.ru</a></p>
                                <p>Web: <a href="https://visitaktobe.kz/ru">visitaktobe.kz</a></p>
                                <p>{t("footer_share_with_us")}</p>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 footer">
                            <h4>{t("footer_category_title")}</h4>
                            <div className="categories-footer">
                                <p className="pp"><Link to="/">{t("navbar_main")}</Link></p>
                                <p><Link to="/hotels" className="dark-font">{t("navbar_hotel")}</Link></p>
                                <p><Link to="/nightlife" className="dark-font">{t("navbar_night_life")}</Link></p>
                                <p><Link to="/food" className="dark-font">{t("navbar_cafe")}</Link></p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 footer">
                            <h4>{t("footer_social_network_title")}</h4>
                            <ul className="categories-footer">
                                <p className="pp"><a href="https://www.instagram.com/visitaktobe/">Instagram</a></p>
                                <p><a href="https://www.youtube.com/c/VisitAktobe?app=desktop">Youtube</a></p>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 footer">
                            <h4>{t("footer_subscribe_title")}</h4>
                            <div className="footer-text">
                                <p>{t("footer_subscribe_title_gift_describe")}</p>
                                <input type="email" className="form-control" required placeholder="Ваш email"></input>
                                <p>
                                {t("footer_subscribe_title_describe")}
                                    <a href="/contactus"> {t("footer_subscribe_title_gift_describe_link")}</a>
                                </p>
                                <Link to="/subscribe"><button type="button" className="btn">{t("footer_subscribe_button")}</button></Link>
                            </div>
                        </div>
                    </div>
                <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} Aktobe-Guide.kz - All Rights Reserved
                        </p>
                </div>
                </div>
            </div>
        </FooterCon>
    )
}
const FooterCon = styled.footer`
.footer-middle{
    background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
    padding-top: 3rem;
    color: var(--dark);
}
.footer-bottom{
    padding-top: 3rem;
    padding-bottom: 1rem;
    text-align: center;
}
ul li a{
    color: var(--dark);
}
ul li a:hover{
    color:var(--mainGray);
    text-decoration: none;
}
`;
