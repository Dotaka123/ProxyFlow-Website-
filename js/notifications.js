function showToast(message, type = 'info') {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    let icon = '<i class="fas fa-info-circle"></i>';
    if (type === 'success') icon = '<i class="fas fa-check-circle"></i>';
    if (type === 'error') icon = '<i class="fas fa-exclamation-circle"></i>';
    if (type === 'warning') icon = '<i class="fas fa-exclamation-triangle"></i>';

    toast.innerHTML = `
        <span class="toast-icon">${icon}</span>
        <span class="toast-message">${message}</span>
    `;

    container.appendChild(toast);

    // Auto remove
    const timer = setTimeout(() => {
        dismissToast(toast);
    }, 4000);

    toast.addEventListener('click', () => {
        clearTimeout(timer);
        dismissToast(toast);
    });
}

function dismissToast(toast) {
    toast.style.animation = 'fadeOut 0.3s ease-in forwards';
    toast.addEventListener('animationend', () => {
        const container = toast.parentElement;
        toast.remove();
        if (container && container.childNodes.length === 0) {
            container.remove();
        }
    });
}

// Global error handler
window.onerror = function(message, source, lineno, colno, error) {
    console.error('Captured error:', message, error);
};
