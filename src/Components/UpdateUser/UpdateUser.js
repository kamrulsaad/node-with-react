import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {

    const {id} = useParams()
    const [user, setUser] = useState({})
    const url = `http://localhost:5000/user/${id}`

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data))
    },[url])

    const handleUpdate = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const updatedUser = {name, email}

        fetch(url, {
            method: 'PUT',
            headers : {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data => console.log(data))

        e.target.reset()
    }

    return (
        <div>
            <h1>Updating user : {user.name} </h1>
            <form onSubmit={handleUpdate}>
                <input type="text" name='name' placeholder='Update Name' required /> <br />
                <input type="email" name='email' placeholder='Update Email' required /> <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateUser;