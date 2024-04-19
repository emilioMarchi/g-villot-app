import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import './cart.css';
import { handleItemAmount, handleCartItem, toggleSummaryState, toggleCartState } from '../../reducers/userReducer';
import DeleteIcon from '@mui/icons-material/Delete';

export const Cart = () => {
    const dispatch = useDispatch();
    const cartState = useSelector(state => state.user.cartState);
    const [isVisible, setIsVisible] = useState(false); // Estado para controlar la visibilidad del carrito
    const [totalPrice, setTotalPrice] = useState(0);

    // Función para calcular el precio total del carrito
    const calculateTotalPrice = () => {
        let total = 0;
        cartState.items.forEach(item => {
            total += item.price * item.quantity;
        });
        return total;
    };

    // Actualizar el precio total cuando cambie el estado del carrito
    useEffect(() => {
        setTotalPrice(calculateTotalPrice());
    }, [cartState.items]);

    // Función para manejar la visibilidad del carrito
    const handleToggleCart = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className={`cart-container ${isVisible ? 'visible' : ''}`}>
            <div className='cart-header'>
                <p>Carrito</p>
                {cartState.items.length === 0 ? <p>Aún no agregaste nada al carrito</p> : null}
            </div>
            <div className="cart-items">
                {cartState.items.map((item, idx) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>
            {cartState.items.length > 0 && (
                <div className='cart-footer'>
                    <div className="cart-total">
                        <p>Total: ${totalPrice.toFixed(2)}</p>
                    </div>
                    <div className='button-container'>
                        <button onClick={()=>{
                            handleToggleCart();
                            dispatch(toggleSummaryState())
                            dispatch(toggleCartState()) 
                            }}>Hacer consulta</button>
                    </div>
                </div>
            )}
        </div>
    );
};

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    // Función para manejar la eliminación de un artículo del carrito
    const handleDeleteItem = () => {
        dispatch(handleCartItem({ act: 'delete', item: item }));
    };

    return (
        <div className="cart-item">
            <div className="item-img">
                <img src={item.img[0]} />
            </div>
            <div className="item-body">
                <div className="body-detail">
                    <div className='detail'>
                        <p>{item.title}</p>
                        <p>{'$ '}{item.price}</p>
                    </div>
                    <DeleteIcon onClick={handleDeleteItem} />
                </div>
                <div className="body-controls">
                    <div className="amount-control">
                        <button onClick={() => { dispatch(handleItemAmount({ act: 'decrement', id: item.id })) }}>-</button>
                        <input placeholder={item.quantity} />
                        <button onClick={() => { dispatch(handleItemAmount({ act: 'increment', id: item.id })) }}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
