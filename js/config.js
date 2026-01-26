const API_BASE_URL = "https://adminpanel-fj5l.onrender.com";

async function apiCall(endpoint, options = {}) {
    const token = localStorage.getItem('token');

    const headers = {
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
        ...options.headers
    };

    const config = {
        method: options.method || 'GET',
        headers: headers,
        body: options.body || null
    };

    try {
        const res = await fetch(API_BASE_URL + endpoint, config);

        if (res.status === 401) {
            localStorage.clear();
            if (!window.location.href.includes('login.html')) {
                window.location.href = 'login.html';
            }
        }

        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Erreur API');
        return data;
    } catch (error) {
        console.error('API Call Error:', error);
        throw error;
    }
}
