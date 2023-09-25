import React from 'react'
import { useTranslation } from 'react-i18next'

export default function contacts()  {
    const {t}=useTranslation();
    return (
        <section className="my-5 py-5">
            <div className="container">
                <div className="well well-sm">
                    <h3><strong>{t("about_us_our_location_title")}</strong></h3>
                </div>
                <div className="row">
                <div className="col-md-7">
                <iframe title='Наше местоположение' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.099179862265!2d57.1578661!3d50.293366299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4182232023fef643%3A0x81f47a55f8ae69a4!2sVisit%20Aktobe!5e1!3m2!1sru!2skz!4v1679842269504!5m2!1sru!2skz" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="col-md-5">
                    <h4><strong>{t("about_us_call_form_title")}</strong></h4>
                    <form action="mailto:someone@example.com" method="post">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder={t("about_us_call_form_name")}/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder={t("about_us_call_form_email")}/>
                        </div>
                        <div className="form-group">
                            <input type="tel" className="form-control" placeholder={t("about_us_call_form_phone")}/>
                        </div>
                        <textarea cols="30" rows="3" placeholder={t("about_us_call_form_message")} className="form-control"/>
                        <input className="btn btn-outline-primary mt-3" type="submit" value={t("about_us_call_form_button_send")}/>                            
                    </form>
                </div>
                </div>
            </div>
        </section>
    )
}