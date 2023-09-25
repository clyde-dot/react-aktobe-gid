import React from 'react';
import './Aviata.css'
import { useTranslation } from 'react-i18next';

function Aviata() {
    const aviataStyle = { 
    width:'100%',
    border:'none',
      };
  const {t}=useTranslation();
  return (
    <>
    <div className="container container-aviata">
      <h2>{t("home_aviata_title")}</h2>
      <iframe id="iframeAviata" src="https://aviata.kz/static/widget/search/widget.html?showlogo=1&amp;lang=ru" style={aviataStyle} data-aos="fade-up" title="Aviata" className="aos-init aos-animate aviata-widget"></iframe>
    </div>
    </>
    
  );
}

export default Aviata;