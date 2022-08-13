import { useEffect, useState } from "react";
import axios from 'axios'

const API = 'http://localhost:3000/v1/images'

const useGetImage = (productId) => {
    const [image, setImage] = useState('')

	useEffect(async ()=>{
		const res = await axios(`${API}/${productId}`)
		setImage(res.data)
	}, [])

    return image
}

export default useGetImage