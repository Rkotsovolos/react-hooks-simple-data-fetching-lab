// create your App component here
import React, { useEffect, useState } from 'react';

function App() {

    const [image, setImage] = useState([]);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(resp => resp.json())
        .then(setImage)
    }, [] );

    return (
        <div>
            <p>Loading...</p>
            <img src={image} alt='A Random Dog'/>
        </div>
    );

}

export default App;