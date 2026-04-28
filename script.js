document.addEventListener('alpine:init', () => {
    Alpine.data('shop', () => ({
        page: 'home',
        filter: 'all', // AJOUT : Pour le filtrage de la boutique
        cartOpen: false,
        cart: [],
        email: '',
        mailSubmitted: false,
        
        // Date cible : 1er Juin 2026
        dropDate: new Date("June 1, 2026 00:00:00").getTime(),
        countdown: { d: "00", h: "00", m: "00", s: "00" },

        // PRODUITS AVEC CATÉGORIES ET BADGES
        products: [
            { 
                id: 1, 
                name: "Hoodie Shinigami V1", 
                price: 65, 
                category: 'hoodie', 
                new: true, 
                image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800" 
            },
            { 
                id: 2, 
                name: "Cargo 'Tech-Kyoto'", 
                price: 85, 
                category: 'pant', 
                new: false, 
                image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800" 
            },
            { 
                id: 3, 
                name: "Kimono Black Mesh", 
                price: 120, 
                category: 'hoodie', 
                new: true, 
                image: "https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=800" 
            },
            { 
                id: 4, 
                name: "Tee Oversize 'Akira'", 
                price: 35, 
                category: 'tee', 
                new: false, 
                image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800" 
            }
        ],

        init() {
            this.updateCounter();
            setInterval(() => this.updateCounter(), 1000);
            
            // Système d'animation au scroll
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('aos-animate');
                    }
                });
            }, { threshold: 0.15 });

            this.$watch('page', () => {
                setTimeout(() => {
                    document.querySelectorAll('.aos-init').forEach(el => observer.observe(el));
                }, 100);
                window.scrollTo(0,0);
            });

            document.querySelectorAll('.aos-init').forEach(el => observer.observe(el));
        },

        updateCounter() {
            const now = new Date().getTime();
            const diff = this.dropDate - now;

            if (diff > 0) {
                this.countdown.d = Math.floor(diff / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
                this.countdown.h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
                this.countdown.m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
                this.countdown.s = Math.floor((diff % (1000 * 60)) / 1000).toString().padStart(2, '0');
            }
        },

        submitMail() {
            if (this.email.includes('@')) {
                this.mailSubmitted = true;
                setTimeout(() => {
                    this.email = '';
                    this.mailSubmitted = false;
                }, 5000);
            }
        },

        addToCart(product) {
            this.cart.push({...product, cartId: Date.now()});
            this.toggleCart(true);
        },

        removeFromCart(index) {
            this.cart.splice(index, 1);
        },

        toggleCart(status) {
            this.cartOpen = status;
            if (status) {
                document.body.classList.add('overflow-hidden');
            } else {
                document.body.classList.remove('overflow-hidden');
            }
        },

        totalPrice() {
            return this.cart.reduce((total, item) => total + item.price, 0);
        }
    }));
});
