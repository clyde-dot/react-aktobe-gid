import React from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/layouts/Footer';
import {Switch, Route} from 'react-router-dom';
import Home from './components/pages/app-pages/Home';
import Gid from './components/pages/app-pages/Gid';
import DetailGid from './components/gid-page-components/app-cards/app-page/DetailGid';
import Food from './components/pages/app-pages/Food';
import Entertainments from './components/pages/app-pages/Entertainments';
import DetailsHotel from './components/pages/DetailsHotel';
import Hotels from './components/pages/app-pages/Hotels';
import ContactUs from './components/pages/app-pages/ContactUs';
import NotFound from './components/pages/app-pages/NotFound';
import DetailsFood from './components/pages/DetailsFood';
import DetailsEntertainment from './components/pages/DetailsEntertainment'
import Subscribe from './components/layouts/footer-component/Subscribe';
import VirtualTourGoogleMap from './components/pages/VirtualTourGoogleMap';
import Nature from './components/pages/Nature';
import NatureDetails from './components/pages/DetailsNature';
import NaturePlaces from './components/pages/NaturePlaces';
import LandmarkPlaces from './components/pages/LandmarkPlaces';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init({
    offset: 200, // offset (in px) from the original trigger point
    delay: 60, // values from 0 to 3000, with step 50ms
    duration: 1500, // values from 0 to 3000, with step 50ms // the delay on throttle used while scrolling the page (advanced)
  });
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/food" component={Food}/>
        <Route path="/entertainments" component={Entertainments}/>
        <Route path="/detailshotels" component={DetailsHotel}/>
        <Route path="/detailsfood" component={DetailsFood}/>
        <Route path="/detailsentertainment" component={DetailsEntertainment}/>
        <Route path="/hotels" component={Hotels}/>
        <Route path="/contactus" component={ContactUs}/>
        <Route path="/subscribe" component={Subscribe}/>
        <Route path="/virtual-map" component={VirtualTourGoogleMap}/>
        <Route path="/nature-map" component={Nature}/>
        <Route path="/natureinfo" component={NatureDetails} />
        <Route path="/nature-places" component={NaturePlaces}/>
        <Route path="/landmark_places" component={LandmarkPlaces}/>
        <Route path="/search-gid" component={Gid}/>
        <Route path="/gidinfo" component={DetailGid}/>
        <Route component={NotFound}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
