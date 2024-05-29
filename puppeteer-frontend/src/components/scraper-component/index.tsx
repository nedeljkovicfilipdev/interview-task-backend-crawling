import { useEffect, useState } from "react";
import axios from 'axios';

export const ScraperComponent = () => {
    const [productData, setProductData] = useState(null);

    const handleScraper = async () => {
        try {
            const response = await axios.get('http://localhost:4000/idealo/getProducts');

            setProductData(response.data);
            console.log(productData)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        handleScraper();
    }, []);

    return (
        <div>
            {productData ? (
                <pre>{JSON.stringify(productData, null, 2)}</pre>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
