FROM node:14

# Create app directory
WORKDIR /usr/src/app

RUN npm i -g concurrently
RUN npm i -g auto-install
RUN npm i -g nodemon
RUN npm i -g sass

RUN chown -R 1000 /usr/src/app

USER 1000
EXPOSE 3000 6006
