// src/server.ts
import express from 'express';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import { setupSwagger } from './swagger';
import morgan from 'morgan';
import { ONE_HUNDRED, SIXTY } from './core/constants';
import { logger } from 'env-var';
import log from './utils/logger';
import { envs } from './core/config/env'; // Importation correcte de envs

// Créer un stream pour Morgan avec niveau HTTP spécifique
const morganStream = {
    write: (message: string) => {
        logger('http', message.trim()); // Utilise le format correct pour le logger
    }
};

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

import user from './routes/route';
app.use(
    rateLimit({
        max: ONE_HUNDRED,
        windowMs: SIXTY,
        message: 'Trop de Requête à partir de cette adresse IP'
    })
);

app.use(morgan('combined', {
    stream: morganStream
}));
app.use("/", user);
app.get('/test', (req, res) => {
	res.status(200).json({ message: 'Le serveur fonctionne correctement !' });
	
});

// Log des variables d'environnement pour débogage
console.log('Port:', envs.PORT);
console.log('MongoDB Host:', envs.MONGO_HOST);

setupSwagger(app);

const PORT = envs.PORT;

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${envs.PORT}/`);
    console.log(`Documentation  : http://localhost:${envs.PORT}/api-docs`);
});