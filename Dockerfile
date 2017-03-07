FROM node:6.10.0

# Create app directory
RUN mkdir -p /tech-app

WORKDIR /tech-app

# Install app dependencies
RUN npm install -g nodemon

# Bundle app source
COPY . /tech-app/

WORKDIR /tech-app/

CMD ["nodemon", "-L", "-e", "ts,js,css,html,png,gif", "server.js"]

EXPOSE 3000