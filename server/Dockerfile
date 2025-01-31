# Utiliser une image Node.js optimisée
FROM node:20-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json (ou yarn.lock)
COPY package*.json ./

# Utiliser un cache pour éviter de réinstaller les dépendances si elles n'ont pas changé
RUN yarn install --frozen-lockfile


# Copier le reste du code
COPY . .

# Exposer le port de l'API
EXPOSE 5000

# Démarrer le serveur
CMD ["yarn", "run", "dev"]
