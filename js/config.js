var API_BASE_URL = "https://adminpanel-fj5l.onrender.com";

function apiCall(endpoint, options) {
    var requestOptions = options || {};
    var token = localStorage.getItem('token');
    var headers = {
        'Content-Type': 'application/json'
    };

    if (token) {
        headers.Authorization = 'Bearer ' + token;
    }

    if (requestOptions.headers) {
        Object.keys(requestOptions.headers).forEach(function(key) {
            headers[key] = requestOptions.headers[key];
        });
    }

    var config = {
        method: requestOptions.method || 'GET',
        headers: headers,
        body: requestOptions.body || null
    };

    return fetch(API_BASE_URL + endpoint, config)
        .then(function(res) {
            if (res.status === 401) {
                logout();
            }

            return res.json().then(function(data) {
                if (!res.ok) {
                    throw new Error(data.error || 'Erreur API');
                }
                return data;
            });
        })
        .catch(function(error) {
            console.error('API Call Error:', error);
            throw error;
        });
}

function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = 'login.html';
}
