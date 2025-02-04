import React, { useState, useEffect } from 'react';

function App() {
    const [dogImage, setDogImage] = useState(null); // State to store the dog image URL
    const [loading, setLoading] = useState(true); // State to track loading state

    useEffect(() => {
        // Fetch the random dog image when the component mounts
        const fetchDogImage = async() => {
            try {
                const response = await fetch('https://dog.ceo/api/breeds/image/random');
                const data = await response.json();
                setDogImage(data.message); // Set the image URL from the API response
                setLoading(false); // Set loading to false after data is fetched
            } catch (error) {
                console.error('Error fetching dog image:', error);
                setLoading(false); // Set loading to false in case of an error
            }
        };

        fetchDogImage(); // Call the function to fetch data
    }, []); // Empty dependency array ensures this runs once on mount

    if (loading) {
        return <p > Loading... < /p>;  / / Show "Loading..."
        while fetching data
    }

    return ( <
        div >
        <
        img src = { dogImage }
        alt = "A Random Dog" / > { /* Display the fetched image */ } <
        /div>
    );
}

export default App; // Export the App component