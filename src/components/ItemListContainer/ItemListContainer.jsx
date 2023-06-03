import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from "../service/firebase/firebaseConfig";
import ItemList from "../ItemList/ItemList";

  const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const collectionRef = categoryId
    ? query(collection(db, 'items'), where('CategoryId', '==', 'hIGwiedgmFEyuIImOmDS'))
    : collection(db, 'items');
  

    getDocs(collectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
       
        setProducts(productsAdapted);
      })
      .catch((error) => {
        console.log(error);
        setProducts([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);



  if (loading) {
    return <p>Cargando productos...</p>;
  }

  if (products.length === 0) {
    return (
      <div>
        <h1>{greeting}</h1>
        <p>No se encontraron productos.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList items={products} />
    </div>
  );
};

export default ItemListContainer;