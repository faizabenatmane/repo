import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState('');

    // Fetch items from backend
    useEffect(() => {
        axios.get('http://localhost:5001/items')
            .then(response => setItems(response.data))
            .catch(error => console.error('Error fetching items:', error));
    }, []);

    // Add a new item
    const addItem = () => {
        axios.post('http://localhost:5001/items', { name: itemName })
            .then(response => setItems([...items, response.data]))
            .catch(error => console.error('Error adding item:', error));
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>React and Node.js with MongoDB By Faiza</h1>
            <input
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                placeholder="Enter item name"
            />
            <button onClick={addItem}>Add Item</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
