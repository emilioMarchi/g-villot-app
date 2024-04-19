import { Link } from 'react-router-dom';
import './bioCard.css'

export const BioCard = ()=> {

    function shortDescription(cadena, longitudDeseada) {
        const palabras = cadena.split(' ');
        if (palabras.length <= longitudDeseada) {
            return cadena;
        } else {
            return palabras.slice(0, longitudDeseada).join(' ');
        }
    }
    const imgUrl = 'https://www.ate.org/data/img_cont/img_artistas/img_gr/302_1522.jpg'
    const lorem ='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejem'
    return (
        <div className="bio-card">
            <div className='card-container'>
                <div className='card-img'
                    style={{backgroundImage: `url(${imgUrl})`}}
                ></div>
                <div className='card-body'>
                    <h3>Biografía</h3>
                    <p>
                        {
                            shortDescription(lorem,30)
                        }...
                      
                    </p>
                    <Link to='/biografia'>Seguir leyendo</Link>
                </div>
            </div>
        </div>
    )
}