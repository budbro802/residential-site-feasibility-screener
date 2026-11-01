const [Map, MapView] = await $arcgis.import([
  "@arcgis/core/Map.js",
  "@arcgis/core/views/MapView.js",
]);

const BasemapGallery = await $arcgis.import(
  "@arcgis/core/widgets/BasemapGallery.js",
);

const FeatureLayer = await $arcgis.import(
  "@arcgis/core/layers/FeatureLayer.js",
);

const mainMap = new Map({
  basemap: "topo-vector",
});

const view = new MapView({
  container: "mapDiv",
  map: mainMap,
  zoom: 14,
  center: [-84.549, 33.956], // longitude, latitude
});

// Marietta Parcel Layer
const parcelSymbol = {
  type: "simple-fill", // autocasts as new SimpleRenderer()
  color: [49, 130, 189, 0.75],
  style: "solid",
  outline: {
    color: "white",
    width: 1,
  },
};

const parcelRenderer = {
  type: "simple",
  symbol: parcelSymbol,
};

const parcelLayer = new FeatureLayer({
  url: "https://services2.arcgis.com/OKqf9cl3ItPM5Rid/arcgis/rest/services/Parcels_Public_View/FeatureServer/138",
  title: "Parcels",
  renderer: parcelRenderer,
  opacity: 0.75,
});

mainMap.add(parcelLayer);
