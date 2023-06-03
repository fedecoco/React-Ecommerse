import React, { useState, useContext } from 'react';

import { CartContext } from '../../context/CartContext';
import { db } from '../service/firebase/firebaseConfig';
import {
  collection,
  writeBatch,
  getDocs,
  query,
  where,
  doc,
  Timestamp,
} from 'firebase/firestore';

import CheckoutForm from '../CheckoutForm.js/CheckoutForm'; 
import { addDoc } from "firebase/firestore";


const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState('');

  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date()),
      };
      const batch = writeBatch(db);

      const outOfStock = [];

      const ids = cart.map((prod) => prod.id);

      const productsRef = collection(db, 'products');

      const productsAddedFromFirestore = await getDocs(
        query(productsRef, where(doc('id'), 'in', ids))
      );

      productsAddedFromFirestore.forEach((doc) => {
        const product = doc.data();
        const item = cart.find((item) => item.id === doc.id);

        if (product.stock >= item.quantity) {
          batch.update(doc.ref, { stock: product.stock - item.quantity });
        } else {
          outOfStock.push(item);
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        // Lógica para guardar la orden en Firestore y obtener el orderId
        const orderRef = collection(db, 'orders');
        const newOrderRef = await addDoc(orderRef, objOrder);
        const orderIdFromFirestore = newOrderRef.id;

        setOrderId(orderIdFromFirestore);
        clearCart();
      } else {
        throw new Error('Algunos productos están fuera de stock');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Se está generando la orden...</h1>;
  }

  if (orderId) {
    return <h1>El id de su orden es: {orderId}</h1>;
  }

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;
