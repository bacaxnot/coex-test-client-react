import { useEffect, useState } from "react";
import axios from 'axios'

const API = 'http://localhost:3000/v1/products'

const useGetProducts = () => {
    const [products, setProducts] = useState([])

	useEffect(async ()=>{
		const res = await axios(API)
        console.log(res.data)
		setProducts(res.data)
	}, [])

    return products
}

export default useGetProducts