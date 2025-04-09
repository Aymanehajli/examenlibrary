FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Remplace cette URL dans ton code par la variable d'env : process.env.MONGODB_URI
EXPOSE 80

CMD ["npm", "start"]
