FROM node:slim
WORKDIR /node_server
COPY ./package*.json ./
RUN npm install
COPY . .
EXPOSE 5000 
CMD [ "npm", "run", "dev" ]