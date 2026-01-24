// js/config.js
const API_URL = 'https://adminpanel-fj5l.onrender.com'; // Plus de localhost ici si tu es en ligne !

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
        // Si le token est expiré (401), on renvoie vers le login
        if (response.status === 401) {
            localStorage.clear();
            window.location.href = 'login.html';
        }
        throw new Error(data.error || 'Erreur API');
    }

    return data;
}
