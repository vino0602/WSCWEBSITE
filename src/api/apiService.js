import axiosInstance from "../APIS/axiosConfig";


export const testConnection = async () => {
    try {
        const response = await axiosInstance.get('/test-connection');
        console.log('Response from backend:', response.data);
        return response.data; 
    } catch (error) {
        console.error('Error connecting to the backend:', error);
        throw error; 
    }
};
