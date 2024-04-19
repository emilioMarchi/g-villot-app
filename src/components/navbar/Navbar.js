import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartState, addCartItem } from '../../reducers/userReducer';
import './navbar.css'
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import { Cart } from '../cart/Cart';

const Navbar = () => {
    const dispatch = useDispatch();
    const cartState = useSelector(state => state.user.cartState);
    const [pages, setPages] = useState(['Inicio', 'Series', 'Biografía', 'Contacto']);
    const [pagesPaths, setPaths] = useState(['/', '/series', '/biografia', '/contacto']);
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [isVisible, setIsVisible] = useState(true);
    const [scrollEnabled, setScrollEnabled] = useState(true);
    const [showOverlay, setShowOverlay] = useState(false); // Estado para controlar si se muestra el fondo oscuro
    const prevScrollPos = useRef(window.scrollY);
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        // Bloquear el scroll cuando el carrito esté abierto

        if (cartState.isOpen) {
            disableScroll();
            setShowOverlay(true); // Mostrar el fondo oscuro cuando el carrito esté abierto
        } else {
            enableScroll();
            setShowOverlay(false); // Ocultar el fondo oscuro cuando el carrito esté cerrado
        }
    }, [cartState.isOpen]);

    const disableScroll = () => {
        document.body.style.overflow = 'hidden';
        setScrollEnabled(false);
    };

    const enableScroll = () => {
        document.body.style.overflow = '';
        setScrollEnabled(true);
    };

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        const isScrolledDown = currentScrollPos > prevScrollPos.current;

        setIsVisible(!isScrolledDown);
        prevScrollPos.current = currentScrollPos;
        if(menuIsOpen){
            setMenuIsOpen(!menuIsOpen)
        }
    };

    const handleOpenNavMenu = event => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleToggleCart = () => {
        dispatch(toggleCartState());
        if(menuIsOpen){
            setMenuIsOpen(!menuIsOpen)
        }
    };

    const handleAddCartItem = () => {
        dispatch(addCartItem());
        handleToggleCart(); // Abre el carrito al agregar un elemento
    };



    return (
        <>
            <AppBar
                id='navbar'
                position="fixed"
                style={{ top: isVisible || cartState.isOpen ? '0' : '-100%', transition: 'top 0.5s' }}
            >
                <Container maxWidth="xl">
                    <Toolbar className='toolbar' disableGutters>
                        <Link onClick={() => { window.scroll(0, 0);
                            if(!cartState.isOpen){
                                return
                            }   else {
                                dispatch(toggleCartState())
                            }     
                
                        }} className='nav-logo' to='/'>
                            Gabriel Villot
                        </Link>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page, index) => (
                                <Link
                                    key={index}
                                    className='menu-item-xl'
                                    to={pagesPaths[index]}
                                    onClick={()=>{handleCloseNavMenu();
                                        if(!cartState.isOpen){
                                            return
                                        }else {
                                            dispatch(toggleCartState())}}
                                        }
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Link>
                            ))}
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                            <div className='cart-icon-container'>
                                <ShoppingBagIcon className={!cartState.isOpen ? `cart-icon` : 'cart-icon color'} onClick={handleToggleCart} />
                                {cartState.items.length > 0 && <div className="cart-count">{cartState.items.length}</div>}
                            </div>
                        </Box>
                        <Box className='menu-container' sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <div className='cart-icon-container'>
                                <ShoppingBagIcon className={!cartState.isOpen ? `cart-icon` : 'cart-icon color'} onClick={handleToggleCart} />
                                {cartState.items.length > 0 && <div className="cart-count">{cartState.items.length}</div>}
                            </div>
                            <IconButton
                                
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon 
                                    className={!menuIsOpen ? 'menu-mob-icon' : 'menu-mob-icon color'}
                                    onClick={()=>{
                                        setMenuIsOpen(!menuIsOpen)
                                        if(cartState.isOpen){
                                            dispatch(toggleCartState())
                                        }
                                    }}
                                />
                            </IconButton>
                            {menuIsOpen && (
                                <div
                                    className="custom-menu"
                                    
                                    onClick={handleCloseNavMenu}
                                >
                                    {pages.map((page, index) => (
                                        <MenuItem className='menu-item' key={index}>
                                            <Link onClick={() => { window.scroll(0, 0);
                                                setMenuIsOpen(!menuIsOpen)
                                                if(cartState.isOpen){
                                                    dispatch(toggleCartState())
                                                }
                                            }} to={pagesPaths[index]}>{page}</Link>
                                        </MenuItem>
                                    ))}
                                </div>
                            )}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            {cartState.isOpen && <Cart />}
            {showOverlay && <div className="overlay" onClick={handleToggleCart}></div>} {/* Fondo oscuro */}
        </>
    );
}

export default Navbar;
