export default {
  id: 'free-meals',
  type: 'http-get',
  dependent: 'none',
  resettable: false,
  url: 'https://services.arcgis.com/fLeGjb7u4uXqeF9q/ArcGIS/rest/services/AGOService_ViewLayer_PhilaFoodPlaystreets/FeatureServer/0/query',
  options: {
    params: {
      where: '1=1',
      outFields: '*',
      f: 'pjson',
    },
  },
};
