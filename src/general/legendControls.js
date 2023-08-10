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
      'Food sites': {
        'border-color': 'black',
        'border-style': 'solid',
        'border-weight': '0px',
        'width': '15px',
        'height': '15px',
        'font-size': '10px',
        'background-color': '#0F4D90',
      },
      'General meal sites': {
        'border-color': 'black',
        'border-style': 'solid',
        'border-weight': '0px',
        'width': '15px',
        'height': '15px',
        'font-size': '10px',
        'background-color': '#506D0A',
      },
      'Older adult meal sites': {
        'border-color': 'black',
        'border-style': 'solid',
        'border-weight': '0px',
        'width': '15px',
        'height': '15px',
        'font-size': '10px',
        'background-color': '#a86518',
        // 'background-color': '#D67D00',
      },
      'Student meal sites': {
        'border-color': 'black',
        'border-style': 'solid',
        'border-weight': '0px',
        'width': '15px',
        'height': '15px',
        'font-size': '10px',
        'background-color': '#721817',
      },
      // 'Community Refrigerators': {
      //   'border-color': 'black',
      //   'border-style': 'solid',
      //   'border-weight': '0px',
      //   'width': '15px',
      //   'height': '15px',
      //   'font-size': '10px',
      //   'background-color': '#444444',
      // },
      'Food assistance and benefits': {
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
