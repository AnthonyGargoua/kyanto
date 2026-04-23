// --- Blindage du Compteur ---
// On définit la date du drop et la fonction de calcul AVANT Alpine
const DROP_DATE_STR = "2026-06-15T10:00:00"; // CHANGE LA DATE ICI (Format ISO)
const dropDate = new Date(DROP_DATE_STR).getTime();

function calculateCountdown() {
    const now = new Date().getTime();
    const diff = dropDate - now;

    if (diff <= 0) {
        return { d: "00", h: "00", m: "00", s: "00" };
    }

    return {
        d: Math.floor(diff / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'),
        h: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0'),
        m: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0'),
        s: Math.floor((diff % (1000 * 60)) / 1000).toString().padStart(2, '0')
    };
}

// --- ALPINE LOGIC ---
document.addEventListener('alpine:init', () => {
    Alpine.data('shop', () => ({
        page: 'home',
        mobileMenu: false,
        cartOpen: false,
        notification: '',
        cart: [],
        
        // Initialisation immédiate du compteur
        countdown: calculateCountdown(),

        init() {
            // Mise à jour du compteur chaque seconde
            setInterval(() => {
                this.countdown = calculateCountdown();
            }, 1000);
        },

        // Plus de produits avec l'état 'Sold Out' Aléatoire
        products: [
            { id: 1, name: "Hoodie Shinigami V1", price: 65, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800", soldOut: false },
            { id: 2, name: "Cargo 'Tech-Kyoto'", price: 85, image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800", soldOut: false },
            { id: 3, name: "Kimono Black Mesh", price: 120, image: "https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=800", soldOut: true },
            { id: 4, name: "Tee Oversize 'Akira'", price: 35, image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800", soldOut: false },
            { id: 5, name: "Veste Sukajan Tiger", price: 145, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800", soldOut: false },
            { id: 6, name: "Cap Kanji Red", price: 30, image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800", soldOut: false },
            { id: 7, name: "Chemise Sumi-e", price: 45, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800", soldOut: true },
            { id: 8, name: "Pantalon Dark Zen", price: 70, image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800", soldOut: false },
            { id: 9, name: "Tee 'Neo-Osaka' Ghost", price: 38, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800", soldOut: false },
            { id: 10, name: "Cargo Tactique V3", price: 90, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800", soldOut: false }
        ],

        addToCart(product) {
            if (product.soldOut) {
                this.showNotification(`ERREUR : ${product.name.toUpperCase()} EST SOLD OUT.`);
                return;
            }
            this.cart.push(product);
            this.showNotification(`${product.name.toUpperCase()} AJOUTÉ AU PANIER`);
        },

        removeFromCart(index) {
            this.cart.splice(index, 1);
        },

        totalPrice() {
            return this.cart.reduce((total, item) => total + item.price, 0);
        },

        showNotification(msg) {
            this.notification = msg;
            setTimeout(() => this.notification = '', 3000);
        }
    }))
});
