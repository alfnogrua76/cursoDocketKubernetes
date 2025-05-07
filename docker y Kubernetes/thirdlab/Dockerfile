 FROM node:latest
 RUN useradd -m nonrootuser
 USER nonrootuser
 WORKDIR /usr/src/app
 COPY package*.json ./
 RUN npm install
 COPY . .
 EXPOSE 3000
 CMD ["node", "index.js"]