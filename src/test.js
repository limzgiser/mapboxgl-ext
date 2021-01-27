 

cityfun.setConfig({
  cfToken:
    "0NnAk2ig0Da5%2B0%2Ba%2F3t3ovdblX2rzSVUGM6%2BUjZAdXAl3QOZLfrI7URZ7VTLHvdVLdbmQz9uXGax6qYagVx70KuFsECqebrCOmdzJvDdFUHqLd4eWoGztA%3D%3D",
    EPSG:"4490",
    geosite:'@hlw'
});
var map = new cityfun.Map({
  container: "map",
  center: [120.70044254024515, 31.301339366724918],
  zoom: 12,
  pitch: 60,
  style:
    "http://36.153.213.20/geocms/v1/cf/rest/services/MapService/VM/2db4282f-4b0e-4c47-b1c4-61ffa92651be",
});

map.on("load", function() {
  // map.addArcGISDynamicLayer( "http://192.168.2.64/geocms/v1/cf/rest/services/MapService/ESRI/ac785b13-7b7f-4e7e-aad3-4ba67f053eb0",{
  //     layerid: "esri-tile",
  //   }
  // );

  new  cityfun.MeasureTool(map)
});
map.on("load", function() {
  // arcgis  dynamic
  // map.addArcGISDynamicLayer(
  //   "http://192.168.2.76/geocms/v1/cf/rest/services/MapService/ESRI/ced7d6b9-2aca-48f9-89be-d0376ced9de7",
  //   {
  //     layerid: "esri-dynamic-layer",
  //   }
  // );
  // arcgis tile
  // map.addArcGISDynamicLayer( "http://192.168.2.64/geocms/v1/cf/rest/services/MapService/ESRI/ac785b13-7b7f-4e7e-aad3-4ba67f053eb0",{
  //     layerid: "esri-tile",
  //   }
  // );
  // // geoserver wms
  // map.addWMSLayer(
  //   "http://192.168.2.64/geocms/v1/cf/rest/services/MapService/OGC/ea971827-12d3-1c12-ac45-39f987c7d5ad",
  //   {
  //     layerid: "wms01",
  //     layers: "WJKFQ_Z:CSZL_AQJG_AQSCSG,WJKFQ_Z:CSZL_CSBJ_BKT",
  //   }
  // );
  // 专题图 http://webres.cityfun.com.cn/sip_std_zt/3857/jzgdfb.json
  // 矢量style
  //   .loadMapStyle(
  //     "http://192.168.2.64/geocms/v1/cf/rest/services/MapService/VM/8c248ab6-616f-702d-a932-39f987c7d5ad"
  //   )
  //   .then((styleObj) => {
  //     map.addMapStyle(styleObj, {
  //       styleid: "special-id",
  // isFlyTo:false,// 默认false
  //     });
  //   });
  //  wmts  http://map2.cityfun.com.cn/geoserver/gwc/service/wmts
  // map.addWMTSLayer("http://192.168.2.64/geocms/v1/cf/rest/services/MapService/OGC/3abd92a4-0da8-48d4-9905-dac2c5e46caf", {
  //   layerid: "geo-server-wmts",
  //   layer: "SZ_BaseMap:SZ_BaseMap_10",
  // });
  // arcgis tile
  // map.addArcGISTileLayer( "http://192.168.2.64/geocms/v1/cf/rest/services/MapService/ESRI/ff0a52e3-f9e0-4cc9-8034-5d170dfb4b9c",{
  //     layerid: "esri-tile",
  //   }
  // );
});
