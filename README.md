# 🎌 KYANTO | Streetwear Clan

![Version](https://img.shields.io/badge/version-1.0.0-red)
![TailwindCSS](https://img.shields.io/badge/Style-TailwindCSS-06B6D4)
![AlpineJS](https://img.shields.io/badge/Framework-AlpineJS-77C1D2)

**KYANTO** est une boutique de streetwear conceptuelle alliant esthétique japonaise moderne et style urbain brut. Le projet repose sur une expérience utilisateur fluide (Single Page Application) avec une gestion d'univers visuels dynamiques.

> "Deux identités, une seule direction."

---

## 🚀 Fonctionnalités

- **Navigation SPA (Single Page Application) :** Transition instantanée entre l'accueil, la boutique et le système de drop sans rechargement de page.
- **Univers Dynamiques :** Basculez entre les thèmes *Tokyo Nights*, *Cyber-Punk* et *Zen Minimal*. Chaque univers modifie l'identité visuelle (couleurs, accents) en temps réel.
- **Expérience Mobile-First :** Menu burger optimisé, grilles adaptatives et interface tactile fluide.
- **Système de Panier Complet :** 
  - Sélection des couleurs et des tailles.
  - Panier latéral persistant.
  - Calcul automatique des totaux.
- **Tunnel d'Achat :** Simulation de checkout avec validation de commande animée.
- **Système de Drop :** Formulaire de capture d'emails pour les lancements limités.

---

## 🛠️ Stack Technique

- **Frontend :** HTML5 / Tailwind CSS (Styling utilitaire)
- **Logique :** [Alpine.js](https://alpinejs.dev/) (Framework JavaScript léger pour la réactivité)
- **Animations :** [Animate.css](https://animate.style/)
- **Polices :** Inter (via Google Fonts)

---

## 📂 Structure du Projet
```text
kyanto-boutique/
├── index.html          # Structure principale et templates Alpine.js
├── assets/
│   ├── js/
│   │   └── main.js     # Logique métier, catalogue produits et gestion d'état
│   └── css/            # (Optionnel) Styles personnalisés supplémentaires
└── README.md           # Documentation du projet
