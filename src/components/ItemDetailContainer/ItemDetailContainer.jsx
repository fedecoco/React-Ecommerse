import React, { useState, useEffect, useContext } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../service/firebase/firebaseConfig";
import { CartContext } from "../../context/CartContext";
import Contador from "../Contador/Contador";

const ItemDetailContainer = () => {
    const { addItem } = useContext(CartContext);
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(1);
  
    const { itemId } = useParams();
  
    const handleOnAdd = () => {
      const item = {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      };
      addItem(item, count);
    };
  
    useEffect(() => {
      setLoading(true);
  
      const getProduct = async () => {
        try {
          const docRef = doc(db, "items", itemId);
          const docSnapshot = await getDoc(docRef);
  
          if (docSnapshot.exists()) {
            const data = docSnapshot.data();
            const productData = {
              id: docSnapshot.id,
              title: data.title || "",
              description: data.description,
              price: data.price,
              stock: data.stock,
              image: data.image || "",
            };
            setProduct(productData);
          } else {
            setProduct(null);
          }
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
  
      getProduct();
    }, [itemId]);
  
    return (
      <div className="ItemDetailContainer">
        {loading ? (
          <p>Loading...</p>
        ) : product ? (
          <ItemDetail
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            stock={product.stock}
            image={product.image}
            count={count}
            setCount={setCount}
            handleOnAdd={handleOnAdd}
            
          />
        ) : (
          <p>Product not found.</p>
        )}
      </div>
    );
  };
  
  export default ItemDetailContainer;