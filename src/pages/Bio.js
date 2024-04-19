import {useEffect} from 'react'
import './bio.css'
export function Bio (){

    
    useEffect(()=>{
        window.scrollTo(0,0)
    }, [])
    
    return(
        <div className='page'>
            <div className='bio-container'>
                <div className='bio-header'>
                    <div className='header-title'>
                        <p>Artista</p>
                        <h1>Gabriel Villot</h1>
                    </div>
                    <div className='img' style={{backgroundImage:`url('${'https://www.ate.org/data/img_cont/img_artistas/img_gr/302_1522.jpg'}')`}}>

                    </div>
                </div>
                <div className='bio-body'>
                    <div className='title'>
                        <h2>Biografía</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                
            </div>
        </div>
    )
}