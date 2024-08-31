#This is a Dockerfile default configuration, You can change as much as you need 

FROM node:16.13.2
RUN mkdir -p /home/app/node_modules && chown -R node:node /home/app
WORKDIR /home/app

USER node
COPY --chown=node:node . .

COPY package.json .

RUN npm install

COPY . .
# Gera o Prisma Client
RUN npx prisma generate

# Expõe a porta em que sua aplicação vai rodar
EXPOSE 3001

CMD ["npm", "start"]