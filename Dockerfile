#This is a Dockerfile default configuration, You can change as much as you need 

FROM node:16.13.2
RUN mkdir -p /home/app/node_modules && chown -R node:node /home/app
WORKDIR /home/app

USER node
COPY --chown=node:node . .

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "run", "venan"]