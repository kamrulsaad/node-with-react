import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const handleDeleteUser = id => {
        const confirm = window.confirm("Are you Sure You want to delete this user?")
        if (confirm) {
            const url = `http://localhost:5000/user/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const newUsers = users.filter(user => user._id !== id)
                        setUsers(newUsers)
                    }
                })
        }
    }

    return (
        <div>
            <h3>This is Home</h3>
            <ul>
                {
                    users.map(user =>
                        <li key={user._id} >
                            {user.name} :: {user.email}
                            <button onClick={() => handleDeleteUser(user._id)} >X</button>
                            <Link style={{textDecoration : 'none'}} to={`/user/${user._id}`} > <button>Update User</button> </Link>
                        </li>)
                }
            </ul>
        </div>
    );
};

export default Home;