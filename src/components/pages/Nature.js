import React, { Component } from 'react'
import CardsComponent from '../CardsComponent'
import { Translation } from 'react-i18next';

export default class Nature extends Component {
    render() {
        return (
            <div className='container container-cards'>
                {
                <Translation>
                {
                  (t) => {
                    return t('nature',{returnObjects:true}).map(item=>{
                        return <CardsComponent key={item.id} item={item} />
                    })
                }
                }
              </Translation>
                }
            </div>
        )
    }
}