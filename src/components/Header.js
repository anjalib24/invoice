import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'



function Header(props) {
    return (

        <div className='flex shopping-card'>
            <div onClick={() => props.handleShow(false)} >Shopping Cart App</div>
            <div onClick={() => props.handleShow(true)}> <FontAwesomeIcon icon={faCartShopping} />
                <sup> {props.count} </sup>
            </div>
        
        </div>
    );
}
// import CheckoutForm from './CheckoutForm ';

export default Header;
