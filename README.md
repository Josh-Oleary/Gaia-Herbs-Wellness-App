# Gaia Wellness Application
## Install
<b>Prerequisites</b>
- Node: 16.14.0
  - `nvm install 16.14.0`
  - `nvm use 16.14.0`
- Docker 
- Env files
  - These can be found here `I:\it_operations\it_web\secrets`<br>

Clone repo locally<br>
`git clone https://github.com/Gaia-Herbs/wellness-app.git`

Install dependencies in `/server` and `/client`<br>

- `cd server`<br>
- `npm install`

- `cd ../client`<br>
- `npm install`

Add .env files to `/server` and `client`<br>
- Files will be named <project>.<directory>.env<br>
- Place files in correct directory and rename to `.env`<br>
  
Install global dependencies<br>

- `cd ../`<br>
- `npm install`

You are now ready for local development. 

## Frontend <br>

Tech: React<br>
Port: 3000
<br>

Navigate to the `/client` directory<br>

Run `npm start`

## Backend <br>

Tech: Node, Express, MongoDB<br>
Port: 
  - Node: 5000
  - MongoDB: 27017
<br>
Navigate to the `/server` directory<br>
Run `npm run dev`<br>
This starts a development server with Nodemon

## Docker
Tech: Docker

This project runs on a docker container.

To run the project, navigate to the base directory<br>
Run `docker compose up`

# Software Specification
### Purpose
The purpose of this project is to build an updated wellness application.

### Project Scope
The purpose of the wellness application is to give all users the ability to log and track wellness points without requiring them to be in the office or on a VPN. The upgraded application will use a non relational database hosted on Azure. There will be an emphasis on ease of use for administrators while also giving them more dynamic and transparent control of of the application settings and reporting feature. We have to track wellness points for all employees in the company, while providing some employees with admin permissions that allow them to create, read and update activitites, as well as create reports that are available in the UI and as a downloadable excel sheet. 

### Overall Description

This application will benefit ALL Gaia employee's, both from an Administration a basic user perspective. The primary users will be all Gaian's. The secondary users will be those with Admin status.
  
We are assuming all users will have access to the internet and will have a Gaian email address <user.name>@gaiaherbs.com.

This project is being built from scratch with the new Gaian tech stack. The application will consist of 3 high level layers: UI, Server, Database.

The UI will be built with React and either Bootstrap or Material UI. This is up for debate, if you have a strong preference, please speak up!
  
The Server logic and API's are being built on Node and Express. 
  
The Database is going to formatted as a MongoDB that will be hosted on Azure Cosmos.
  
The 3 layers run in a Docker container. This project will help us get familiar with distributed systems and how we can use a Serverless approach to our new tech stack. We will need to create a proper CI/CD pipeline with tests. We should have a goal of creating a smooth and continous integration and deployment to keep our environment clean and efficient.
  
### Functional Requirements

The application will need to have some sort of user auth set up. Once a user is authed, they should see the landing page that contains a Dashboard, information about the wellness activities and an option to claim a wellness activity. The User object will contain a points object. This object will contain data needed to preform calculations to display the user's personal information on their Dashboard and Claim form. We will need to calculate the users total points for the current time period, the goal number for the current time period, and how far away the user is from their goal.
  
On the claim form, we will need to display a list of activities that are active in the current time period. If an activity active: false, then hide the activity. We will need to calculate how many times the user has claimed a given activity in the current time period. If they have have claimed the activity the max number of times. Then the activity should be set to inactive or disabled.
  
Admins will have an additional section they can access to perform administrative actions. These will include viewing a current breakdown of all users along with an option to download the data in an excel sheet. I would like to look into methods for automatically creating and downloading the report at the end of the current time period. 

Admins will need to be able to create and edit activities. They should also have the ability to set parameters for the time period, quarterly, semi-annualy etc. 
  
Admins will need to be able to create and edit users inside of the wellness application. 
