import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Axios for HTTP requests

function App() {
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Fetch item details from the correct endpoint
    axios
      .get('http://localhost:5000/api/items/1') // API URL
      .then((response) => {
        setItem(response.data); // Store the fetched data
      })
      .catch((error) => {
        console.error('Error fetching item:', error);
      });
  }, []);

  return (
    <div>
      <h1>Item Details</h1>
      {item ? (
        <div>
          <p>Item ID: {item.itemId}</p>
          <p>Item Name: {item.name}</p>
        </div>
      ) : (
        <p>Loading item...</p>
      )}
    </div>
  );
}

export default App;
