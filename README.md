# Angular 2 RESTful Service Example

This project provides a simple look at getting started using Angular 2 
to call into a RESTful service. Simply clone the project or download and extract the .zip to get started. 

## Angular 2 Concepts Covered

* Using TypeScript classes and modules
* Modules are loaded with System.js
* Using Custom Components
* Using the Http object for Ajax calls along with RxJS observables
* Performing GET and PUT requests to the server
* Working with Angular 2 service classes for Ajax calls
* Using Angular 2 databinding and built-in directives

## Software Requirements To Run Locally (there's a Docker option below as well)

* Node.js 4.0.0 or higher
* MongoDB 3.2 or higher

### Loading MongoDB Data

Load data into MongoDB by performing the following steps:

* Install MongoDB (https://docs.mongodb.org/manual/installation) on your machine
* Execute 'mongod' to start the MongoDB daemon if it's not already running
* Open a command window and navigate to the `angular2-restfulservice` directory 
* Run `node lib/dbSeeder.js` to insert the sample data (exit with ctrl + c)

### Running the Application Locally

1. Open `config/config.development.json` and change the host from `mongodb` to `localhost`

1. Install supervisor: `npm install supervisor -g`

1. Run `npm install` to install app dependencies

1. Run `npm start` to compile the TypeScript and start the server

1. Browse to http://localhost:3000

## Running the Application with Docker

1. Run `npm run tsc:w` in a command window to compile TypeScript to JavaScript locally (leave the window running). This is only needed when in "dev" mode.

1. Install Docker Toolbox (http://docker.com/toolbox)

1. Start the Docker QuickStart Terminal

1. Navigate to this application's root folder in the terminal window

1. Run `docker-compose build` to build the images

1. Run `docker-compose up` to run the containers

1. Navigate to http://192.168.99.100:3000 in a browser

1. Live long and prosper

Note: To run the "production" build follow the instructions in docker-compose.production.yml. The local files are compied into
the image with this mode so no need to have the tsc:w task running unless you're going to continue local development.
