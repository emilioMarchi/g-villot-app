import {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './summary.css'
import CloseIcon from '@mui/icons-material/Close';
import { toggleNotState,clearCartItems,toggleSummaryState } from '../../reducers/userReducer';

const Summary = () => {
    const dispatch = useDispatch()
    const cartState = useSelector(state => state.user.cartState);
    const summaryVisible = useSelector(state => state.user.summaryVisible); // Obtener la visibilidad del resumen desde el estado global
    const notState = useSelector( state => state.user.notificationState.isVisible)
    // Función para calcular el precio total del carrito
    const calculateTotalPrice = () => {
        let total = 0;
        cartState.items.forEach(item => {
            total += item.price * item.quantity;
        });
        return total.toFixed(2);
    };
    
    const handleNot = () => {
        dispatch(toggleNotState({text:'Consulta enviada con éxito. Vas a recibir un correo con más información'}))
        setTimeout(()=>{
            dispatch(toggleNotState({text:'Consulta enviada con éxito. Vas a recibir un correo con más información'}))
            console.log('hola')
        }, 2500)
    }
    useEffect(()=>{
        if(notState){
            setTimeout(()=>{
                dispatch(toggleNotState({text:'Consulta enviada con éxito. Vas a recibir un correo con más información'}))
                console.log('hola')
            }, 2500)
        }
    })

    return (
        <div className={`summary-overlay ${summaryVisible===true ? 'visible' : 'hidden'}`}>

            <div className={`summary-container ${summaryVisible===true ? 'visible' : 'hidden'}`}> {/* Aplicar clases según la visibilidad del resumen */}
                    <div className='summary-header'>
                        <h2 >Resumen</h2>
                        <CloseIcon  onClick={()=>{dispatch(toggleSummaryState())}}/>
                    </div>
                <div className="summary-items">
                    <ul>
                        {cartState.items.map((item, index) => (
                            <li key={index}>
                                <span>{item.title}{item.quantity>1?` (${item.quantity})`:''} :</span>
                                <span>$ {(item.price * item.quantity).toFixed(2)}</span>
                                <div className='line'></div>
                            </li>
                        ))}
                    </ul>
                    <div className="total-price">
                        <span>Total:</span>
                        <span>${calculateTotalPrice()}</span>
                    </div>
                </div>
                <div className="summary-form">
                    <h2>Dejanos tus datos y nos estaremos comunicando</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Nombre:</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Correo electrónico:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Escribí un mensaje:</label>
                            <textarea id="message" name="message" />
                        </div>
                        <button onClick={
                            ()=>{
                                handleNot()
                                dispatch(clearCartItems())
                                dispatch(toggleSummaryState())
                              
                            }
                        } type="submit">Hacer consulta</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Summary;
