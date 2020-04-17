export default {
  id: 'free-meals',
  type: 'http-get',
  dependent: 'none',
  resettable: false,
  url: 'https://services.arcgis.com/fLeGjb7u4uXqeF9q/arcgis/rest/services/Meal_Sites_WFL1/FeatureServer/0/query',
  options: {
    params: {
      where: '1=1',
      outFields: '*',
      f: 'pjson',
    },
  },
};
