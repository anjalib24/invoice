import React, { useEffect, useState } from 'react';
import '../App.css';
import PrintBill from './PrintBill';

const CartList = ({ cart }) => {
    const [CART, setCART] = useState([]);
    const [showCheckoutForm, setShowCheckoutForm] = useState(false);
    const [shippingAddress, setShippingAddress] = useState({
        fullName: '',
        mobileNumber: '',
        pincode: '',
        city: '',
        state: ''
    });

    useEffect(() => {
        setCART(cart);
    }, [cart]);

    // Calculate total price
    const totalPrice = CART.reduce((total, item) => total + (item.price * item.quantity), 0);

    
    let discount = 0;
    if (totalPrice >= 10000) {
        discount = totalPrice * 0.1; 
    } else if (totalPrice >= 5000) {
        discount = totalPrice * 0.05; 
    }

    const handleCheckout = () => {
        setShowCheckoutForm(true);
    };

    const handleCancelCheckout = () => {
        setShowCheckoutForm(false);
    };

    const handleCheckoutSubmit = () => {
        // Implement checkout logic here
        setShowCheckoutForm(false);
    };

    const handleShippingAddressChange = (e) => {
        const { name, value } = e.target;
        setShippingAddress(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div>
            {showCheckoutForm ? (
                <CheckoutForm
                    shippingAddress={shippingAddress}
                    onShippingAddressChange={handleShippingAddressChange}
                    onCancel={handleCancelCheckout}
                    onSubmit={handleCheckoutSubmit}
                />
            ) : (
                <>
                    {CART?.map((cartItem, cartindex) => (
                        <div key={cartindex} id="cartlist">
                            <img src={cartItem.url} width={40} alt={cartItem.name} id="cartimg" />
                            <span className="mx-5" id="cartname"> {cartItem.name} </span>
                            <button
                                onClick={() => {
                                    const _CART = CART.map((item, index) =>
                                        cartindex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                                    );
                                    setCART(_CART);
                                }}
                            >-</button>
                            <span> {cartItem.quantity} </span>
                            <button
                                onClick={() => {
                                    const _CART = CART.map((item, index) =>
                                        cartindex === index ? { ...item, quantity: item.quantity + 1 } : item
                                    );
                                    setCART(_CART);
                                }}
                            >+</button>
                            <span id="price"> Rs. {cartItem.price * cartItem.quantity} </span>
                        </div>
                    ))}
                    <div className='' id="one">
                        <p className="d-flex text-center"> Total: <span>Rs. {totalPrice}</span> </p>
                        {discount >= 0 && <p id="dis"> Discount: <span>Rs. {discount}</span> </p>}
                        <PrintBill
                            fullName={shippingAddress.fullName}
                            mobileNumber={shippingAddress.mobileNumber}
                            city={shippingAddress.city}
                            state={shippingAddress.state}
                            pincode={shippingAddress.pincode}
                            cart={CART}
                            total={totalPrice}
                            discount={discount}
                        />
                    </div>
                    <div id="checkout">
                        <button className='bg-red p-5' onClick={handleCheckout}>Checkout</button>
                    </div>
                </>
            )}
        </div>
    );
};

const CheckoutForm = ({ shippingAddress, onShippingAddressChange, onCancel, onSubmit }) => {
    return (
        <div className='shadow-sm p-3 mb-5 bg-body rounded'>
            <div className='form'>
                <form onSubmit={onSubmit}>
                    <h1 className='texr-center'>Add address</h1>
                    <div className='col-6 text-center p-5'>
                        <label>
                            Full Name:
                            <input type="text" name="fullName" value={shippingAddress.fullName} onChange={onShippingAddressChange} required />
                        </label>
                        <label>
                            Mobile Number:
                            <input type="text" name="mobileNumber" value={shippingAddress.mobileNumber} onChange={onShippingAddressChange} required />
                        </label>
                    </div>
                    <div className='col-4 text-center'>
                        <label>
                            City:
                            <input type="text" name="city" value={shippingAddress.city} onChange={onShippingAddressChange} required />
                        </label>
                        <label>
                            State:
                            <input type="text" name="state" value={shippingAddress.state} onChange={onShippingAddressChange} required />
                        </label>
                        <label>
                            Pincode:
                            <input type="text" name="pincode" value={shippingAddress.pincode} onChange={onShippingAddressChange} required />
                        </label>
                    </div>
                    <div className='text-center p-5 gap-5'>
                        <button type="button" onClick={onCancel}>Cancel</button>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CartList;

