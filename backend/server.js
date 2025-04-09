import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bookRoutes from './routes/bookRoutes.js';
import { connectDB } from './config/db.js';
import cors from 'cors';

// Définir app avant d'utiliser app.use()
const app = express(); // ✅

dotenv.config();

// Connexion à la base de données
connectDB();

// Middleware CORS
app.use(cors({
    origin: '*',  // Permet toutes les origines
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Permet des méthodes spécifiques
    allowedHeaders: ['Content-Type', 'Authorization']  // Autorise certains headers
}));

// Middleware pour parser le JSON
app.use(express.json());

// Routes
app.use('/api', bookRoutes); // Préfixe les routes par /api

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connecté'))
    .catch(err => console.error('Erreur de connexion MongoDB:', err));

// Route de test
app.get("/", (req, res) => {
    res.send("Server is ready");
});

// Lancer le serveur
app.listen(8080, () => {
    console.log('Server started at http://localhost:8080');
});
