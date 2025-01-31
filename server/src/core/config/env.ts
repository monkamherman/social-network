import dotenvSafe from 'dotenv-safe';
import { get } from 'env-var';

// Chargement des variables d'environnement
dotenvSafe.config({
	allowEmptyValues: false, // Empêcher les valeurs vides
	example: '.env.example', // Assurer la cohérence des variables
});

export const envs = {
	PORT: get('PORT').required().asPortNumber(),
	API_PREFIX: get('API_PREFIX').default('/api/v1').asString(),
	NODE_ENV: get('NODE_ENV').default('development').asString(),
	MONGO_INITDB_ROOT_USERNAME: get('MONGO_INITDB_ROOT_USERNAME').required().asString(),
	MONGO_INITDB_ROOT_PASSWORD: get('MONGO_INITDB_ROOT_PASSWORD').required().asString(),
	MONGO_DB_NAME: get('MONGO_DB_NAME').required().asString(),
	MONGO_HOST: get('MONGO_HOST').default('localhost').asString(),
	MONGO_PORT: get('MONGO_PORT').default('27017').asPortNumber(),

	// Variables sensibles (Ne pas coder en dur)
	EMAIL_ADDRESS: get('EMAIL_ADDRESS').required().asString(),
	SECRET_PASSWORD: get('SECRET_PASSWORD').required().asString(),
};

// Chaîne de connexion MongoDB sécurisée
export const CONNECTION_STRING = `mongodb://${envs.MONGO_INITDB_ROOT_USERNAME}:${envs.MONGO_INITDB_ROOT_PASSWORD}@${envs.MONGO_HOST}:${envs.MONGO_PORT}/${envs.MONGO_DB_NAME}?authSource=admin`;
