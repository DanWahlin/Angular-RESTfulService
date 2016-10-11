FROM node:latest

MAINTAINER Dan Wahlin

ENV CONTAINER_PATH /var/www/angular2restfulservice

WORKDIR   $CONTAINER_PATH

RUN npm install nodemon -g

EXPOSE 3000

ENTRYPOINT ["nodemon", "server.js"]


# Build: docker build -f node.dockerfile -t danwahlin/node .

# Option 1
# Start MongoDB and Node (link Node to MongoDB container with legacy linking)
 
# docker run -d --name mongodb mongo
# docker run -d -p 3000:3000 --link mongodb --name nodeapp danwahlin/node

# Option 2: Create a custom bridge network and add containers into it

# docker network create --driver bridge isolated_network
# docker run -d --net=isolated_network --name mongodb mongo
# docker run -d --net=isolated_network --name nodeapp -p 3000:3000 danwahlin/node

# Option 3: Use Docker Compose

# docker-compose build
# docker-compose up

# Seed the database with sample database
# Run: docker exec nodeapp node lib/dbSeeder.js