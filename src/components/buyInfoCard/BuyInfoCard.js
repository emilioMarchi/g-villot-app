import './buyInfoCard.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import EmailIcon from '@mui/icons-material/Email';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

export const BuyInfoCard = () => {
  return (  
    <div className="buy-info">
      <h3>¿Querés saber cómo encargar uno de mis cuadros?</h3>
      <div className="items-info">
          <div className="item">
            <ShoppingCartCheckoutIcon className='icon'/>
            <p>Agrega tus cuadros favoritos al carrito, seguido de eso vas a poder realizar una consulta mediante un formulario</p>
          </div>
          <div className="item">
            <EmailIcon className='icon'/>
            <p>Una vez seleccionados tus cuadros y enviada la consulta te llegará un mensaje a tu correo electrónico con el detalle de tu consulta y los siguientes pasos a seguir</p>
          </div>
          <div className="item">
            <LocalShippingIcon className='icon'/>
            <p>Por último, habiendo acordado el método de pago y la direccón de entrega empaqueto tu pedido y te lo envío</p>
          </div>
      </div>
    </div>
  )
}