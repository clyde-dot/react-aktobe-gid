import React, { Component } from 'react'
import './DetailMap.css'

export default class DetailMapTour extends Component {
    
    constructor(props){
        super(props)
        this.state={
            virualMapLink:this.props.virualMapLink,
        }
    }
    render(){
        const virualMapLink=this.state.virualMapLink;
        return (
            <div className='detailMapContainer'>
                <iframe className='detailMap' title='GoogleMap Aktobe' src={virualMapLink} width="600" height="700" style={{border:0}}allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          );
    }
  
}
