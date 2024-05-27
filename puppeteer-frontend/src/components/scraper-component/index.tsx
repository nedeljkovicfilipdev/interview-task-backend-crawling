import { useEffect, useState } from "react"
import axios from 'axios';

export const  ScraperComponent = () => {

    const [state, setState] = useState()

    const handleScraper = async () => {
        const response = await axios.get('http://localhost:4000/idealo/getProducts')
        console.log(response)
    }

    useEffect(() => {
        handleScraper()
    }, [])

    return(
        <div>
            
        </div>
    )
}