const API_BASE_URL = "https://adminpanel-fj5l.onrender.com";

// Système de notification flottante élégant
function showToast(message, type = 'info') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
        
        // Ajout dynamique du style CSS pour les notifications
        const style = document.createElement('style');
        style.textContent = `
            #toast-container {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 10000;
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            .toast {
                background: white;
                padding: 15px 25px;
                border-radius: 10px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                display: flex;
                align-items: center;
                gap: 10px;
                min-width: 280px;
                animation: slideIn 0.3s ease-out;
                border-left: 5px solid #667eea;
                color: #333;
                font-family: sans-serif;
            }
            .toast.error { border-left-color: #ff4b2b; }
            .toast.success { border-left-color: #2ecc71; }
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`; // ✅ Corrected: backticks
    const icon = type === 'success' ? '✅' : (type === 'error' ? '❌' : 'ℹ️');
    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`; // ✅ Corrected: backticks
    
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = '0.5s';
        setTimeout(() => toast.remove(), 500);
    }, 4000);
}

// Fonction API sécurisée
async function apiCall(endpoint, options = {}) {
    const token = localStorage.getItem('token');
    const config = {
        method: options.method || 'GET',
        headers: {
            'Content-Type': 'application/json',
            ...(token ? { 'Authorization': `Bearer ${token}` } : {}) // ✅ Corrected: backticks
        },
        body: options.body ? JSON.stringify(options.body) : null
    };

    try {
        const res = await fetch(API_BASE_URL + endpoint, config);
        const data = await res.json();

        if (!res.ok) {
            if (res.status === 401) {
                localStorage.clear();
                window.location.href = 'login.html';
            }
            throw new Error(data.error || data.message || 'Erreur serveur');
        }
        return data;
    } catch (error) {
        showToast(error.message, 'error');
        throw error;
    }
}
