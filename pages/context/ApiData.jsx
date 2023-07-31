import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ApiDataContext = createContext();

export const ApiDataProvider = ({children}) => {
  const baseUrl = "https://fakestoreapi.com/products"
  const category = `${baseUrl}/category`
  const [products,setProducts] = useState([])
  const [jewelry,setJewelry] = useState([])
  const [men,setMen] = useState([])
  const [women,setWomen] = useState([])
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
   await axios.get(`${baseUrl}`)
    .then((res) => {
      setLoading(true)
      setProducts(res.data)
    })
    .catch((err) => {
      setLoading(false)
      console.log(err)
    })
  }

  const getJewelry = async () => {
    await axios.get(`${category}/jewelery`)
     .then((res) => {
       setLoading(true)
       setJewelry(res.data)
     })
     .catch((err) => {
       setLoading(false)
       console.log(err)
     })
   }


   const getMen = async () => {
    await axios.get(`${category}/men's%20clothing`)
     .then((res) => {
       setLoading(true)
       setMen(res.data)
     })
     .catch((err) => {
       setLoading(false)
       console.log(err)
     })
   }


   const getWomen = async () => {
    await axios.get(`${category}/women's%20clothing`)
     .then((res) => {
       setLoading(true)
       setWomen(res.data)
     })
     .catch((err) => {
       setLoading(false)
       console.log(err)
     })
   }



  useEffect(() => {
    getProducts()
    getJewelry()
    getMen()
    getWomen()
  }, []);

    return (
        <ApiDataContext.Provider
        value={{products,loading,jewelry,men,women}}
        >
          {children}
        </ApiDataContext.Provider>
        )
}

