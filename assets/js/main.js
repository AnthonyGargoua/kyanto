document.addEventListener('alpine:init', () => {
    Alpine.data('shop', () => ({
        page: 'home',
        filter: 'all',
        cartOpen: false,
        showPopup: false,
        cart: [],
        sizes: ['S', 'M', 'L', 'XL'],
        
        categories: [
            { id: 'all', name: 'Toute la collection' },
            { id: 'tokyo', name: 'Collection Tokyo Night' },
            { id: 'cyber', name: 'Cyberpunk Edition' },
            { id: 'classic', name: 'Essentiels' }
        ],

        products: [
            {
                id: 1,
                name: "Hoodie 'Neo-Tokyo'",
                price: 85,
                category: 'tokyo',
                collectionName: 'Collection Tokyo Night',
                image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600',
                colors: [{name: 'Black', hex: '#000'}, {name: 'Red', hex: '#ff0000'}],
                selectedSize: 'M',
                selectedColor: 'Black'
            },
            {
                id: 2,
                name: "T-Shirt 'Kyanto Kanji'",
                price: 45,
                category: 'classic',
                collectionName: 'Essentiels',
                image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600',
                colors: [{name: 'White', hex: '#fff'}, {name: 'Black', hex: '#000'}],
                selectedSize: 'L',
                selectedColor: 'White'
            },
            {
                id: 3,
                name: "Cargo Pant 'Ghost'",
                price: 110,
                category: 'cyber',
                collectionName: 'Cyberpunk Edition',
                image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=600',
                colors: [{name: 'Grey', hex: '#444'}, {name: 'Black', hex: '#000'}],
                selectedSize: 'M',
                selectedColor: 'Black'
            }
        ],

        addToCart(product) {
            // On crée une copie unique de l'objet pour le panier
            const itemToAdd = {
                ...product,
                cartId: Date.now() + Math.random(),
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

        submitDropForm() {
            // Simulation d'envoi
            setTimeout(() => {
                this.showPopup = true;
            }, 500);
        }
    }));
});
