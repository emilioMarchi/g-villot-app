import './serieCard.css'

import { Link, useNavigate } from 'react-router-dom';
import { normalizeUrl, shortDescription } from '../banner/Banner';

export const SerieCard = ({id,title,description,img})=> {

    const navigate = useNavigate()

    return (
        <div className="serie-card">
            <div  className='content'>
                <div className='col'>
                    <div className='img-container'>
                        <img onClick={()=>{navigate(`/${normalizeUrl(title)}`)}} className='img' src={img} ></img>
                    </div>

                </div>

                <div className='item-info'>
                    <p className='cat'>SERIE</p>
                    <div className='title'>
                        <h3>{title}</h3>
                    </div>
                    <div className='description'>
                        <p>{shortDescription(description, 22)}...</p>
                    </div>
                    <div className='btn-container'>
                        <Link to={`/${normalizeUrl(title)}`} className='btn'>Ver serie</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}