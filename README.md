# Angular 2 RESTful Service

This project provides a simple look at getting started using Angular 2 
to call into a RESTful service. Simply clone the project or download and extract the .zip to get started. 

## Angular 2 Concepts Covered

* TypeScript version that relies on classes and modules
* Modules are loaded with System.js
* Using Custom Components
* Using the Http object for Ajax calls along with RxJS observables
* Working Service classes (such as for Ajax calls)
* Using Angular 2 databinding and built-in directives

## Software Requiremenets

* Node.js 4.0.0 or higher
* MongoDB 3.2 or higher

## Loading MongoDB Data

Load data into MongoDB by performing the following steps:

* Install MongoDB (https://docs.mongodb.org/manual/installation)
* Execute 'mongod' to start the MongoDB daemon if it's not already running
* Open a command window and navigate to the `angular2-restfulservice` directory 
* Execute 'mongo' to start the MongoDB shell
* Enter the following in the mongo shell to load the data seed file:
 * use customermanager
 * load("initMongoData.js")

## Running the Application

1. Run `npm install` to install app dependencies

1. Run `npm start` in a separate terminal window to compile the TypeScript and start the server

1. Browse to http://localhost:3000
