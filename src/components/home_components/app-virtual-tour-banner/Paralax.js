import React from 'react';
import './Paralax.css'
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function PutParalax() {
  const {t}=useTranslation();
  return (
    <div className="parallax">
      <h1>
        {t("home_travel_virtual_tour_banner_title")}
      </h1>  
      <Link to="/virtual-map" className="parallax-button">{t("component_button_open_virtual_tour")}</Link>
      <div className="mask"></div>
      
    </div>
    
  );
}

export default PutParalax;