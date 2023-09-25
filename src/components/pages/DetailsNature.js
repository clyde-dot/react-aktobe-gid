import React from 'react'
import '../styleEntertainments.css'
import DetailCard from './nature_components/DetailCard'
export default function NatureDetails(props) {
    let chache='';
    if(localStorage.getItem('cardData')){
        chache=JSON.parse(localStorage.getItem('cardData'));
    } else {
        chache=props.location.state.data;
        localStorage.setItem('cardData', JSON.stringify(chache))
    }
    const{
        natureTitle,
        natureMap,
        natureText,
        imgBanner,
        imgBannerBg,
        virtualLink,
        imgCollection,
        virualMapLink,
    } = chache;
        return (   
            <>
                <DetailCard natureTitle={natureTitle} imgBanner={imgBanner} natureText={natureText} natureMap={natureMap} imgBannerBg={imgBannerBg} virtualLink={virtualLink} imgCollection={imgCollection} virualMapLink={virualMapLink}/>
            </>  
    
        )
    
}