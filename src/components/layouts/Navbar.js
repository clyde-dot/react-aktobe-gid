import React from 'react';
import logo from '../../logos.svg';
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NavDropdown } from 'react-bootstrap';
import { GB, RU, KZ } from 'country-flag-icons/react/1x1'

function Navbar() {
    const {t, i18n}=useTranslation();
    const changeLanguage=(language)=>{
        i18n.changeLanguage(language);
        window.location.reload();
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-light" >
            <Link className="navbar-brand" to="/">
                <img className="style"src={logo} alt="logo"/>
            </Link>
            <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span>
                   <i className="fas fa-bars" style={{color: 'black'}} />
                </span>
            </button>
             <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link text-uppercase" to="/"><i className="fas fa-home"></i> {t('navbar_main')}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-uppercase ml-2" to="/hotels"><i className="fas fa-hotel"></i> {t('navbar_hotel')}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-uppercase ml-2" to="/entertainments"><i className="fas fa-cocktail"></i> {t('navbar_night_life')}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-uppercase ml-2" to="/food"><i className="fas fa-utensils"></i> {t('navbar_cafe')}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-uppercase ml-2" to="/contactus"><i className="far fa-envelope"></i> {t('navbar_about_us')}</Link>
                    </li>
                </ul>
                <div className="col">
                    
                </div>
            </div> 
            {/* <iframe title='time' src="https://free.timeanddate.com/clock/i8rybzjs/n916/tlkz33/fs15/tt0/tw0" frameBorder={0} width="199" height="19"></iframe> */}
            <NavDropdown
                title={t('language')}
                id='offcanvasNavbarDropdown-expand-md'
                >
                <NavDropdown.Item onClick={()=>changeLanguage('en')}>{t('languageEN')}<GB width="50" className='navbar-flag'/></NavDropdown.Item>
                <NavDropdown.Item onClick={()=>changeLanguage('ru')}>{t('languageRU')}<RU className='navbar-flag'/></NavDropdown.Item>
                <NavDropdown.Item onClick={()=>changeLanguage('kz')}>{t('languageKZ')}<KZ className='navbar-flag'/></NavDropdown.Item>
            </NavDropdown>

        </nav>
    )
}

export default Navbar;
