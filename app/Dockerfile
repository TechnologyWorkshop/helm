# Dockerfile
FROM node:14

# Install kubectl
RUN apt-get update && \
    apt-get install -y apt-transport-https gnupg2 curl && \
    curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl" && \
    chmod +x kubectl && \
    mv kubectl /usr/local/bin/

WORKDIR /app

# Voeg specifieke bestanden toe aan de image
COPY package*.json ./
COPY app.js ./
COPY Dockerfile ./

# Voeg de Helm-chart toe
COPY * ./

# Installeer dependencies
RUN npm install

# Open poort 3000
EXPOSE 3000

# Start de applicatie
CMD ["node", "app.js"]