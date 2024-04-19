import {useNavigate} from 'react-router-dom';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';

import './paintCard.css'
import { Link } from 'react-router-dom';

import { normalizeUrl } from '../../normalize';

export const PaintCard = ({data}) => {
    const navigate = useNavigate()

    const scrollToTop = () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth' // Esto hace que el desplazamiento sea suave
      });
  };
    const handleNavigate = ()=>{
      navigate(`/${normalizeUrl(data.serie.title)}/${normalizeUrl(data.title)}`)
      scrollToTop()
    }
    return (
      <Card onClick={ handleNavigate
      } className='paint-card' variant="outlined" sx={{ width: '95%', backgroundColor:`rgb(255,255,255)`, border: 'none',borderRadius:'0.5rem', }}>
          <div className='img-container'
            style={{backgroundImage:`url('${data.img[0]}')`}}
          >
              
          </div>
        <CardContent className='content'>
          <Typography className='title' level="title-md">
            <h3 >
              {data.title.charAt(0).toUpperCase()+data.title.slice(1)}
            </h3>
            <div className='detail'>
              <p>{data.detail.tecnic.charAt(0).toUpperCase()+data.detail.tecnic.slice(1)} sobre {data.detail.material.charAt(0).toUpperCase()+data.detail.material.slice(1)} </p>
              <p>{data.detail.size.x}cm x {data.detail.size.y}cm</p>
            </div>

          </Typography>
          
            <Link to={`/${normalizeUrl(data.serie.title)}/${normalizeUrl(data.title)}`}  onClick={()=>{window.scroll(0,0)}} className='link' overlay underline="none">
              Ver cuadro
            </Link>
        </CardContent>
        <div className='card-footer'>
          <div className='footer-item'>
            <p>{2024}</p>
          </div>
          <div className='footer-item'>
            <p>{data.serie.title}</p>
          </div>
        </div>
      </Card>
    );
  }