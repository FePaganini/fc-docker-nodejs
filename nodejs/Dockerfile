FROM node

WORKDIR /usr/local/bin
RUN apt-get update && apt-get install
RUN apt-get install netcat -y
RUN apt-get install unzip
RUN wget https://github.com/eficode/wait-for/archive/refs/heads/master.zip
RUN unzip master.zip && rm master.zip
RUN cd wait-for-master && cp wait-for ./..
RUN rm -rf wait-for-master && chmod +x wait-for

WORKDIR /usr/src/app
COPY index.js .
RUN [-f package.json] || npm init -y
RUN npm install express --save
RUN npm install --save mysql2