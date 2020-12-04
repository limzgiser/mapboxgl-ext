import '../node_modules/mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
 import {setConfig} from './config';
import { version } from '../package.json';
 
import { Map } from './map/Map';
import { cloneDeep } from 'lodash';

const exported = cloneDeep(mapboxgl);
exported.setToken = (token) => {
    mapboxgl.accessToken = token;
    setConfig({
        accessToken:token
    })
};
exported.version = version;

exported.Map = Map;

exported.FMap  
 

export default exported;

// export default  global; // 这个打包后会有全剧变量问题,生产环境OK
