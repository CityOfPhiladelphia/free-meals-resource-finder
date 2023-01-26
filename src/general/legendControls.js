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
      'Food Sites': {
        'border-color': 'black',
        'border-style': 'solid',
        'border-weight': '0px',
        'width': '15px',
        'height': '15px',
        'font-size': '10px',
        'background-color': '#0F4D90',
      },
      'Older Adult Meal Sites': {
        'border-color': 'black',
        'border-style': 'solid',
        'border-weight': '0px',
        'width': '15px',
        'height': '15px',
        'font-size': '10px',
        'background-color': '#a86518',
        // 'background-color': '#D67D00',
      },
      'Student Meal Sites': {
        'border-color': 'black',
        'border-style': 'solid',
        'border-weight': '0px',
        'width': '15px',
        'height': '15px',
        'font-size': '10px',
        'background-color': '#721817',
      },
      'General Meal Sites': {
        'border-color': 'black',
        'border-style': 'solid',
        'border-weight': '0px',
        'width': '15px',
        'height': '15px',
        'font-size': '10px',
        'background-color': '#506D0A',
      },
      'Community Refrigerators': {
        'border-color': 'black',
        'border-style': 'solid',
        'border-weight': '0px',
        'width': '15px',
        'height': '15px',
        'font-size': '10px',
        'background-color': '#444444',
      },
    },
  },
};
