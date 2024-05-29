import { useEffect, useState } from "react";
import axios from 'axios';

export const ScraperComponent = () => {
    const [state, setState] = useState(null);

    const handleScraper = async () => {
        try {
            const response = await axios.get('http://localhost:4000/idealo/getProducts');
            setState(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        handleScraper();
    }, []);

    return (
        <div>
            {state ? (
                <pre>{JSON.stringify(state, null, 2)}</pre>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
