# CRUD Ecommerce avec ReactJS et Material-React-Table

## Description
Ce projet est une application frontend développée en ReactJS pour gérer un système de commerce électronique avec des fonctionnalités CRUD (Créer, Lire, Mettre à jour et Supprimer) pour les catégories, sous-catégories, et articles. Il offre une interface moderne et responsive basée sur des outils et bibliothèques populaires.

## Fonctionnalités principales
- **Gestion des catégories, sous-catégories, et articles** :
  - Afficher les listes d'éléments dans des tableaux interactifs.
  - Ajouter de nouvelles entrées.
  - Modifier les données existantes.
  - Supprimer des éléments avec confirmation.
- **Navigation fluide** grâce à React Router DOM.
- **Appels API sécurisés** avec Axios.
- **Design moderne et responsive** grâce à Bootstrap et Material UI.

## Technologies utilisées
- **ReactJS** pour le frontend.
- **Material-React-Table** pour les tableaux interactifs.
- **Axios** pour les requêtes HTTP.
- **React Router DOM** pour la gestion des routes.
- **Bootstrap** et **Font Awesome** pour le style et l'interface utilisateur.

## Installation
1. Clonez ce dépôt en utilisant la commande suivante :
2. Accédez au répertoire du projet :
3. Installez les dépendances nécessaires :
4. Lancez l'application en mode développement 

   ```bash
   git clone https://github.com/mohamedfeki414/crud-ecommerce.git
   cd crud-ecommerce
   npm install
## Structure du projet

src/
├── components/
│   ├── articles/
│   │   ├── Listarticles.jsx
│   │   ├── Insertarticle.jsx
│   │   ├── Editarticle.jsx
│   │   └── Viewarticle.jsx
│   ├── categories/
│   │   ├── Listcategories.jsx
│   │   ├── Insertcategorie.jsx
│   │   ├── Editcategorie.jsx
│   │   └── Viewcategorie.jsx
│   ├── scategories/
│   │   ├── Listscategories.jsx
│   │   ├── Insertscategorie.jsx
│   │   ├── Editscategorie.jsx
│   │   └── Viewscategorie.jsx
│   └── Menu.jsx
├── App.jsx
├── main.jsx
└── index.html   
## Utilisation
Accédez à l'application via http://localhost:3000.
Utilisez le menu pour accéder aux fonctionnalités de gestion des catégories, sous-catégories, et articles.
Manipulez les données directement via l'interface utilisateur (ajout, modification, suppression).
API Backend
L'application nécessite un backend REST API pour fonctionner. Par défaut, les appels sont effectués à http://localhost:3001/api.

## Auteur
Mohamed Feki - Profil GitHub
## Licence
Ce projet est sous licence MIT. Consultez le fichier LICENSE dans le dépôt pour plus d'informations.
