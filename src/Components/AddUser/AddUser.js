import React from 'react';

const AddUser = () => {

    const handleFormSubmit = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const user = {name, email}

        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => console.log(data.insertedId))

        e.target.reset()
    }

    return (
        <div>
            <h1>Please Add a new user</h1>
            <form onSubmit={handleFormSubmit}>
                <input type="text" name='name' placeholder='Your Name' required /> <br />
                <input type="email" name='email' placeholder='Your Email' required /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddUser;