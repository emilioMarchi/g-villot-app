import React, { useEffect, useState } from 'react'
import { SerieCard } from '../components/serieCard/SerieCard'
import { BuyInfoCard } from '../components/buyInfoCard/BuyInfoCard'
import { ContactCard } from '../components/contactCard/ContactCard'
import seriesData from '../series.json'

export function Series (){

    const [series, setSeries] = useState()
    
    
    useEffect(()=>{
        window.scrollTo(0,0)
    }, [])
    useEffect(()=>{
        // aca traigo la data de las series desde el servidor
        setSeries(seriesData)
        console.log(series)
    },[])
    
    return(
        <div className='page'>
            {
                series ? 
                series.map((serie, idx)=>{
                    return (
                        <SerieCard img={serie.img} title={serie.title} description={serie.description} id={serie.id}  />
                    )
                })
                : <></>
            }
            <BuyInfoCard/>
            <ContactCard/>
        </div>
    )
}