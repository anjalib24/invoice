import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const CheckoutForm = () => {
  const [shippingAddress, setShippingAddress] = useState({
    fullName: '',
    mobileNumber: '',
    pincode: '',
    addressLine1: '',
    addressLine2: '',
    landmark: '',
    city: '',
    state: '',
    isDefaultAddress: false,
    deliveryInstructions: ''
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setShippingAddress(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle checkout logic with the shipping address data
    console.log('Shipping address submitted:', shippingAddress);
    // Reset the form after submission if needed
    // setShippingAddress({
    //   fullName: '',
    //   mobileNumber: '',
    //   pincode: '',
    //   addressLine1: '',
    //   addressLine2: '',
    //   landmark: '',
    //   city: '',
    //   state: '',
    //   isDefaultAddress: false,
    //   deliveryInstructions: ''
    // });
  };

  return (
    <form onSubmit={handleSubmit} className='border shadow'>
      <div class='d-flex flex-row mb-3  '>
      <label class="text-success">
        Full Name:
        <input type="text" name="fullName" value={shippingAddress.fullName} onChange={handleChange} class="text-success" required />
      </label>
      <label>
        Mobile Number:
        <input type="text" name="mobileNumber" value={shippingAddress.mobileNumber} onChange={handleChange} required />
      </label>
      </div>
      
      
      <label>
        Pincode:
        <input type="text" name="pincode" value={shippingAddress.pincode} onChange={handleChange} required />
      </label>
      <label>
        Address Line 1:
        <input type="text" name="addressLine1" value={shippingAddress.addressLine1} onChange={handleChange} required />
      </label>
      <label>
        Address Line 2:
        <input type="text" name="addressLine2" value={shippingAddress.addressLine2} onChange={handleChange} />
      </label>
      <label>
        Landmark:
        <input type="text" name="landmark" value={shippingAddress.landmark} onChange={handleChange} />
      </label>
      <label>
        City:
        <input type="text" name="city" value={shippingAddress.city} onChange={handleChange} required />
      </label>
      <label>
        State:
        <input type="text" name="state" value={shippingAddress.state} onChange={handleChange} required />
      </label>
      <label>
        Make this my default address:
        <input type="checkbox" name="isDefaultAddress" checked={shippingAddress.isDefaultAddress} onChange={handleChange} />
      </label>
      <label>
        Delivery Instructions:
        <textarea name="deliveryInstructions" value={shippingAddress.deliveryInstructions} onChange={handleChange}></textarea>
      </label>
      <button type="submit">Use this address</button>
    </form>
  );
};

export default CheckoutForm;
