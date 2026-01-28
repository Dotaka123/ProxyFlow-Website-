/**
 * Theme and Language Management for Proxy Shop
 */

const translations = {
    fr: {
        brand_name: "Proxy Shop",
        nav_home: "Accueil",
        nav_dashboard: "Tableau de Bord",
        nav_logout: "Déconnexion",
        hero_title: "Proxies Premium",
        hero_subtitle: "Accédez à internet sans limites avec nos proxies rapides, sécurisés et fiables",
        btn_start: "Commencer Maintenant",
        btn_login: "Se Connecter",
        features_title: "Pourquoi Nous Choisir?",
        feature_fast_title: "Ultra Rapide",
        feature_fast_desc: "Des serveurs optimisés pour une vitesse maximale et une latence minimale",
        feature_secure_title: "100% Sécurisé",
        feature_secure_desc: "Vos données sont protégées avec un cryptage de niveau militaire",
        feature_global_title: "Mondial",
        feature_global_desc: "Accédez à des proxies dans plus de 50 pays à travers le monde",
        feature_instant_title: "Activation Instantanée",
        feature_instant_desc: "Vos proxies sont actifs immédiatement après l'achat",
        feature_price_title: "Prix Abordables",
        feature_price_desc: "Les meilleurs tarifs du marché avec des options flexibles",
        feature_support_title: "Support 24/7",
        feature_support_desc: "Notre équipe est disponible pour vous aider à tout moment",
        pricing_title: "Nos Offres",
        package_golden: "Golden Package",
        package_silver: "Silver Package",
        price_golden: "$0.25/2h",
        price_silver: "$1.10/2j",
        feature_change_country: "Changement de pays",
        feature_high_speed: "Haute vitesse",
        feature_priority_support: "Support prioritaire",
        feature_fixed_country: "Pays fixe",
        feature_optimal_speed: "Vitesse optimale",
        feature_standard_support: "Support standard",
        footer_rights: "Tous droits réservés.",
        login_title: "Connexion",
        register_title: "Inscription",
        email_label: "Adresse Email",
        password_label: "Mot de passe",
        confirm_password_label: "Confirmer le mot de passe",
        no_account: "Pas encore de compte ?",
        have_account: "Déjà un compte ?",
        dashboard_title: "Dashboard",
        your_balance: "Votre Solde",
        recharge_btn: "Recharger mon compte",
        buy_proxy_title: "Acheter un Proxy",
        package_label: "Package",
        duration_label: "Durée",
        protocol_label: "Protocole",
        country_label: "Pays",
        parent_proxy_label: "Proxy Parent",
        username_placeholder: "Laisser vide pour auto-générer",
        password_placeholder: "Laisser vide pour auto-générer",
        buy_btn: "Acheter le Proxy",
        my_proxies_title: "Mes Proxies",
        history_title: "Historique des Transactions",
        change_location_btn: "Changer de Pays",
        expired_badge: "EXPIRÉ",
        copy_btn: "Copier",
        loading: "Chargement...",
        empty_proxies: "Aucun proxy actif.",
        empty_transactions: "Aucune transaction trouvée.",
        modal_change_title: "Changer de Pays",
        select_country: "-- Sélectionner un pays --",
        select_protocol: "-- Sélectionner un protocole --",
        select_proxy: "-- Sélectionner un proxy --",
        confirm_btn: "Confirmer",
        cancel_btn: "Annuler",
    },
    en: {
        brand_name: "Proxy Shop",
        nav_home: "Home",
        nav_dashboard: "Dashboard",
        nav_logout: "Logout",
        hero_title: "Premium Proxies",
        hero_subtitle: "Access the internet without limits with our fast, secure and reliable proxies",
        btn_start: "Get Started Now",
        btn_login: "Login",
        features_title: "Why Choose Us?",
        feature_fast_title: "Ultra Fast",
        feature_fast_desc: "Optimized servers for maximum speed and minimum latency",
        feature_secure_title: "100% Secure",
        feature_secure_desc: "Your data is protected with military-grade encryption",
        feature_global_title: "Global",
        feature_global_desc: "Access proxies in over 50 countries worldwide",
        feature_instant_title: "Instant Activation",
        feature_instant_desc: "Your proxies are active immediately after purchase",
        feature_price_title: "Affordable Prices",
        feature_price_desc: "The best rates on the market with flexible options",
        feature_support_title: "24/7 Support",
        feature_support_desc: "Our team is available to help you at any time",
        pricing_title: "Our Offers",
        package_golden: "Golden Package",
        package_silver: "Silver Package",
        price_golden: "$0.25/2h",
        price_silver: "$1.10/2d",
        feature_change_country: "Country change",
        feature_high_speed: "High speed",
        feature_priority_support: "Priority support",
        feature_fixed_country: "Fixed country",
        feature_optimal_speed: "Optimal speed",
        feature_standard_support: "Standard support",
        footer_rights: "All rights reserved.",
        login_title: "Login",
        register_title: "Register",
        email_label: "Email Address",
        password_label: "Password",
        confirm_password_label: "Confirm Password",
        no_account: "Don't have an account?",
        have_account: "Already have an account?",
        dashboard_title: "Dashboard",
        your_balance: "Your Balance",
        recharge_btn: "Recharge my account",
        buy_proxy_title: "Buy a Proxy",
        package_label: "Package",
        duration_label: "Duration",
        protocol_label: "Protocol",
        country_label: "Country",
        parent_proxy_label: "Parent Proxy",
        username_placeholder: "Leave empty to auto-generate",
        password_placeholder: "Leave empty to auto-generate",
        buy_btn: "Buy Proxy",
        my_proxies_title: "My Proxies",
        history_title: "Transaction History",
        change_location_btn: "Change Country",
        expired_badge: "EXPIRED",
        copy_btn: "Copy",
        loading: "Loading...",
        empty_proxies: "No active proxies.",
        empty_transactions: "No transactions found.",
        modal_change_title: "Change Country",
        select_country: "-- Select a country --",
        select_protocol: "-- Select a protocol --",
        select_proxy: "-- Select a proxy --",
        confirm_btn: "Confirm",
        cancel_btn: "Cancel",
    }
};

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const themeIcon = document.getElementById('themeIcon');
    if (themeIcon) {
        themeIcon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
}

function initLang() {
    const savedLang = localStorage.getItem('lang') || 'fr';
    setLanguage(savedLang);
}

function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (el.tagName === 'INPUT' && (el.type === 'text' || el.type === 'password' || el.type === 'email')) {
                el.placeholder = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    const langIcon = document.getElementById('langIcon');
    if (langIcon) {
        langIcon.textContent = lang === 'fr' ? '🇫🇷' : '🇺🇸';
    }
}

function toggleLang() {
    const currentLang = localStorage.getItem('lang') || 'fr';
    const newLang = currentLang === 'fr' ? 'en' : 'fr';
    setLanguage(newLang);
}

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLang();
});
