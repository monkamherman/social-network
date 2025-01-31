// src/server.ts
// Configurations de Middlewares
import express from 'express';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import { setupSwagger } from './swagger';
import morgan from 'morgan';
import { ONE_HUNDRED, SIXTY } from './core/constants';
import { logger } from 'env-var';
import log from './utils/logger';
import { envs } from './core/config/env';
import dotenv from 'dotenv'


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
		message: 'Trop de Requete à partir de cette adresse IP '
	})
);

app.use(morgan('combined', {
	stream: morganStream
}));
app.use("/", user)

// Charger les variables d'environnement
dotenv.config();

log.info('Port:', process.env.PORT);
log.info('MongoDB Host:', process.env.MONGO_HOST);

setupSwagger(app);
app.listen(envs.PORT, () => {
	log.info(`Server running on port http://localhost:${envs.PORT}/`);
	log.info(`Documentation  : http://localhost:${envs.PORT}/api-docs`);
});