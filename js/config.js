// ⚠️ CHANGE CETTE URL PAR TON BACKEND DÉPLOYÉ!
const API_URL = 'http://localhost:5000'; // Temporaire pour test local

async function apiCall(endpoint, options = {}) {
    const token = localStorage.getItem('token');
    
    const config = {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...(token && { 'Authorization': `Bearer ${token}` }),
            ...options.headers
        }
    };

    const response = await fetch(`${API_URL}${endpoint}`, config);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || 'Erreur');
    }

    return data;
}
