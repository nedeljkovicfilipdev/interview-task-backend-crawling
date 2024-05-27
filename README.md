# interview-task-backend-crawling
Web Data Extraction for Specific Product Data

Tech Stack:

-NodeJS -React, Typescript

Code was written in VSCode editor

Backend: -Importing Nodejs library Puppeeteer for web scraping page https://www.idealo.de/preisvergleich/OffersOfProduct/201846460_-aspirin-plus-c-forte-800-mg-480-mgbrausetabletten-bayer.html
cmd npm i puppeteer

-Added middleware for api request made from frontend 
-Added routing for request 
-Controller for navigating through project 
-Added folder scripts with 3 files within: wsService.js, productProcessing.js, schema.json

wsService.js is main file for web scraping through given URL 

Frontend: 
-Importing Vite template https://github.com/rayyamhk/vite-react-component-library-starter 
npm install -g degit degit rayyamhk/vite-react-component-library-starter my-component-library 
-Importing different QoL libraries like tailwindCSS, react-helmet, redux-toolkit, react-router-dom, lucide-react, react-toastify, i18next


During development I used official puppeteer documentation "pptr.dev" and had assistence for navigating tool with stackoverflow and chatGPT,

This kind of project was really entertaining to learn, and i will keep on updating it as i learn more advanced techniques of Puppeteer
