export default {
  id: 'covid-free-meals',
  type: 'http-get',
  dependent: 'none',
  resettable: false,
  // url: 'https://services.arcgis.com/fLeGjb7u4uXqeF9q/arcgis/rest/services/COVID19_FreeMealSites_2_0_FOR_TESTING/FeatureServer/0/query',
  url: 'https://services.arcgis.com/fLeGjb7u4uXqeF9q/arcgis/rest/services/COVID19_FreeMealSites_2_0_PUBLICVIEW/FeatureServer/0/query',
  options: {
    params: {
      where: '1=1',
      outFields: '*',
      f: 'pjson',
    },
  },
};
