import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useEffect, useState} from "react"
import {getFirestore, doc, getDoc, collection, getDocs} from "firebase/firestore";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";




import { CartContextProvider } from "./context/CartContext";




function App() {
  const[category, setCategory] = useState()

  useEffect(() => {
    const db = getFirestore();
    const categoriaCollection = collection(db, "categorias");
  
    getDocs(categoriaCollection).then((snapshots) => {
      if (snapshots) {
        const categoryData = [];
        snapshots.forEach((doc) => {
          categoryData.push({ id: doc.id, ...doc.data() });
        });
        setCategory(categoryData);
      }
    });
  }, []);
  console.log(category);


  return (
   <div className="App">
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer />}/>
      <Route path='/category/:categoryId' element={<ItemListContainer />}/>
      <Route path='/item/:itemId' element={ <ItemDetailContainer/>} />
      <Route path='/cart' element ={<Cart />} />
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='*' element={<h1>404 NOT FOUND</h1>} />
    </Routes>
    </BrowserRouter>
    
  </div>
  );
}

export default App;

