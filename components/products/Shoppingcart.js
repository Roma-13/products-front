import React, { useState } from 'react';
import styles from './shoppingcart.module.css';
import IMG1 from "./../../assets/1707289109360.png";
import IMG2 from "./../../assets/1713416670393.png";

const Shoppingcart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: '4 არხიანი IP ვიდეო ჩამწერი NVR - 1 მყარი დისკი, Mini, HiLook',
      price: 151.49,
      quantity: 1,
      serialNumber: 'IPC3624LE-ADF28K-WL',
      image: IMG1,
    },
    {
      id: 2,
      name: '4 არხიანი IP ვიდეო ჩამწერი NVR - 1 მყარი დისკი, Mini, HiLook',
      price: 114.97,
      quantity: 2,
      serialNumber: 'IPC3624LE-ADF28K-WL', 
      image: IMG2,
    },

  ]);

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>ჩემი კალათა</h2>
      {cartItems.length === 0 ? (
        <p>თქვენი კალათა ცარიელია</p>
      ) : (
        <div className={styles.cartList}>
          {cartItems.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <img src={item.image} alt={item.name} className={styles.productImage} />
              <div className={styles.itemDetails}>
                <h3>{item.name}</h3>
                <p>Price: {item.price.toFixed(2)}ლარი</p>
                <p>Serial Number: {item.serialNumber}</p> 
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                  min="1"
                />
<button className={styles.deleteButton} onClick={() => removeItem(item.id)}>წაშლა</button>
</div>
            </div>
          ))}
          <div className={styles.total}>
            <h3>სულ: {totalAmount}ლარი</h3>
            <button className={styles.checkoutButton}>გადახდა</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shoppingcart;
