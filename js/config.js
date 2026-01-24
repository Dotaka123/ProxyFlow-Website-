const API_BASE_URL = "https://adminpanel-fj5l.onrender.com";

async function apiCall(endpoint, options = {}) {
    const token = localStorage.getItem('token');
    const config = {
        method: options.method || 'GET',
        headers: {
            'Content-Type': 'application/json',
            ...(token ? { 'Authorization': `Bearer ${token}` } : {})
        },
        body: options.body || null
    };

    const res = await fetch(API_BASE_URL + endpoint, config);
    const data = await res.json();

    if (!res.ok) throw new Error(data.error || 'Erreur API');
    return data;
}
