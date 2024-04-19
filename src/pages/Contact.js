import {useEffect} from 'react'
import { ContactCard } from '../components/contactCard/ContactCard'
import './contact.css'
export function Contact (){
    
    useEffect(()=>{
        window.scrollTo(0,0)
    }, [])
    return(
        <div className='page'>
            <div className='contact'>
                <div className='contact-header' style={{backgroundImage: `url('${'https://www.ate.org/data/img_cont/img_artistas/img_gr/302_1522.jpg'}')`}}>
                    
                </div>
                <ContactCard/>
            </div>
        </div>
    )
}