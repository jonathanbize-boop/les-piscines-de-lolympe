# Les Piscines de l'Olympe — Site web

Site vitrine multipage de **Les Piscines de l'Olympe**, pisciniste à Montélimar (Drôme · Ardèche · Vaucluse) : construction de piscines coque et béton, rénovation, entretien, couverture, spa et aménagement paysager.

## Stack
Site statique — HTML5, CSS3, JavaScript vanilla. Aucune dépendance, aucun build.

- Typographie : **Sora** (titres) + **Manrope** (texte) via Google Fonts
- Design responsive, accessible, optimisé SEO (métadonnées, JSON-LD LocalBusiness, `sitemap.xml`, `robots.txt`)
- Images en lazy-loading

## Structure
- `index.html` — Accueil
- `la-societe.html`, `activites.html`, `piscines-coque.html`, `piscines-beton.html`, `renovation.html`, `entretien.html`, `couverture.html`, `piscines-naturelles.html`, `spa.html`, `le-magasin.html`, `amenagement-paysager.html`, `nos-realisations.html`, `contact.html`
- `assets/` — CSS, JS, images

## Développement local
```bash
npx serve .
```

## Déploiement
Déployé sur Vercel (site statique, zéro configuration).

---
© Les Piscines de l'Olympe — ZA du Meyrol, 26200 Montélimar · 04 75 90 23 18
