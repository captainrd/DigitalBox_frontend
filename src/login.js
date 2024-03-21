// login.js

const login = async (username, password) => {
    try {
        const response = await fetch('{{base_url}}login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        const data = await response.json();

        if (response.ok) {
            // Authentication successful
            return { success: true, data: data };
        } else {
            // Authentication failed
            return { success: false, error: data.error || 'Authentication failed' };
        }
    } catch (error) {
        // Error during request
        return { success: false, error: 'An error occurred during authentication' };
    }
}

export default login;
