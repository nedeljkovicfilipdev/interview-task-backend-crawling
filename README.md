# interview-task-backend-crawling
Web Data Extraction for Specific Product Data

Installation:

Backend: 
*npm i
*Set port in server.js to 4000 if needed
*npm run server

Frontend:
*npm i
*npm run dev

Tech Stack:

-NodeJS, React, Typescript

Code was written in VSCode editor

Backend: -Importing Nodejs library Puppeeteer for web scraping page https://www.idealo.de/preisvergleich/OffersOfProduct/201846460_-aspirin-plus-c-forte-800-mg-480-mgbrausetabletten-bayer.html
cmd npm i puppeteer

-Added middleware for api requests made from frontend 
-Added routing for request 
-Controller for navigating through project 
-Added folder scripts with 3 files within: wsService.js, productProcessing.js, schema.json

wsService.js is main file for web scraping through given URL 

During development I used official puppeteer documentation "pptr.dev" and had assistence for navigating tool with stackoverflow and chatGPT.
Most challenging features during creation of script were solving and entering shadowroot components for accepting cookies and checking if product list has unique elements or not (if product in list already exist skip and go to next element in list)

Frontend: 
-Importing Vite template https://github.com/Quilljou/vite-react-ts-tailwind-starter 
npm install -g degit degit Quilljou/vite-react-ts-tailwind-starter my-project
-Importing different QoL libraries like tailwindCSS, react-helmet, redux-toolkit, react-router-dom, lucide-react, react-toastify, i18next

Will be updated as i learn more advanced techniques of Puppeteer
