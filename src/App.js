import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import { useState } from 'react';

function App() {

  const [product, setProduct] = useState([
    {
      url: 'https://d1s2zprapij148.cloudfront.net/image/cache/catalog/products/24570-200x200.jpg',
      name: 'detergent powder',
      category: 'detergent',
      seller: 'AMZ Seller Ghz',
      price: 1999
    },
    {
      url: 'https://d1s2zprapij148.cloudfront.net/image/cache/catalog/products/2773_1-200x200.jpg',
      name: 'Filtered Oil',
      category: 'oil',
      seller: 'Watch Ltd Siyana',
      price: 800
    },
    {
      url: 'https://d1s2zprapij148.cloudfront.net/image/cache/catalog/products/31273-200x200.jpg',
      name: 'Basmati Rice',
      category: 'rice',
      seller: 'Delhi Laptops',
      price: 343
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfvoDzLqrT7GwU3z7Ccp0Cl9rV0ZnU9DcmEg&usqp=CAU',
      name: 'Security Camera',
      category: 'CCTV',
      seller: 'Camron LTD',
      price: 4000
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9e8Axt-h9q8EIybKfjGzbkIWJAr50_BX7Q&usqp=CAU',
      name: 'Watch Pink',
      category: 'Watches',
      seller: 'Watch Ltd',
      price: 2000
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xzgtOpMxdpfgBOg3OKsEqYRkNBbuprJj4w&usqp=CAU',
      name: 'Cup red Color',
      category: 'Cup',
      seller: 'ABS Ltd',
      price: 100
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }
      {/* <img src="https://www.bigbasket.com/media/uploads/banner_images/B2C022308703-16154-460-DT-all-cm-290224.jpg?tr=w-1920,q=80" alt="" className='w-100px' /> */}


    </div>
  );
}

export default App;
