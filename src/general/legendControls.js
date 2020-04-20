export default {
  // water: {
  //   options: {
  //     topics: [ 'water' ],
  //     showWithBaseMapOnly: false,
  //   },
  //   // TODO give these an id instead of using the label as a key
  //   data: {
  //     'Roof': {
  //       'background-color': '#FEFF7F',
  //     },
  //     'Other Impervious Surface': {
  //       'background-color': '#F2DCFF',
  //     },
  //   },
  // },
  legend: {
    options: {
      showWithBaseMapOnly: true,
      shape: 'circle',
    },
    data: {
      // TODO give these an id instead of using the label as a key
      'Distribution Sites': {
        'border-color': 'black',
        'border-style': 'solid',
        'border-weight': '1px',
        'width': '12px',
        'height': '12px',
        'font-size': '10px',
        'background-color': 'orange',
      },
      'School Meal Sites': {
        'border-color': 'black',
        'border-style': 'solid',
        'border-weight': '1px',
        'width': '12px',
        'height': '12px',
        'font-size': '10px',
        'background-color': 'purple',
      },
      'Senior Sites': {
        'border-color': 'black',
        'border-style': 'solid',
        'border-weight': '1px',
        'width': '12px',
        'height': '12px',
        'font-size': '10px',
        'background-color': 'yellow',
      },
      'Youth Activity Sites': {
        'border-color': 'black',
        'border-style': 'solid',
        'border-weight': '1px',
        'width': '12px',
        'height': '12px',
        'font-size': '10px',
        'background-color': 'red',
      },
    },
  },
};
