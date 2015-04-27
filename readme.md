
Steps required for the installation of the development environment:
- install git
- configure the proxy for git -> http://stackoverflow.com/questions/783811/getting-git-to-work-with-a-proxy-server
- clone the project locally
    $ git clone https://github.com/jtonic/apps-ap.git
- from now on we will consider the folder name $APP_AP
- install nodejs and npm (The npm is included in the nodejs installation).
    - Ubuntu
        $ sudo apt-get update
        $ sudo apt-get install nodejs
    - windows -> Run the executable https://nodejs.org/download/
- Configure the proxy for node/npm
    http://jjasonclark.com/how-to-setup-node-behind-web-proxy/
- install gulp system wide
    $ npm install gulp -g
- install gulp system wide
    $ npm install gulp -g
- install bower system wide
    $ npm install bower -g
- fetch the development tools locally
    - configure the proxy for npm/node
    - cd $APP_AP
    - $ npm update
- fetch the client dependencies locally
    - configure the proxy for bower - adapt the username and password correspondingly in the file APP_AP/.bowerrc
    - cd $APP_AP
    - $ bower update
    
How to run the application:
- cd $APP_AP
- start the rest server
    gulp --gulpfile gulpfile-rest.js
    Note: 
        The REST API
        GET:
        POST: 
- start the web application
    gulp --gulpfile gulpfile-web.js
    APP URL: http://localhost:5000/

The REST/WEB based application has been tested on Ubuntu and Windows 7

The technologies used:
1. NodeJS - JS application framework
2. npm - node packages management tool - for dependencies management - BE side
3. bower - web client side packages management tool - for app client dependencies management
4. ExpressJS - JS web application - used for REST services and Web application hosting
5. Web client side:
    knockout - JS framework for data binding - MVVM
    backbone - JS framework for MVC
    knockback - for integrating the knockout with backbone
    jquery
    twitter bootstrap - for web app design

What I would like to integrate further is:
    AMD/RequireJS - for modularity of the project
    Mustache - as templating engine for integrating with knockout
    CoffeeScript - for Javascript object orientation
    Compass/SAAS - for simplification of the CSS
    MongoDb storage for a easy implememtation of the REST CRUD services

Notes:
    REST services could be provided by java JAX-RS support in WL - JERSEY
    Web application could be deployed as war in WL - but this will affect the productivity of the development lifecycle.
        The web application is pure client side with the data provided by the REST services so I think it could stay at it is for local development and wrapped as war for deployment in another environments.
    I highly recommend REST services over SOAP WS - because of ... TBC





