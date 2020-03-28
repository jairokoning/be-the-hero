<h1 align="center">
<br>
  <img src="https://svgshare.com/i/JXv.svg" alt="TinDev" width="120">
<br>
<br>
Be The Hero
</h1>

<p align="justify"><strong>Be The Hero</strong> is an application that was developed during the week OmniStack 11 promoted by <a href="https://rocketseat.com.br">Rocketseat</a> , with the objective of connecting people who are willing to help financially to NGOs (Non-governmental organizations) that care and treat animals. The Web system allows NGOs to register cases of animals that have a problem and need financial assistance to carry out the treatment. People who would like to help can use the mobile app to choose a case and contact the NGOs by e-mail or whatsapp.</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>  
</p>
<p align="center">
	<img src="https://img.shields.io/badge/Version-%200.9.0%20-green">
</p>

<div align="center">
  <img src="https://raw.githubusercontent.com/jairokoning/be-the-hero/master/frontend/src/assets/web.gif" alt="demo-web" height="400" width="800">
  <img src="https://raw.githubusercontent.com/jairokoning/be-the-hero/master/frontend/src/assets/mobile.gif" alt="demo-mobile" height="400">
</div>

<hr />

## Features

This app features all the latest tools and practices in web and mobile development!

- **Back-end**
  - **[NodeJS](https://nodejs.org/en/)** — a JavaScript runtime server environment
  - **[express](https://www.npmjs.com/package/express)** —  a web application framework
  - **[nodemon](https://www.npmjs.com/package/nodemon)** — a utility that will monitor for any changes in your source and automatically restart your server
  - **[knex](https://www.npmjs.com/package/knex)** — a SQL query builder for SQL databases
  - **[sqlite3](https://www.npmjs.com/package/sqlite3)** — a asynchronous, non-blocking SQLite3 bindings 
  - **[celebrate](https://www.npmjs.com/package/celebrate)** — an express middleware function that wraps the Joi validation library
  - **[cors](https://www.npmjs.com/package/cors)** — a package for providing a Connect/Express middleware to difine who can access the API
  - **[cross-env](https://www.npmjs.com/package/cross-env)** — set and use environment variables
  - **[jest](https://jestjs.io/)** —  a JavaScript Testing Framework
  - **[supertest](https://www.npmjs.com/package/supertest)** — provide a high-level abstraction for testing HTTP
- **Front-end**
  - **[ReactJS](https://reactjs.org/)** — a JavaScript library for building user web interfaces
  - **[react-dom](https://www.npmjs.com/package/react-dom)** — the entry point to the DOM and server renderers for React
  - **[react-router-dom](https://www.npmjs.com/package/react-router-dom)** — DOM bindings for React Router
  - **[react-scripts](https://www.npmjs.com/package/react-scripts)** — includes scripts and configuration
  - **[react-icons](https://www.npmjs.com/package/react-icons)** — popular icons
  - **[react-toastify](https://www.npmjs.com/package/react-toastify)** — allow you to add notification to your app
  - **[axios](https://www.npmjs.com/package/axios)** — promise based HTTP client for the browser and node.js
  - **[styled-components](https://www.npmjs.com/package/styled-components)** — utilising tagged template literals, allows write actual CSS code to style components
- **Mobile**
	- **[React Native](https://reactnative.dev/)** — a lib that provides a way to create native apps for Android and iOS
	- **[react-navigation](https://www.npmjs.com/package/react-navigation)** — navigation solution based on JavaScript
	- **[expo](https://expo.io/)** — a set of tools and services built around React Native
	- **[expo-constants](https://www.npmjs.com/package/expo-constants)** — provides system information
	- **[expo-mail-composer](https://www.npmjs.com/package/expo-mail-composer)** — provides an API to compose mails using OS specific UI
	- **[axios](https://www.npmjs.com/package/axios)** — promise based HTTP client for the browser and node.js
	- **[react-icons](https://www.npmjs.com/package/react-icons)** — popular icons
	- **[intl](https://www.npmjs.com/package/intl)** — used for formatting strings, numbers, and date and time
- **Database**
  - **[SQLite](https://www.sqlite.org/index.html)** — A cross-platform document-oriented relational database management system


## Getting started

1. Clone this repo using `git clone git@github.com:jairokoning/be-the-hero.git`
2. Move yourself to the appropriate back-end directory: `cd be-the-hero/backend` and run `npm-install`
3. Move yourself to the appropriate front-end directory: `cd be-the-hero/frontend` and run `npm-install`
4. Move yourself to the appropriate mobile directory: `cd be-the-hero/mobile` and run `npm-install`

### Getting started with the backend server

1. Move yourself to the backend folder: `cd backend`
2. Run `npm start` to start the server

### Getting started with the frontend app

1. Move yourself to the front-end folder: `cd frontend`
2. Run `npm start` to start the web application

### Getting started with the mobile app

1. Change the `baseURL` in `scr/services/api.js` informing your IP
2.  Move yourself to the mobile folder: `cd mobile`
3. Run `npm start` and use your phone's Expo app to scan the bar-code

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) page for details.