const API_URL = "https://adminpanel-fj5l.onrender.com";

async function apiCall(endpoint, options = {}) {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("Non connecté");

    const config = {
        method: options.method || "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    };

    if (options.body) config.body = options.body;

    const res = await fetch(API_URL + endpoint, config);

    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Erreur API");
    }

    return res.json();
}
