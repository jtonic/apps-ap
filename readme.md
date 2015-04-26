1. install nodejs
2. install npm
3. install gulp system wide
    npm install gulp -g
5. install dependencies
    npm install $dependency --save-dev    
    gulp, jshint, express
    
    
How to run the application:
1. start the rest server
    gulp --gulpfile gulpfile-rest.js
    Note: 
        The REST API
        GET:
        POST: 
2. start the web application
    gulp --gulpfile gulpfile-web.js

    APP URL: http://localhost:5000/