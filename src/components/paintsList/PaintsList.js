import { useEffect, useState } from "react"
import { PaintCard } from "../paintCard/PaintCard"

import paintsData from '../../paints.json'
import   './paintsList.css'
import { PaintCardSerie } from "../paintCardSerie/PaintCardSerie"

export const PaintsList = ({serieId, serieName})=> {

    const [paints,setPaints] = useState()

    useEffect(()=>{
        //aca traigo la data de los cuadros segun el id de la serie
        console.log(serieName, serieId)
        const filterPaints = paintsData.filter((paint,idx)=>{
            return paint.serie.id===serieId
        })
        console.log(filterPaints)
        setPaints(filterPaints)
    }, [])

    return (
        <div className="paints-list-container">
            {
                paints ? 
                paints.map((paint,idx)=>{
                    return(
                        <PaintCardSerie data={paint}/>
                    )
                }) : ''
            }
        </div>
    )
}