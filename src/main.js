// import '../node_modules/@cgcs2000/mapbox-gl/dist/mapbox-gl.css';
// import mapboxgl from '@cgcs2000/mapbox-gl';


import mapboxgl from "mapbox-gl";
import "../node_modules/mapbox-gl/dist/mapbox-gl.css";
import "./css/main.css";
import { LogoControl } from "./controls/LogoControl";
import { MeasureTool } from "./tools/measure";
import "whatwg-fetch";
import { setConfig } from "./config";
import { version } from "../package.json";
import { Map } from "./map/Map";
import cloneDeep from "lodash.clonedeep";

const exported = cloneDeep(mapboxgl);
exported.setConfig = (options) => {
  let { mapboxToken } = options;
  if (mapboxToken) {
    mapboxgl.accessToken = mapboxToken;
  }
  setConfig(options);
};

exported.version = version;
exported.Map = Map;
exported.LogoControl = LogoControl;
exported.MeasureTool = MeasureTool;

export default exported;

// export default  global; // 这个打包后会有全剧变量问题,生产环境OK
