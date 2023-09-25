import React from 'react'
import { useTranslation } from 'react-i18next';
import Gallery from './Gallery';
import './DetailGid.css'
import { Container,Row,Col } from 'react-bootstrap';

export default function DetailGid(props) {
    const {t}=useTranslation();
    let chache='';
    if(localStorage.getItem('cardData')){
        chache=JSON.parse(localStorage.getItem('cardData'));
    } else {
        chache=props.location.state.data;
        localStorage.setItem('cardData', JSON.stringify(chache))
    }
    const{
        headerTitle,
        description,
        img,
        profile,      
        maxCapacity,
        price,
        phone,
        gidname,
        images
    } = chache;
    
    return (
        <>
            <div id="parallax-world-of-ugg">
    
                <section className='parallax-banner'>
                    <div className="parallax-one" style={{backgroundImage: `url(${img})`}}>
                    <h2>{headerTitle}</h2>
                    </div>
                </section>
                <section>
                    
                    <div className='container'>
                        <Container>
                            <Row>
                                
                                <Col xs={6} md={4}>
                                    <div className="gid-profile-container">
        
                                        <div className="gid-profile-card-wrapper">
                                        
                                            <div className="gid-profile-card">
                                                
                                                <div className="gid-profile-card-image">
                                                    <img src={profile} alt="profile"/>
                                                </div>

                                                <ul className="gid-profile-social-icons">
                                                    <li>
                                                    <a href="/">
                                                        <i class="fab fa-facebook-f"></i>
                                                    </a>
                                                    </li>
                                                    <li>
                                                    <a href="/">
                                                        <i class="fab fa-instagram"></i>
                                                    </a>
                                                    </li>
                                                    <li>
                                                    <a href="/">
                                                        <i class="fab fa-twitter"></i>
                                                    </a>
                                                    </li>
                                                    <li>
                                                    <a href="/">
                                                        <i class="fab fa-dribbble"></i>
                                                    </a>
                                                    </li>
                                                </ul>

                                                
                                            </div>
                                        </div> 
                                    </div>
                                </Col>
                                <Col>
                                    <div className='gid-profile-name'>{gidname}</div>
                                    <article className="info text-left">
                                        <h3>{t("gid-card-info")}</h3>
                                        <h6>{t("gid-card-phone")}: {phone}</h6>
                                        <h6>{t("gid-card-price")}: {price}</h6>
                                        <h6>{t("gid-card-maxCapacity")}: {maxCapacity} </h6>
                                    </article>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className="block">
                        <p><span className="first-character sc">I</span>{description}</p>
                    </div>
                </section>
                
                <Gallery imgCollection={images}/>
                <br />
                
            </div>
        </>
                    

    )
}
