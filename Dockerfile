FROM node:14-alpine
ENV NODE_ENV=production 
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent  && npm install react-router-dom@5 && npm install styled-components
RUN npx json-server --watch /usr/src/app/data/db.json --port 8000 &
COPY . .
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]