import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
export default function CardInfo(props)  {
    const value=props.item;
    const {
        id,
        headerTitle,
        headerSubTitle,
        img,
        category,      
        price,
    } = value;
    
    localStorage.removeItem('cardData')
    const location={
        pathname: '/gidinfo',
        state: { data: value }
    }
    const cardId=id<10? '0'+id:id;
    return (
        <div className='container'>
            <div className="card-gid-space">
                <div className="num-card">{cardId}</div>
                <Link className="card-gid" to={location} style={{backgroundImage:`url(${img})`}} >
                    <div >
                        <h1>{headerTitle}</h1>
                        <p>{headerSubTitle}</p>
                        <div className="date">{price}</div>
                        <div className="tags">
                        <div className="tag">{category}</div>
                        </div>
                    </div>
                </Link>
            </div>

        </div>
        
    )
}