# Astro Base - Boilerplate pour sites web Astro

Ce projet sert de base (boilerplate) pour tous vos projets de sites web Astro. Il inclut une configuration moderne avec les meilleures pratiques.

## 🏗️ Stack Technique

### Framework & Core
- **Astro 6.4+** - Framework web moderne pour sites statiques et hybrides
- **TypeScript** - Configuration stricte (extends `astro/tsconfigs/strict`)
- **Node.js >= 22.12.0**

### Styling & UI
- **Tailwind CSS 4.3+** - Via plugin Vite (`@tailwindcss/vite`)
- **@tailwindcss/typography** - Plugin typographie pour le contenu riche

### CMS & Contenu
- **Storyblok** - Headless CMS avec intégration Astro native
  - `@storyblok/astro` - Intégration officielle
  - `storyblok-rich-text-astro-renderer` - Rendu du rich text

### Animations & Interactions
- **GSAP 3.15+** - Animations professionnelles
- **Lenis 1.3+** - Smooth scrolling moderne

### SEO & Analytics
- **@astrojs/sitemap** - Génération automatique du sitemap
- **@vercel/analytics** - Analytics respectueux de la vie privée
- **Méta tags Open Graph / Twitter** - Configurés dans `Head.astro`
- **Schema.org JSON-LD** - Support données structurées

### Déploiement
- **@astrojs/vercel** - Adaptateur pour déploiement Vercel (edge/SSR)
- **astro-favicons** - Génération automatique des favicons

### Optimisations
- **Overrides** : `path-to-regexp@8`, `esbuild@0.28` (corrections de vulnérabilités)

---

## 📁 Structure du Projet

```
astro-base/
├── public/                 # Assets statiques (favicons, images)
├── src/
│   ├── layouts/
│   │   ├── Layout.astro    # Layout principal avec Lenis + GSAP
│   │   ├── Head.astro      # SEO, méta tags, Analytics
│   │   ├── Navigation.astro # Navigation (à compléter)
│   │   ├── Footer.astro    # Footer (à compléter)
│   │   └── SkipLink.astro  # Accessibilité - lien "Aller au contenu"
│   ├── pages/
│   │   └── [...slug].astro # Page dynamique Storyblok (catch-all)
│   └── styles/
│       └── global.css      # Import Tailwind + Typography
├── .env                    # Variables d'environnement (ne pas commiter)
├── astro.config.mjs        # Config Astro (à créer)
├── tailwind.config.mjs     # Config Tailwind (à créer)
├── tsconfig.json           # Config TypeScript strict
└── package.json
```

---

## 🚀 Commandes

| Commande | Description |
|----------|-------------|
| `npm install` | Installe les dépendances |
| `npm run dev` | Lance le serveur de dev sur `localhost:4321` |
| `npm run build` | Build de production dans `./dist/` |
| `npm run preview` | Prévisualise le build localement |
| `npm run astro ...` | CLI Astro (ex: `astro add`, `astro check`) |

---

## ⚙️ Configuration Requise

### Variables d'environnement (`.env`)
```env
# Mode de rendu
IS_PREVIEW=true

# Storyblok (REMPLACER par vos valeurs)
STORYBLOK_DELIVERY_API_TOKEN=votre_token
STORYBLOK_SPACE_ID=votre_space_id
```

### Fichiers de config à créer
- `astro.config.mjs` - Configuration Astro (integrations, adapter Vercel, sitemap)
- `tailwind.config.mjs` - Configuration Tailwind (thème, plugins)

---

## ✅ TODO - Checklist pour nouveau projet

### Configuration initiale
- [ ] Créer `astro.config.mjs` avec :
  - [ ] Adapter Vercel (`@astrojs/vercel`)
  - [ ] Intégration Sitemap (`@astrojs/sitemap`)
  - [ ] Intégration Storyblok (`@storyblok/astro`)
  - [ ] Intégration Favicons (`astro-favicons`)
  - [ ] Config Vite pour Tailwind (`@tailwindcss/vite`)
- [ ] Créer `tailwind.config.mjs` avec votre design system
- [ ] Configurer les variables d'environnement (`.env` local, Vercel dashboard)

### Layout & Composants
- [ ] Implémenter `Navigation.astro` (menu, logo, responsive)
- [ ] Implémenter `Footer.astro` (liens, copyright, réseaux sociaux)
- [ ] Personnaliser `Layout.astro` si nécessaire
- [ ] Ajouter composants UI réutilisables dans `src/components/`

### Storyblok
- [ ] Créer les composants Storyblok correspondants aux blocs du CMS
- [ ] Configurer le schéma de données (types TypeScript pour les blocs)
- [ ] Tester le mode Preview (Visual Editor)

### SEO & Performance
- [ ] Vérifier les méta tags par défaut dans `Head.astro`
- [ ] Configurer `robots.txt` (via sitemap ou fichier public)
- [ ] Optimiser les images (formats, tailles, lazy loading)
- [ ] Tester Lighthouse / Core Web Vitals

### Analytics & Tracking
- [ ] Configurer Vercel Analytics (déjà intégré)
- [ ] Ajouter consentement cookies si nécessaire (RGPD)
- [ ] Configurer événements personnalisés si besoin

### Déploiement Vercel
- [ ] Connecter le repo à Vercel
- [ ] Configurer les variables d'environnement sur Vercel
- [ ] Vérifier les headers de cache (static vs SSR)
- [ ] Configurer le domaine personnalisé

### Accessibilité (a11y)
- [ ] Vérifier SkipLink fonctionne
- [ ] Tester navigation clavier
- [ ] Contraste couleurs (Tailwind)
- [ ] ARIA labels sur éléments interactifs

### Optionnel - Selon besoins
- [ ] Blog / Collection de contenus (Astro Content Collections)
- [ ] Formulaires (Netlify Forms, Vercel Forms, ou API custom)
- [ ] Recherche (Algolia, Meilisearch, ou Astro DB)
- [ ] Internationalisation (i18n)
- [ ] PWA (Service Worker, Manifest)
- [ ] Tests (Playwright, Vitest)

---

## 📝 Notes Importantes

1. **Storyblok Preview** : `IS_PREVIEW=true` active le mode draft + SSR pour l'éditeur visuel
2. **Lenis + GSAP** : Initialisés globalement dans `Layout.astro` - accessibles via `window.lenis`
3. **Catch-all route** : `[...slug].astro` gère toutes les pages Storyblok
4. **Langue par défaut** : Français (`lang="fr"`, `og:locale="fr_FR"`)
5. **Ne pas commiter** : `.env` (tokens), `dist/`, `node_modules/`

---

## 🔗 Ressources Utiles

- [Astro Docs](https://docs.astro.build)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [Storyblok Astro Guide](https://www.storyblok.com/tech/astro)
- [GSAP Docs](https://gsap.com/docs/)
- [Lenis Docs](https://lenis.studiofreight.com/)
- [Vercel Analytics](https://vercel.com/docs/analytics)