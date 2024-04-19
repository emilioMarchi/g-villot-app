import { useDispatch, useSelector } from "react-redux"
import { handleCartItem, toggleCartState } from "../../reducers/userReducer"
import { Carousel } from "react-bootstrap"
import './paintDetail.css'
import { useEffect, useState } from "react"
import { ViewerCarousel } from "../viewer/Viewer"

import { toggleViewerState } from '../../reducers/userReducer';


export const PaintDetail = ({paint}) => {

    const [carouselIdx, setCarouselIdx] = useState(0)
    const [imageIdx, setImageIdx] = useState()
    const cartState = useSelector(state => state.cartState)
    const viewerState = useSelector(state => state.user.viewerVisible)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        setCarouselIdx(0)

    },[paint])

    const handleAddCartItem = (paint) => {
        dispatch(handleCartItem({act:'add',item:paint}))
        dispatch(toggleCartState())
    }

    return (
        <div className='paint-container'>

                    <div className='paint-body'>
                        <ViewerCarousel state={viewerState} idx={imageIdx} images={paint.img} />
                            
                        <Carousel onSelect={(e)=>{setCarouselIdx(e)}} activeIndex={carouselIdx}   pause={false} className="img-visualize">
                            {
                                paint ?
                                paint.img.map((item,idx)=>{

                                    return(
                                        <Carousel.Item onClick={()=>{dispatch(toggleViewerState());
                                         setImageIdx(idx); console.log(viewerState)}}>
                                            
                                            <img alt="Ver" className="img" src={paint.img[idx]} />
                                        </Carousel.Item>
                                            
                                    )
                                })
                                : <></>
                            }
                        </Carousel>
                        <div className='info'>
                            <div className='title'>
                                <h2>{paint.serie.title}</h2>
                                <h1>{paint.title}</h1>
                            </div>
                            <div className="body">
                                <div className='detail'>
                                    <div className='detail-item'>
                                        <p>Medida:</p>
                                        <p>{`${paint.detail.size.x}cm x ${paint.detail.size.y}cm`}</p>
                                    </div>
                                    <div className='detail-item'>
                                        <p>Técnica:</p>
                                        <p>{paint.detail.tecnic}</p>
                                    </div>
                                    <div className='detail-item'>
                                        <p>Material:</p>
                                        <p>{paint.detail.material}</p>
                                    </div>
                                </div>
                                <div className='price'>
                                    <p>{`ARS $${paint.price}`}</p>
                                </div>

                            </div>
                            <div className='paint-buttons'>
                                <button className="btn" onClick={()=>{
                                    handleAddCartItem(paint)
                                }}>Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
    )
}