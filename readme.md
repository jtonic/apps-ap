
Steps required for the installation of the development environment:
1. install nodejs and npm (The npm is included in the nodejs installation). See the notes below.
2. install gulp system wide
    $ npm install gulp -g
3. fetch the development tools locally
    $ npm update
4.
    
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

Note:
    1. The application is been developed under the linux ubuntu os.
        1.1 installation of the node js on ubuntu with apt-get command
            $ sudo apt-get update
            $ sudo apt-get install nodejs
        1.2. Installation of the nodejs on windows
            https://nodejs.org/download/
    2. The installation of the other tools is the same regardless the OS

