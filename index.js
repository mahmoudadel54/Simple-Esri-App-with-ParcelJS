import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView';
let view = new MapView({
  map:new Map({
    basemap:'osm'
  }),
  zoom:3,
  container:'map'
});
view.when((mapview)=>{
 console.log(mapview);
})
