import React,  {useEffect} from "react"

import { useDispatch, useSelector } from 'react-redux';
import { setUser, logOut } from '../reducers/userReducer'; // Importa tus acciones

import { Banner } from "../components/banner/Banner";
import { BioCard } from "../components/bioCard/BioCard";
import { PaintsSlider } from "../components/paintsSlider/PaintsSlider";
import { BuyInfoCard } from "../components/buyInfoCard/BuyInfoCard";
import { ContactCard } from "../components/contactCard/ContactCard";


import { dataManagear } from "../controllers/dataManagear";

export const Home = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        window.scrollTo(0,0)
  
        const headers = {
          'Content-Type': 'application/json', 
          'Origin': ['http://localhost:8888','http://localhost:3000'],

        };
        fetch('http://localhost:8888/.netlify/functions/other', {
          method: 'GET',
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json(); // Convertir el cuerpo de la respuesta a JSON
        })
        .then(data => {
          console.log(data); // Manejar los datos de la respuesta JSON
        })
        .catch(error => console.error('Error:', error));
          

    }, [])

    return (
        <div className="home page">
            <Banner/>
            <BioCard/>
            <PaintsSlider/>
            <BuyInfoCard/>
            <ContactCard/>
        </div>
    )
}