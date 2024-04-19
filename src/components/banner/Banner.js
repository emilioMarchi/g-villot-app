import { useDebugValue, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Carousel from 'react-bootstrap/Carousel';

import './banner.css'
import seriesData from '../../series.json'



export const normalizeUrl = (title) => {
    return title.toLowerCase().replace(/\s+/g, '-');
}
export function shortDescription(cadena, longitudDeseada) {
    const palabras = cadena.split(' ');
    if (palabras.length <= longitudDeseada) {
        return cadena;
    } else {
        return palabras.slice(0, longitudDeseada).join(' ');
    }
}
export const Banner = ()=>{
    
    const [series, setSeries] = useState()
    const [windowWidth,setWindowWidth] = useState()
    const navigate = useNavigate()



    useEffect(()=>{
        setSeries(seriesData)
        console.log(series)
        setWindowWidth(window.innerWidth)
    }, [])


    return(
   
            <div>

                    <Carousel interval={3000} pause={false} className='banner' indicators={false}>
                        {
                            series ? 
                            series.map((item,idx)=>{
                                return(
                                    <Carousel.Item className='banner-item'>
                                        <div  className='content'>
                                            <div className='col'>
                                                <div className='img-container'>
                                                  

                                                        <img  onClick={()=>{navigate(`/${normalizeUrl(item.title)}`)}} className='img' src={item.img} ></img>
                                                  
                                                </div>

                                            </div>
                            
                                            <div className='item-info'>
                                                <p className='cat'>SERIE</p>
                                                <div className='title'>
                                                    <h3>{item.title}</h3>
                                                </div>
                                                <div className='description'>
                                                    <p>{shortDescription(item.description, 22)}...</p>
                                                </div>
                                                <div className='btn-container'>
                                                    <Link to={`/${normalizeUrl(item.title)}`} className='btn'>Ver serie</Link>
                                                </div>
                                            </div>

                                        </div>
                                    </Carousel.Item> 
                                )
                            })
                            : <></>
                        }
                    
                     
                    </Carousel>
            </div>
       
    )
} 