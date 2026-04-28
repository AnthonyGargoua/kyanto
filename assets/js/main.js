document.addEventListener('alpine:init', () => {
    Alpine.data('shop', () => ({
        page: 'home',
        filter: 'all',
        cartOpen: false,
        showPopup: false,
        cart: [],
        sizes: ['S', 'M', 'L', 'XL'],
        
        // DÉFINITION DES UNIVERS
        universes: {
            all: { bg: 'bg-white', text: 'text-black', accent: 'border-red-600', title: 'NOS COLLECTIONS' },
            tokyo: { bg: 'bg-indigo-950', text: 'text-fuchsia-500', accent: 'border-fuchsia-500', title: 'TOKYO NIGHTS', sub: 'L’obscurité électrique.' },
            cyber: { bg: 'bg-zinc-900', text: 'text-yellow-400', accent: 'border-yellow-400', title: 'CYBER-PUNK', sub: 'High Tech, Low Life.' },
            zen: { bg: 'bg-stone-100', text: 'text-emerald-900', accent: 'border-emerald-800', title: 'ZEN MINIMAL', sub: 'Le calme avant la tempête.' }
        },

        products: [
            {
                id: 1,
                name: "Hoodie 'Neo-Tokyo'",
                price: 85,
                category: 'tokyo',
                collectionName: 'Night Edition',
                // Dictionnaire d'images par couleur
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
            },
            {
                id: 3,
                name: "Kimono 'Satori'",
                price: 120,
                category: 'zen',
                collectionName: 'Tradition',
                images: {
                    'Beige': 'https://images.unsplash.com/photo-1578681994506-b8f463449011?q=80&w=600',
                    'Vert': 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=600'
                },
                colors: [{name: 'Beige', hex: '#d6d3d1'}, {name: 'Vert', hex: '#064e3b'}],
                selectedSize: 'M',
                selectedColor: 'Beige'
            }
        ],

        addToCart(product) {
            const itemToAdd = {
                ...product,
                cartId: Date.now(),
                // On fige l'image correspondant à la couleur choisie au moment de l'ajout
                finalImage: product.images[product.selectedColor]
            };
            this.cart.push(itemToAdd);
            this.cartOpen = true;
        },

        totalPrice() { return this.cart.reduce((sum, item) => sum + item.price, 0); },
        toggleCart(state) { this.cartOpen = state; },
        submitDropForm() { this.showPopup = true; },
        removeFromCart(index) { this.cart.splice(index, 1); }
    }));
});
