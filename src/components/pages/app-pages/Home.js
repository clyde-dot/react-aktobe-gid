import React from 'react'
import HomeAnimation from '../../home_components/app-banner/HomeBanner'
import Text from '../../home_components/app-title/HomeTitle'
import TravelGuide from '../../home_components/app-travel-card/TravelGuide'
import PutParalax from '../../home_components/app-virtual-tour-banner/Paralax'
import Weather from '../../home_components/app-weather/Weather'
import Aviata from '../../home_components/app-aviata-banner/Aviata'
import GidCards from '../../home_components/app-gid-card/GidCards'
import '../../home_components/style.css'

export default function Home() {
    return (
        <>
            <HomeAnimation/> 
            <Text/>
            <div className="spliter"/> 
            <TravelGuide/>
            <div className="spliter"/>
            <PutParalax/>
            <div className="spliter"/>
            <GidCards/>
            <Weather/>
            <div className="spliter"/>
            <Aviata/>
        </>
    )
    
}
