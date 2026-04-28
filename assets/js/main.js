document.addEventListener('alpine:init', () => {
    Alpine.data('shop', () => ({
        // ÉTATS DE BASE
        page: 'home',
        filter: 'all',
        cartOpen: false,
        showPopup: false,
        cart: [],
        sizes: ['S', 'M', 'L', 'XL'],
        
        // LOGIQUE CHECKOUT
        shipping: 5.90,
        orderStep: 1, 
        formData: {
            prenom: '',
            nom: '',
            adresse: '',
            ville: '',
            cp: ''
        },

        // DÉFINITION DES UNIVERS
        universes: {
            all: { bg: 'bg-white', text: 'text-black', accent: 'border-red-600', title: 'NOS COLLECTIONS', sub: 'Le Multivers Kyanto.' },
            tokyo: { bg: 'bg-indigo-950', text: 'text-fuchsia-500', accent: 'border-fuchsia-500', title: 'TOKYO NIGHTS', sub: 'L’obscurité électrique.' },
            cyber: { bg: 'bg-zinc-900', text: 'text-yellow-400', accent: 'border-yellow-400', title: 'CYBER-PUNK', sub: 'High Tech, Low Life.' },
            zen: { bg: 'bg-stone-100', text: 'text-emerald-900', accent: 'border-emerald-800', title: 'ZEN MINIMAL', sub: 'Le calme avant la tempête.' }
        },

        // BASE DE DONNÉES PRODUITS
        products: [
            {
                id: 1,
                name: "Hoodie 'Neo-Tokyo'",
                price: 85,
                category: 'tokyo',
                collectionName: 'Night Edition',
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
                collectionName: 'Hardware',
                images: {
                    'Blanc': 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600',
                    'Jaune': 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=600'
                },
                colors: [{name: 'Blanc', hex: '#fff'}, {name: 'Jaune', hex: '#facc15'}],
                selectedSize: 'L',
                selectedColor: 'Blanc'
            }
        ],

        // FONCTIONS DU PANIER
        addToCart(product) {
            const itemToAdd = {
                ...product,
                cartId: Date.now() + Math.random(),
                finalImage: product.images[product.selectedColor],
                selectedSize: product.selectedSize,
                selectedColor: product.selectedColor
            };
            this.cart.push(itemToAdd);
            this.cartOpen = true;
        },

        removeFromCart(index) {
            this.cart.splice(index, 1);
        },

        totalPrice() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        },

        toggleCart(state) {
            this.cartOpen = state;
        },

        // FONCTIONS CHECKOUT & DROP
        goToCheckout() {
            if(this.cart.length > 0) {
                this.page = 'checkout';
                this.cartOpen = false;
                window.scrollTo(0,0);
            }
        },

        processOrder() {
            this.orderStep = 2;
            setTimeout(() => {
                this.orderStep = 3;
                this.cart = [];
            }, 2500);
        },

        submitDropForm() {
            this.showPopup = true;
        }
    }));
});
