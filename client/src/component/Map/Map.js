import React, { Component } from "react";
import { Map, View, Feature } from "ol";
import TileLayer from "ol/layer/Tile";
import BingMaps from "ol/source/BingMaps";
import { fromLonLat } from "ol/proj.js";
import { easeIn, easeOut } from "ol/easing.js";
import OSM from "ol/source/OSM";
import { defaults as defaultControls, OverviewMap } from "ol/control.js";
import { defaults as defaultInteractions, DragRotateAndZoom } from "ol/interaction.js";
import VectorLayer from "ol/layer/Vector";
import LineString from "ol/geom/LineString.js";
import Point from "ol/geom/Point";
import {  Style, Fill, Text } from "ol/style.js";
import VectorSource from "ol/source/Vector.js";
import Icon from "ol/style/Icon";
import FullScreen from "ol/control/FullScreen";
import Attribution from "ol/control/Attribution";
import ScaleLine from "ol/control/ScaleLine";
import { Button, Dropdown } from "semantic-ui-react";
import editStyle from "./Style";
import attribution from "./Attribution";
import CityJson from "../../utils/City";

//Calculate great circles routes as lines in GeoJSON or WKT format.
var arc = require("arc");

//map style option
const options = [
  {
    text: "Road (static)",
    value: "Road"
  },

  {
    text: "Road (dynamic)",
    value: "RoadOnDemand"
  },

  {
    text: "Aerial",
    value: "Aerial"
  },

  {
    text: "Aerial with labels",
    value: "AerialWithLabels"
  }
];

//location
const london = fromLonLat([-0.12755, 51.507222]);
const rome = fromLonLat([12.5, 41.9]);
const sydeney = fromLonLat([151.207859, -33.861568]);

const view = new View({
  center: fromLonLat([134.027715, -26.029331]),
  zoom: 4.5
});

let layers = [];
let col;

class AppMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectStyle: "AerialWithLabels",
      airlines: [],
      options: options
    };
  }

  //use componentDidMount to render and build map layer and flightlayer
  componentDidMount() {

    // get map airlines data
    fetch("/api/datas")
      .then(res => res.json())
      .then(json => {
        this.setState({
          airlines: json
        });
        localStorage.setItem("the_main_map", JSON.stringify(json));
      });

    //select map of bind
    for (let i = 0; i < options.length; i++) {
      layers.push(
        new TileLayer({
          visible: options[i].value === this.state.selectStyle,
          preload: Infinity,
          source: new BingMaps({
            key:
              "AuD9mcqmkdR1Q2FiUoIuBhTZa2JFG_qJThOkX7fB_BZ0CaOcB7Afq_Wt7oVs4TvE",
            imagerySet: options[i].value
            // use maxZoom 19 to see stretched tiles instead of the BingMaps
            // "no photos at this zoom level" tiles
            // maxZoom: 19
          })
        })
      );
    }

    //create map control of overviewmap and attribution
    //create small overview map based on customize css style
    let overviewMapControl = new OverviewMap({

      // see in overviewmap-custom.html to see the custom CSS used
      className: "ol-overviewmap ol-custom-overviewmap",
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      collapseLabel: "\u00BB",
      label: "\u00AB",
      collapsed: false
    });

    //create attribution control with customize css style to show the html table
    let att = new Attribution({
      className: "ol-attribution ol-custom-attribution",
      label: "S",
      collapsed: false,
      tipLabel: "Style indicate"
    });

    //build map layer
    let map = new Map({
      //add control of overviewmap and attribution
      //create and add control of default overvieMap,fullscreen and scaleline
      controls: defaultControls().extend([
        new FullScreen(),
        overviewMapControl,
        att,
        new OverviewMap(),
        new ScaleLine({
          units: "metric"
        })
      ]),

      interactions: defaultInteractions().extend([new DragRotateAndZoom()]),
      layers: layers,
      // Improve user experience by loading tiles while dragging/zooming. Will make
      // zooming choppy on mobile or slow devices.
      loadTilesWhileInteracting: true,
      target: "map",
      view: view
    });

    //build flight source for flight layer
    let flightsSource = new VectorSource({
      wrapX: false,
      attributions: attribution.makeTable(),
      loader: function() {
        let flightsData = {};
        if (localStorage.getItem("the_main_map")) {
          flightsData = JSON.parse(localStorage.getItem("the_main_map"));
        }
        let CityData = CityJson;
        for (let i = 0; i < flightsData.length; i++) {

          //get Class name
          let AirSpaceClass = flightsData[i].AirSpaceClass;

          //get Price
          let Price = flightsData[i].Price;

          //get AircraftModel
          let AircraftModel = flightsData[i].AircraftModel;

          //get EngineModel
          let EngineModel = flightsData[i].EngineModel;

          // console.log(AirSpaceClass);
          for (let j = 0; j < CityData.length; j++) {
            if (CityData[j].CityName === flightsData[i].From_City) {
              var from = CityData[j].CityPoint;
            }
            if (CityData[j].CityName === flightsData[i].To_City) {
              var to = CityData[j].CityPoint;
            }
          }

          // create an arc circle between the two locations
          let arcGenerator = new arc.GreatCircle(
            { x: from[1], y: from[0] },
            { x: to[1], y: to[0] },
            { name: "Seattle to DC" }
          );

          //create 500 point coordinates based on from and to points by using arc package function
          let arcLine = arcGenerator.Arc(500, { offset: 10 });
          if (arcLine.geometries.length === 1) {

            //use 500 points to build line based on openlayers lineString.
            let line = new LineString(arcLine.geometries[0].coords);

            //change the coordinates format
            line.transform("EPSG:4326", "EPSG:3857");

            //build feature of line
            let feature = new Feature({
              type: LineString,
              geometry: line,
              finished: false,
              AirSpaceClass: AirSpaceClass,
              Price: Price,
              AircraftModel: AircraftModel,
              EngineModel: EngineModel,
              population: 4000,
              rainfall: 500
            });

            // add the feature with a delay so that the animation
            // for all features does not start at the same time
            addLater(feature, i * 500);
            // addLater(pointFeature,i * 500)
            // addLater(featurePoint,i * 500);
          }
        }
        map.on("postcompose", animateFlights);
      }
    });

    // add delay
    function addLater(feature, timeout) {
      window.setTimeout(function() {
        feature.set("start", new Date().getTime());

        //add feaure to flightsource
        flightsSource.addFeature(feature);
      }, timeout);
    }

    //make moving fucntion of line and plane
    const pointsPerMs = 0.1;
    function animateFlights(event) {
      let vectorContext = event.vectorContext;
      let frameState = event.frameState;
      let features = flightsSource.getFeatures();

      for (let i = 0; i < features.length; i++) {
        let feature = features[i];
        let coords = feature.getGeometry().getCoordinates();

        if (!feature.get("finished")) {
          // only draw the lines for which the animation has not finished yet
          let elapsedTime = frameState.time - feature.get("start");
          let elapsedPoints = elapsedTime * pointsPerMs;

          let index = Math.round((10 * elapsedTime) / 1000);
          if (index >= coords.length - 2) {
            feature.set("finished", true);
          }
          let maxIndex = Math.min(elapsedPoints, coords.length);
          let currentLine = new LineString(coords.slice(0, maxIndex));
          // directly draw the line with the vector context
          let airClass = feature.get("AirSpaceClass");
          let style = editStyle.findStyle(airClass);
          vectorContext.setStyle(style);
          vectorContext.drawGeometry(currentLine);

          //movepoint of plane
          if (index < 500) {
            let currentPoint = new Point(coords[index]);
            let airEngine = feature.get("EngineModel");
            let airPlane = feature.get("AircraftModel");

            let plane = editStyle.findPlane(airPlane);

            col = editStyle.findEngine(airEngine);
            let svg =
              '<svg fill="' +
              col +
              '" width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><' +
              'path d="' +
              plane +
              '"/></svg>';

            let mysvg = new Image();
            mysvg.src = "data:image/svg+xml," + escape(svg);

            //and then declare your style with img and imgSize
            let planeStyle = new Style({
              image: new Icon({
                opacity: 1,
                // anchor:[0.5,0.5],
                img: mysvg,
                imgSize: [170, 170],
                scale: 0.2,
                rotation: planeRoation(coords[i + 1], coords[i])
              })
            });

            // draw the movepoint with the vector context
            vectorContext.setStyle(planeStyle);
            vectorContext.drawGeometry(currentPoint);
          }
        }
      }
      // tell OpenLayers to continue the animation
      map.render();
    }

    //change plane direction
    function planeRoation(new_p, old_p) {
      //90 pi
      let pi_90 = Math.atan2(1, 0);
      // current pi
      let pi_ac = Math.atan2(new_p[1] - old_p[1], new_p[0] - old_p[0]);
      return pi_90 - pi_ac;
    }

    let animating = true;
    let self = this;
    let flightsLayer = new VectorLayer({
      source: flightsSource,
      style: function(feature) {
        let labelStyle = new Style({
          text: new Text({
            font: 'bold 11px "Open Sans", "Arial Unicode MS", "sans-serif"',
            placement: "line",
            textBaseline: "bottom",
            fill: new Fill({
              color: editStyle.findColor(self.state.selectStyle)
            })
          })
        });
        // if the animation is still active for a feature, do not
        // render the feature with the layer style
        if (animating) {
          labelStyle.getText().setText("$" + feature.get("Price"));
          if (feature.get("finished")) {
            // console.log(feature.get("AirSpaceClass"));
            return editStyle.findStyle(feature.get("AirSpaceClass"));
          } else {
            return labelStyle;
          }
        } else {
          return null;
        }
      }
    });

    //add flightlayer to openlayer
    map.addLayer(flightsLayer);
  }

  //change map style
  handleChange = (e, { value }) => {
    this.setState({ selectStyle: value });
    for (let i = 0; i < layers.length; i++) {
      layers[i].setVisible(options[i].value === value);
    }
  };

  //rotateleft
  onRotateleft = () => {
    view.animate({
      rotation: view.getRotation() + Math.PI / 2
    });
  };

  //rotateright
  onRotateright = () => {
    view.animate({
      rotation: view.getRotation() - Math.PI / 2
    });
  };

  //rotate around
  onRotateraround = () => {
    let rotation = view.getRotation();
    view.animate(
      {
        rotation: rotation + Math.PI,
        center: rome,
        easing: easeIn
      },
      {
        rotation: rotation + 2 * Math.PI,
        center: rome,
        easing: easeOut
      }
    );
  };
  //pan
  onPanto = () => {
    view.animate({
      center: london,
      duration: 2000
    });
  };
  //fly
  flyTo = (location, done) => {
    let duration = 2000;
    let parts = 2;
    let called = false;
    function callback(complete) {
      --parts;
      if (called) {
        return;
      }
      if (parts === 0 || !complete) {
        called = true;
        done(complete);
      }
    }
    view.animate(
      {
        center: location,
        duration: duration
      },
      callback
    );
    view.animate(
      {
        zoom: 3,
        duration: duration / 2
      },
      {
        zoom: 8,
        duration: duration / 2
      },
      callback
    );
  };

  onFlyto = () => {
    this.flyTo(sydeney, function() {});
  };

  render() {
    const { selectStyle } = this.state;
    return (
      <div className="app">
        <div id="map" />
        <Button.Group color="teal" id="tool">
          <Dropdown
            placeholder="Select Map"
            value={selectStyle}
            floating
            search
            button
            options={this.state.options}
            onChange={this.handleChange}
          />
          <Button
            animated="vertical"
            id="rotate-left"
            title="Rotate clockwise"
            onClick={this.onRotateleft}
          >
            <Button.Content visible>↻</Button.Content>
            <Button.Content hidden>
              <i className="left arrow icon" />
            </Button.Content>
          </Button>
          <Button
            animated="vertical"
            id="rotate-right"
            title="Rotate counterclockwise"
            onClick={this.onRotateright}
          >
            <Button.Content visible>↺</Button.Content>
            <Button.Content hidden>
              <i className="right arrow icon" />
            </Button.Content>
          </Button>
          <Button animated="vertical" id="pan-to-london" onClick={this.onPanto}>
            <Button.Content visible>Pan to </Button.Content>
            <Button.Content hidden>London</Button.Content>
          </Button>
          <Button animated="vertical" id="fly-to-Sydney" onClick={this.onFlyto}>
            <Button.Content visible>Fly to</Button.Content>
            <Button.Content hidden>Sydney</Button.Content>
          </Button>
          <Button
            animated="vertical"
            id="rotate-around-rome"
            onClick={this.onRotateraround}
          >
            <Button.Content visible>Rotate around</Button.Content>
            <Button.Content hidden>Rome</Button.Content>
          </Button>
        </Button.Group>
      </div>
    );
  }
}

export default AppMap;
