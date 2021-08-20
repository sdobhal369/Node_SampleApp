FROM node:9-slim
WORKDIR /Desktop/Temp
COPY package.json ./app
RUN npm install 
COPY . /Desktop
CMD ["npm","start"]
