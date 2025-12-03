// create your App component here
import{ useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getDogImage();
    }, []);

    const getDogImage = async () => {
        setIsLoading(true);
        try {
            const response = await fetch("https://dog.ceo/api/breeds/image/random");
            const data = await response.json();
            setDogImage(data.message);
        } catch (error) {
            console.error("Error fetching dog image:", error);
        }finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <h1>Dog Image Generator</h1>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <img src={dogImage} alt="A Random Dog" />
            )}
            <button onClick={getDogImage}>Get New Dog Image</button>
        </div>
    );
}

export default App;