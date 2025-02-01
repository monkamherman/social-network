// src/core/config/env.ts
// import { get } from 'env-var';
import { config } from './config';

// Log pour vérifier que les variables sont chargées
console.log("🔹 Variables d'environnement chargées :", config);
export const envs = config
// export const envs = {
//     PORT: get('PORT').required().asPortNumber(),
//     API_PREFIX: get('API_PREFIX').default('/api/v1').asString(),
//     NODE_ENV: get('NODE_ENV').default('development').asString(),
//     MONGO_INITDB_ROOT_USERNAME: get('MONGO_INITDB_ROOT_USERNAME').required().asString(),
//     MONGO_INITDB_ROOT_PASSWORD: get('MONGO_INITDB_ROOT_PASSWORD').required().asString(),
//     MONGO_DB_NAME: get('MONGO_DB_NAME').required().asString(),
//     MONGO_HOST: get('MONGO_HOST').default('localhost').asString(),
//     MONGO_PORT: get('MONGO_PORT').default('27017').asPortNumber(),
//     DATABASE_URL: get('DATABASE_URL').required().asString(),
//     EMAIL_ADDRESS: get('EMAIL_ADDRESS').required().asString(),
//     SECRET_PASSWORD: get('SECRET_PASSWORD').required().asString(),
// };
// Log pour vérifier que envs est correctement exporté
console.log("🔹 envs exporté :", envs);

// Chaîne de connexion MongoDB sécurisée
export const CONNECTION_STRING = `mongodb://${envs.MONGO_INITDB_ROOT_USERNAME}:${envs.MONGO_INITDB_ROOT_PASSWORD}@${envs.MONGO_HOST}:${envs.MONGO_PORT}/${envs.MONGO_DB_NAME}?authSource=admin`;
