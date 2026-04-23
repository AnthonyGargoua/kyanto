document.addEventListener('alpine:init', () => {
    Alpine.data('shop', () => ({
        page: 'home',
        cartOpen: false,
        mobileMenu: false,
        cart: [],
        email: '',
        mailSubmitted: false,
        dropDate: new Date(2026, 11, 25, 20, 0, 0).getTime(), 
        countdown: { d: "00", h: "00", m: "00", s: "00" },

        init() {
            this.updateCounter();
            setInterval(() => this.updateCounter(), 1000);
            this.initCursor();
            this.initAOS();
            this.injectInkFilter();
            this.initInkFX();
        },

        // Injection du filtre SVG de distorsion (Dripping Effect)
        injectInkFilter() {
            const svg = `
                <svg style="position: absolute; width: 0; height: 0;" aria-hidden="true">
                    <filter id="ink-dripping">
                        <feTurbulence type="fractalNoise" baseFrequency="0.01 0.15" numOctaves="2" stitchTiles="stitch" result="noise" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="40" xChannelSelector="R" yChannelSelector="G" />
                    </filter>
                </svg>
            `;
            document.body.insertAdjacentHTML('beforeend', svg);
        },

        // Applique la classe ink-wrapper aux photos automatiquement
        initInkFX() {
            // On cible les images dans les cartes produits et les manifesto
            const images = document.querySelectorAll('.product-card img, section img');
            images.forEach(img => {
                if(!img.parentElement.classList.contains('ink-wrapper')) {
                    img.parentElement.classList.add('ink-wrapper');
                }
            });
        },

        initCursor() {
            const cursor = document.createElement('div');
            cursor.id = 'cursor';
            document.body.appendChild(cursor);

            window.addEventListener('mousemove', (e) => {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            });

            // Interaction curseur sur éléments cliquables
            const targets = document.querySelectorAll('button, a, .ink-wrapper, .cursor-pointer');
            targets.forEach(t => {
                t.addEventListener('mouseenter', () => cursor.style.transform = 'scale(4)');
                t.addEventListener('mouseleave', () => cursor.style.transform = 'scale(1)');
            });
        },

        initAOS() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('aos-animate');
                    }
                });
            }, { threshold: 0.15 });

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

        products: [
            { id: 1, name: "Hoodie Shinigami V1", price: 65, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800" },
            { id: 2, name: "Cargo 'Tech-Kyoto'", price: 85, image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800" },
            { id: 3, name: "Kimono Black Mesh", price: 120, image: "https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=800" },
            { id: 4, name: "Tee Oversize 'Akira'", price: 35, image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800" },
            { id: 5, name: "Veste Sukajan Tiger", price: 145, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800" },
            { id: 6, name: "Cap Kanji Red", price: 30, image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800" },
            { id: 7, name: "Chemise Sumi-e", price: 45, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800" },
            { id: 8, name: "Pantalon Dark Zen", price: 70, image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800" }
        ],

        addToCart(product) {
            this.cart.push(product);
            this.cartOpen = true;
        },

        removeFromCart(index) {
            this.cart.splice(index, 1);
        },

        totalPrice() {
            return this.cart.reduce((total, item) => total + item.price, 0);
        },

        submitMail() {
            if (this.email.includes('@')) this.mailSubmitted = true;
        }
    }))
});
