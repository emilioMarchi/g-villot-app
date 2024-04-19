import { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import './contact.css'

import { CopyToClipboard } from 'react-copy-to-clipboard';


export const ContactCard = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000); // Reiniciar el estado de "copied" después de 2 segundos
    };

    
    //aca podriamos traer los datos de contacto guardados en base de datos 
 
    return(
        <div className="contact-container">
             {copied && <span className={copied ? 'notification show' : 'notification'}>Texto copiado correctamente!</span>}
            <CopyToClipboard  text='gabrielvillot@gmail.com' >
                <div className="contact-item" onClick={()=>{handleCopy()}} >
                    <a >
                        <EmailIcon className='icon' />
                        <p>gabrielvillot@gmail.com</p>
                    </a>
                    <ContentCopyIcon className='copy-icon'/>
                </div>
            </CopyToClipboard>
            <div className="contact-item" onClick={()=>{window.open('https://www.instagram.com/arte.villot/?hl=es-la', '_blank')}}>
                <a>
                    <InstagramIcon className='icon'/>
                    <p>@arte.villot</p>
                </a>        
                <PersonAddIcon className='copy-icon'/>
            </div>
            <div className="contact-item" onClick={()=>{window.open('https://www.facebook.com/gabrielalejandro.villot', '_blank')}}>
                <a>
                    <FacebookIcon className='icon'/>
                    <p>gabrielalejandro.villot</p>
                </a>        
                <PersonAddIcon className='copy-icon'/>
            </div>
        </div>
    )
}