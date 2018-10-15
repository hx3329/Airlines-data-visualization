## SOMERN Project (Semantic-ui,OKTA,Mongodb,Express,React,Nodejs)
- This project client side was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
- The server side was build with [Express](https://github.com/expressjs/express).
- UI side build by [Semantic-ui](https://react.semantic-ui.com/).
- Database is build by [Mongodb](https://www.mongodb.com/).
- Map data layer is implementatd by [Openlayers](https://openlayers.org).

## Step1: install envirnment

* `cd client && npm install` move in client folder to build client evironment.
* `cd ../server && npm install` move in server folder to build server encironment.

## Step2: Open Layers

Using [Openlayers](https://openlayers.org/en/latest/apidoc)for displaying map data in web browsers. It is a high-performance, feature-packed library for creating interactive maps on the web. It can display map tiles, vector data and markers loaded from any source on any web page. OpenLayers has been developed to further the use of geographic information of all kinds. It is completely free, Open Source JavaScript, released under the 2-clause BSD License (also known as the FreeBSD).

### Getting Started

Install the [`ol` package](https://www.npmjs.com/package/ol):

```
npm install ol
```

Import just what you need for your application:

```js
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new XYZ({
        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      })
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});
```

### Supported Browsers

OpenLayers runs on all modern browsers that support [HTML5](https://html.spec.whatwg.org/multipage/) and [ECMAScript 5](http://www.ecma-international.org/ecma-262/5.1/). This includes Chrome, Firefox, Safari and Edge. For older browsers and platforms like Internet Explorer (down to version 9) and Android 4.x, [polyfills](http://polyfill.io) for `requestAnimationFrame` and `Element.prototype.classList` are required, and using the KML format requires a polyfill for `URL`.

### Documentation

Check out the [hosted examples](https://openlayers.org/en/latest/examples/), the [workshop](https://openlayers.org/workshop/) or the [API documentation](https://openlayers.org/en/latest/apidoc/).

## Step3: Mongodb

You can change the url with your own mangodb url in server site `app.js`
```
//u can change the url by your self
mongoose.connect('mongodb://localhost:27017/login-dem');
mongoose.Promise = global.Promise;
```
## Step4: Semantic-ui

You can use all the code provided from [Semantic-ui](https://react.semantic-ui.com/) webpage.

## Step5: Run

* `cd server && npm start` move in server folder to start server.
* `cd ../client && npm start` move in client folder to start client.
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Error: bcrypt for windows10
Open powershell with administrator privileges and run this command, then proceed with bcrypt installation
* `npm install --global --production windows-build-tools`

if you have the same problem with other system, visit [node.bcrypt.js](https://github.com/kelektiv/node.bcrypt.js/wiki/Installation-Instructions) github.
