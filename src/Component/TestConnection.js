import React from 'react';
import { testConnection } from '../api/apiService'; // Import the function from apiService.js

const TestConnection = () => {
    const checkConnection = async () => {
        try {
            const response = await testConnection();
            alert('Connection Successful: ' + response);
        } catch (error) {
            alert('Connection Failed: ' + error.message);
        }
    };

    return (
        <div>
            <h1>Test Backend Connection</h1>
            <button onClick={checkConnection}>Test Connection</button>
        </div>
    );
};

export default TestConnection;
