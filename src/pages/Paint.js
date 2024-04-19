import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import paintsData from '../paints.json'
import { normalizeString } from '../normalize';

import { PaintDetail } from '../components/PaintDetail.js/PaintDetail';
import { BuyInfoCard } from '../components/buyInfoCard/BuyInfoCard';
import { PaintsSlider } from '../components/paintsSlider/PaintsSlider';

export function Paint (){
    const [paint, setPaint] = useState()
    const {serieName, paintName} = useParams()
    const { user, isLoggedIn, cart } = useSelector(state => state.user);

    const filterPaint = paintsData.filter((paint,idx)=>{
        return paint.title === normalizeString(paintName) && paint.serie.title === normalizeString(serieName) 
    })
    
    useEffect(()=>{
        window.scrollTo(0,0)
        console.log(paintName)
    }, [])
    useEffect(()=>{
        //traer cuadro desde la base de datos con los datos que vienen como parametros
        setPaint(filterPaint[0])
     
    },[serieName, paintName])
    
    if(paint){
        return(
            <div className='page'>
                <PaintDetail paint={paint} />
                <BuyInfoCard/>
                <PaintsSlider/>
            </div>
        )
    }
}