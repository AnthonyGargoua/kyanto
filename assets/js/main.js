document.addEventListener('alpine:init', () => {
    Alpine.data('shop', () => ({
        page: 'home',
        filter: 'all',
        cartOpen: false,
        showPopup: false,
        cart: [],
        sizes: ['S', 'M', 'L', 'XL'],
        shipping: 5.90,
        orderStep: 1,
        // Remplace ta ligne formData actuelle par celle-ci :
        formDataCheckout: { prenom: '', adresse: '', ville: '', cp: '' },
        formDataDrop: { prenom: '', email: '' },

        universes: {
            all: { bg: 'bg-white', text: 'text-black', accent: 'border-red-600', title: 'NOS COLLECTIONS' },
            tokyo: { bg: 'bg-indigo-950', text: 'text-fuchsia-500', accent: 'border-fuchsia-500', title: 'TOKYO NIGHTS' },
            cyber: { bg: 'bg-zinc-900', text: 'text-yellow-400', accent: 'border-yellow-400', title: 'CYBER-PUNK' },
            zen: { bg: 'bg-stone-100', text: 'text-emerald-900', accent: 'border-emerald-800', title: 'ZEN MINIMAL' }
        },

        products: [
            {
                id: 1,
                name: "Hoodie 'Neo-Tokyo'",
                price: 85,
                category: 'tokyo',
                images: {
                    'Noir': 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600',
                    'Violet': 'https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=600'
                },
                colors: [{name: 'Noir', hex: '#000'}, {name: 'Violet', hex: '#8b5cf6'}],
                selectedSize: 'M',
                selectedColor: 'Noir'
            },
            {
                id: 2,
                name: "T-Shirt 'Ghost Kanji'",
                price: 45,
                category: 'cyber',
                images: {
                    'Blanc': 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600',
                    'Jaune': 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=600'
                },
                colors: [{name: 'Blanc', hex: '#fff'}, {name: 'Jaune', hex: '#facc15'}],
                selectedSize: 'L',
                selectedColor: 'Blanc'
            },
            {
                id: 3,
                name: "Pant 'Zen Cargo'",
                price: 95,
                category: 'zen',
                images: {
                    'Beige': 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=600',
                    'Olive': 'https://images.unsplash.com/photo-1584102860163-22047e2ee485?q=80&w=600'
                },
                colors: [{name: 'Beige', hex: '#d2b48c'}, {name: 'Olive', hex: '#556b2f'}],
                selectedSize: 'M',
                selectedColor: 'Beige'
            },
            {
                id: 4,
                name: "Veste 'Cyber-Shell'",
                price: 120,
                category: 'cyber',
                images: {
                    'Noir': 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=600',
                    'Gris': 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=600'
                },
                colors: [{name: 'Noir', hex: '#000'}, {name: 'Gris', hex: '#4b5563'}],
                selectedSize: 'L',
                selectedColor: 'Noir'
            },
            {
                id: 5,
                name: "Kimono 'Street-Zen'",
                price: 75,
                category: 'zen',
                images: {
                    'Blanc': 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=600',
                    'Noir': 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=600'
                },
                colors: [{name: 'Blanc', hex: '#fff'}, {name: 'Noir', hex: '#000'}],
                selectedSize: 'M',
                selectedColor: 'Blanc'
            }
        ],

        addToCart(product) {
            this.cart.push({
                ...product,
                cartId: Date.now(),
                finalImage: product.images[product.selectedColor],
                size: product.selectedSize,
                color: product.selectedColor
            });
            this.cartOpen = true;
        },
        removeFromCart(index) { this.cart.splice(index, 1); },
        totalPrice() { return this.cart.reduce((sum, item) => sum + item.price, 0); },
        toggleCart(state) { this.cartOpen = state; },
        goToCheckout() { this.page = 'checkout'; this.cartOpen = false; window.scrollTo(0,0); },
        processOrder() { 
            this.orderStep = 2; 
            setTimeout(() => { this.orderStep = 3; this.cart = []; }, 2500); 
        },
        submitDropForm() { 
            this.showPopup = true;
            this.formData.prenom = ''; 
            this.formData.email = '';
        }
    }));
});
