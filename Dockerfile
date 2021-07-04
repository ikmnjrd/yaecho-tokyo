FROM node:lts-slim
WORKDIR /usr/src/app
RUN apt update && \
    npm install -g firebase-tools