import React from 'react'
import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Subscribe() {
    const {t}=useTranslation();
    return (
        <div className="subscribe">
            <h1>{t("subscribe_form_title")}</h1>
            <p>{t("subscribe_form_subtitle")}</p>
            <Link to="/"><button type="button" className="btn-outline-secondary pr-5 pl-5 rounded-pill">{t("subscribe_form_button_go_back")}</button></Link>
        </div>
    )
}

