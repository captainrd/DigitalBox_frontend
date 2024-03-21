// LoginForm.jsx

import React, { useState } from 'react';
import './LoginForm.css';
import { FaRegUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import login from '../../login'; 


const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        // Call login function
        const response = await login(username, password);

        if (response.success) {
            // Authentication successful, handle login success
            console.log('Login successful', response.data);
        } else {
            // Authentication failed, handle login failure
            setError(response.error);
        }
    }

    return (
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className='input-box'>
                    <input
                        type="text"
                        placeholder="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <FaRegUser className="icon" />
                </div>
                <div className='input-box'>
                    <input
                        type="email"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <MdEmail className='icon' />
                </div>
                <div className='input-box'>
                    <input
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FaLock className="icon" />
                </div>
                {error && <div className="error">{error}</div>}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default LoginForm;
