**API boilerplate with basic HTTP auth.**\
Uses Restify as API Framework, Passport as Auth Framework & Babel to compile ES6.

Babel Input folder: **/in**\
Output folder: **/out**

To run server:
```
npm i
npm run ready
```

#### Scripts
Build:
```
npm run build # (runs babel: /in -> /out)
```
Start:
```
npm start # (runs babel-compiled /out/index.js)
```
Ready (Quick Start):
```
npm run ready # (runs npm run build and npm start)
```
