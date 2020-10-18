FROM node:latest

WORKDIR /src

# Install dependencies
COPY package.json .
RUN yarn install 

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]