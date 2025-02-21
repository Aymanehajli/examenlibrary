# Librairie CRUD Application - MERN Stack

## Contexte et Objectifs

Ce projet implémente une application CRUD pour la gestion d'une librairie. L'objectif est de permettre à un utilisateur de créer, lire, mettre à jour et supprimer des livres via une API. L'application utilise le stack MERN (MongoDB, Express, React, Node.js), avec Docker pour la conteneurisation.

---

## Stack Technologique

- **Backend** :  
  - Node.js
  - Express
  - MongoDB
  - CORS
- **Frontend** :  
  - React
  - react-router-dom
  - Bootstrap pour le design
- **Conteneurisation** :  
  - Docker (un Dockerfile dédié pour le frontend et un pour le backend)

---

## Endpoints de l'API

### `/api/books`

#### `GET`  
- **Description** : Récupérer la liste des livres.
- **Réponse** : Liste des livres en format JSON.
- **Exemple de réponse** :
  ```json
  [
    {
      "id": "1",
      "titre": "Le Petit Prince",
      "auteur": "Antoine de Saint-Exupéry",
      "isbn": "978-3-16-148410-0"
    },
    {
      "id": "2",
      "titre": "1984",
      "auteur": "George Orwell",
      "isbn": "978-0-452-28423-4"
    }
  ]
  ```

#### `POST`  
- **Description** : Ajouter un nouveau livre.
- **Corps de la requête** :  
  ```json
  {
    "titre": "Le Petit Prince",
    "auteur": "Antoine de Saint-Exupéry",
    "isbn": "978-3-16-148410-0"
  }
  ```
- **Réponse** : Le livre ajouté avec son identifiant unique.
- **Exemple de réponse** :
  ```json
  {
    "id": "3",
    "titre": "Le Petit Prince",
    "auteur": "Antoine de Saint-Exupéry",
    "isbn": "978-3-16-148410-0"
  }
  ```

### `/api/books/:id`

#### `GET`  
- **Description** : Récupérer les détails d'un livre spécifique.
- **Réponse** : Détails du livre en format JSON.
- **Exemple de réponse** :
  ```json
  {
    "id": "1",
    "titre": "Le Petit Prince",
    "auteur": "Antoine de Saint-Exupéry",
    "isbn": "978-3-16-148410-0"
  }
  ```

#### `PUT`  
- **Description** : Mettre à jour un livre existant.
- **Corps de la requête** :  
  ```json
  {
    "titre": "Le Petit Prince - Nouvelle Edition",
    "auteur": "Antoine de Saint-Exupéry",
    "isbn": "978-3-16-148410-0"
  }
  ```
- **Réponse** : Le livre mis à jour.
- **Exemple de réponse** :
  ```json
  {
    "id": "1",
    "titre": "Le Petit Prince - Nouvelle Edition",
    "auteur": "Antoine de Saint-Exupéry",
    "isbn": "978-3-16-148410-0"
  }
  ```

#### `DELETE`  
- **Description** : Supprimer un livre.
- **Réponse** : Message de confirmation de suppression.
- **Exemple de réponse** :
  ```json
  {
    "message": "Livre supprimé"
  }
  ```

### `/status`

#### `GET`  
- **Description** : Vérifier l'état du serveur.
- **Réponse** :  
  ```json
  {
    "message": "Server is running"
  }
  ```

---

## Modèle de Données

Un livre doit contenir les informations suivantes :
- **titre** : Le titre du livre (String)
- **auteur** : L'auteur du livre (String)
- **isbn** : L'ISBN du livre (String)

---

## Configuration et Déploiement

### Backend

1. Clonez le projet :
   ```bash
   git clone https://github.com/Aymanehajli/examenlibrary.git
   ```

2. Allez dans le répertoire du backend :
   ```bash
   cd backend
   ```

3. Installez les dépendances :
   ```bash
   npm install
   ```

4. Créez un fichier `.env` et ajoutez la variable de connexion MongoDB :
   ```env
   MONGO_URI=your_mongo_database_connection_string
   PORT=5000
   ```

5. Lancez le serveur backend :
   ```bash
   npm start
   ```

   Le serveur backend sera disponible sur `http://localhost:5000`.

### Frontend

1. Allez dans le répertoire du frontend :
   ```bash
   cd frontend
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Lancez le serveur frontend :
   ```bash
   npm run dev
   ```

   Le frontend sera disponible sur `http://localhost:5173`.

### Docker

#### Backend

1. Créez l'image Docker pour le backend :
   ```bash
   docker build -t backend .
   ```

2. Lancez le conteneur backend :
   ```bash
   docker run -p 5000:5000 backend
   ```

#### Frontend

1. Créez l'image Docker pour le frontend :
   ```bash
   docker build -t frontend .
   ```

2. Lancez le conteneur frontend :
   ```bash
   docker run -p 5173:5173 frontend
   ```

---

## Gestion des Erreurs

Les erreurs doivent être gérées avec les codes de réponse HTTP appropriés :
- **200 OK** : Opération réussie
- **201 Created** : Ressource créée avec succès
- **400 Bad Request** : Mauvaise requête (par exemple, données invalides)
- **404 Not Found** : Ressource non trouvée
- **500 Internal Server Error** : Erreur interne du serveur

---

## Documentation API

La documentation détaillée des points de terminaison (endpoints), des méthodes HTTP, des paramètres, et des codes de réponse est décrite ci-dessus. Assurez-vous que toutes les réponses sont formatées en JSON.

---

## Auteurs

- **Votre Nom**
- **Date de création du projet** : Février 2025

---

## Licence

Ce projet est sous licence MIT.
