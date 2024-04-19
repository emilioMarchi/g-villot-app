import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './serie.css'

import { useDispatch, useSelector } from 'react-redux';
import { PaintsList } from "../components/paintsList/PaintsList";

import paints from '../paints.json'
import series from '../series.json'
import { normalizeString } from "../normalize";

export const Serie = () => {
    const [serie,setSerie] = useState()
    const {serieName} = useParams()
    const { user, isLoggedIn, cart } = useSelector(state => state.user);
    
    const serieFilter = series.filter((serie,idx)=>{
        
        const serieTitle = normalizeString(serieName)
        
        return serie.title==serieTitle
    })
    
    useEffect(()=>{
        window.scrollTo(0,0)
    }, [])
    useEffect(()=>{
        //traer data de serie
        setSerie(serieFilter[0])

    },[])

    if(serie) {
        return (
            
            <div className="page">
                <div className="content">
                    <div className="serie-header">
                        <div className="title">
                            <p>SERIE</p>
                            <h1>{serie.title}</h1>
                        </div>
                        <p className="description">{serie.description}</p>
                    </div>
                    <PaintsList serieId={serie.id} serieName={serie.title} />
                </div>
            </div>
        )
    }
}