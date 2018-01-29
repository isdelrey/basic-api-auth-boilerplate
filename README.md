**API boilerplate with basic HTTP auth.**\
Uses Restify as API Framework, Passport as Auth Framework & Babel to compile ES6.

Babel Input folder: **/in**\
Output folder: **/out**

To run server:
```
npm i
npm run all # (runs npm run build and npm start)
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
All (Quick Start):
```
npm run all # (runs npm run build and npm start)
```
