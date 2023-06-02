FROM node

WORKDIR /usr/src/app

COPY index.js .

RUN [-f package.json] || npm init -y
RUN npm install express --save
RUN npm install --save mysql2

EXPOSE 3000

CMD ["node", "index.js"]