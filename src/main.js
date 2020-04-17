// this is the base-config for resource-finder
// the point of this file is that it will move outside the project
// (so that settings we put in it can be used by other projects)
// and be pulled in with an axios call or something
// (we might not need to use axios with new vue async tools)
// if that is not needed, we can move this info to main.js


// import pinboard
import pinboard from '@phila/pinboard/src/main.js';

import greeting from './general/greeting';

// data-sources
import seniorSites from './data-sources/senior-sites';
import distributionSites from './data-sources/distribution-sites';
import compiled from './data-sources/compiled';
var BASE_CONFIG_URL = 'https://cdn.jsdelivr.net/gh/cityofphiladelphia/mapboard-default-base-config@6126861722cee9384694742363d1661e771493b9/config.js';

pinboard({
  // baseConfig: null,
  markerType: 'circle-marker',
  locationSlots: {
    title: function(state, item) {
      return item.site_name;
    },
  },
  i18n: {
    header: 'i18nBanner',
    data: {
      locale: 'en-US',
      messages: {
        'en-US': {
          language: 'English',
          title: 'Free meals resource finder',
        },
        'es': {
          language: 'Espanol',
          title: 'Free Spanish meals resource finder',
        },
      },
    },
  },
  baseConfig: BASE_CONFIG_URL,
  cyclomedia: {
    enabled: false,
    measurementAllowed: false,
    popoutAble: true,
    recordingsUrl: 'https://atlas.cyclomedia.com/Recordings/wfs',
    username: process.env.VUE_APP_CYCLOMEDIA_USERNAME,
    password: process.env.VUE_APP_CYCLOMEDIA_PASSWORD,
    apiKey: process.env.VUE_APP_CYCLOMEDIA_API_KEY,
  },
  greeting,
  dataSources: {
    seniorSites,
    distributionSites,
    compiled,
  },
  router: {
    enabled: false,
  },
  app: {
    title: 'Free meals resource finder',
    tagLine: 'Find free meals in the City',
    logoAlt: 'City of Philadelphia',
    type: 'compiled',
  },
  projection: '3857',
  geocoder: {
    url(input) {
      const inputEncoded = encodeURIComponent(input);
      return `//api.phila.gov/ais/v1/search/${inputEncoded}`;
    },
    params: {
      gatekeeperKey: process.env.VUE_APP_GATEKEEPER_KEY,
      include_units: true,
    },
  },
  infoCircles: {},
  map: {
    defaultBasemap: 'pwd',
    center: [ -75.163471, 39.953338 ],
    zoom: 12,
    geocodeZoom: 15,
    imagery: {
      enabled: false,
    },
    basemaps: {
      pwd: {
        url: 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap/MapServer',
        tiledLayers: [
          'cityBasemapLabels',
        ],
        type: 'featuremap',
        attribution: 'Parcels: Philadelphia Water',
      },
    },
    tiledLayers: {
      cityBasemapLabels: {
        url: 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap_Labels/MapServer',
        zIndex: '3',
      },
    },
  },
});
