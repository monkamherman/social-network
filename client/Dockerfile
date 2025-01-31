# Utiliser une image Node.js pour la construction
FROM node:20-alpine AS builder

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et installer les dépendances
COPY package*.json ./

# Utiliser un cache pour éviter de réinstaller les dépendances si elles n'ont pas changé
RUN yarn install --frozen-lockfile


# Copier le reste du code et créer le build
COPY . .
RUN yarn build

# Utiliser une image Nginx pour servir les fichiers
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
