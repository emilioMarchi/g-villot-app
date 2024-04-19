import { useState } from "react";
import { Link } from "react-router-dom";
import './footer.css'
export const Footer = () =>{
    const [pages, setPages] = useState(['Inicio', 'Series', 'Biografía', 'Contacto']);
    const [pagesPaths, setPaths] = useState(['/', '/series', '/biografia', '/contacto']);
    return (
        <div className="footer">
            <ul>
                {
                    pages.map((page,idx)=>{
                        return(

                            <li>
                                <Link to={pagesPaths[idx]}>{page}</Link>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="footer-footer">
                <p>Tres Punto Cero®</p>
            </div>
        </div>
    )
}