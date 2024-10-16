import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Practiceapi() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();  // Call the function inside the useEffect
    }, []);  // Empty dependency array to run the effect only once on component mount

    return (
        <div>
            {user.map((user) => (
                <h1 key={user.id}>{user.name}</h1>  
            ))}
        </div>
    );
};

export default Practiceapi;
