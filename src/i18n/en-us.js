
export default {
  language: 'English',
  app: {
    title: 'Food distribution sites',
    subtitle: 'Find free food and meals',
    bannerAlert: 'Many sites are closed today. Check specific site details for more information.',
    noResults: 'We\'re sorry, there are no results for that search. Adjust the filters you\'ve selected and try again.',
  },
  viewAccessible: 'View accessible list of site locations',
  'General meal site': 'General meal site',
  'Food site': 'Food site',
  'Student meal site': 'Student meal site',
  'Older adult meal site': 'Older adult meal site',
  eligibility: 'Eligibility',
  betaTag: 'Beta',
  pickupDetails: 'Pickup details',
  beforeYouGo: 'Before you go',
  change: 'Schedule change',
  closure: 'Temporary closure',
  checkSite: 'Check the specific site information. Hours are subject to change.',
  hoursVary: 'Hours and availability varies.',
  MONDAY: 'Monday',
  TUESDAY: 'Tuesday',
  WEDNESDAY: 'Wednesday',
  THURSDAY: 'Thursday',
  FRIDAY: 'Friday',
  SATURDAY: 'Saturday',
  SUNDAY: 'Sunday',
  daysOfTheWeek: "Day of the week",
  schedule: "Schedule",
  nonPerish: 'non-perishable items only',
  freshOnly: 'fresh produce only',
  breakfastLunch: 'Breakfast and lunch',
  ndsMeals: 'Sites may provide daily meals or 7-day breakfast and lunch boxes. Contact NDS for more details.',
  tenMeals: 'Sites provide 7 breakfast and 7 lunch meals and fresh fruit each week.',
  oneMeal: '1 meal per resident',
  driveThrough: {
    dt: 'Drive-thru',
    wu: 'Walk-up',
    both: 'Drive-thru & walk-up',
  },
  sections: {
    foodSites: {
      header: 'Food sites',
      eligibility: 'Any resident is eligible. No ID or proof of income is required.',
      pickupDetails: 'Residents can up pick supplemental food for their household.',
      subsections: {
        'PHILABUNDANCE': {
          name: 'Philabundance',
        },
        'PHILABUNDANCE/SHARE FOOD PROGRAM': {
          name: 'Philabundance/Share Food Program',
        },
        'SHARE FOOD PROGRAM': {
          name: 'Share Food Program',
        },
        'PPR': {
          name: 'Philadelphia Parks & Recreation centers',
        },
        'Nutritional Development Services': {
          name: 'Nutritional Development Services',
          hidePickupDetailsInGreeting: true,
        },
      },
    },
    studentMealSites: {
      header: 'Student meal sites',
      hidePickupDetailsInGreeting: true,
      eligibility: 'All children and youth are eligible. No ID is required.',
      pickupDetails: '',
      subsections: {
        'PSD': {
          name: 'Philadelphia School District schools',
          pickupDetails: '',
          eligibility: 'All children and youth are eligible. No ID is required.',
        },
        'PHA': {
          name: 'Philadelphia Housing Authority (PHA) community centers',
          pickupDetails: 'Monday 9:00 AM – 10:00 AM and 12:00 PM – 2:00 PM<br>\
          Tuesday 9:00 AM – 10:00 AM and 12:00 PM – 2:00 PM<br>\
          Wednesday 9:00 AM – 10:00 AM and 12:00 PM – 2:00 PM<br>\
          Thursday 9:00 AM – 10:00 AM and 12:00 PM – 2:00 PM<br>\
          Friday 9:00 AM – 10:00 AM and 12:00 PM – 2:00 PM<br>\
          Meals must be eaten on site. For more information, visit the site.',
          eligibility: 'All children and youth are eligible. No ID is required.',
        },
        'PPR_StudentMeals': {
          name: 'Philadelphia Parks & Recreation centers',
          hidePickupDetailsInGreeting: true,
          pickupDetails: '',
          eligibility: 'All children and youth are eligible. No ID is required.',
        },
        'CHARTER': {
          name: 'Charter schools',
          pickupDetails: '',
          eligibility: 'All children and youth are eligible. No ID is required.',
        },
        'playstreets': {
          name: 'Playstreets',
          pickupDetails: 'Playstreets are open Monday to Friday between 10 a.m. to 4 p.m. Streets are closed to automobile traffic. Meal times vary by site. For more information, visit the Playstreet.<br>\
          Playstreets serve lunch and a snack.',
          eligibility: 'All children and youth are eligible. No ID is required.',
        },
        'NDS': {
          name: 'Nutritional Development Services',
          pickupDetails: 'Meals must be eaten on site. Contact NDS for more details.',
          eligibility: 'All children and youth are eligible. No ID is required.',
        },
        'Other': {
          name: 'Other',
          hidePickupDetailsInGreeting: true,
          pickupDetails: 'Meal times vary by site. For more information, visit the summer meal site.',
          eligibility: 'All children and youth are eligible. No ID is required.',
        },
        'Recreation Center': {
          name: 'Recreation Centers',
          pickupDetails: 'Monday to Friday between 9AM to 3 PM. Meal times vary by site. Meals must be eaten on site. For more information, call or visit the Recreation Center.',
          eligibility: 'All children and youth are eligible. No ID is required.',
        },
        'Caring for Friends': {
          name: 'Caring for Friends',
          pickupDetails: 'Meals must be eaten on site. Contact the site for more details.',
          eligibility: 'All children and youth are eligible. No ID is required.',
        },
        'Philabundance Summer Meal Sites': {
          name: 'Philabundance Summer Meal Sites',
          pickupDetails: 'Contact the site for more details.',
          eligibility: 'All children and youth are eligible. No ID is required.',
        },
        'Other Summer Meal Sites':{
          name: 'Other Summer Meal Sites',
          pickupDetails: 'Meal times vary by site. Meals must be eaten on site. For more information, visit the summer meal site. ',
          eligibility: 'All children and youth are eligible. No ID is required.',
        },
      },
      custom: {
        // info: '\
        // To find more free summer meal sites for children and youth: <br>\
        // <ul><li>Call the Summer Meals Hotline at <a href="tel:215-770-4659">215-770-4659</a>.</li>   \
        // <li>Text “FOOD” or “COMIDA” to <a href="tel:304-304">304-304</a> to receive a list of nearby meal sites.</li>\
        // <li>Visit <a target="_blank" href="http://www.phillysummermeals.org">www.phillysummermeals.org</a> to find free summer meals for youth.</li></ul>\
        // ',
        info: 'Check back for updates on food distribution during school breaks.<br>\
        Visit the <a href="https://www.philasd.org/foodservices/">School District of Philadelphia\'s Food Services page</a> for information about in-school meal service for students</li></ul>',
      },
    },
    olderAdultMealSites: {
      header: 'Older adult meal sites',
      eligibility: '\
        Adults 60 and over are eligible at sites supported by the Philadelphia\
        Corporation for Aging (PCA). \
        <i><b>Older adults must call ahead to reserve meals prior to pickup.</b></i><br><br>\
        Adults 55 and over are eligible at the Parks & Recreation older adult centers.<br>\
        No reservation necessary.\
      ',
      pickupDetails: '',
      subsections: {
        'PCA': {
          name: 'PCA-supported sites',
          eligibility: '\
            Adults 60 and over are eligible at sites supported by the Philadelphia\
            Corporation for Aging (PCA). \
            <i><b>Older adults must call ahead to reserve meals prior to pickup.</b></i><br><br>\
          ',
          pickupDetails: "\
            Older adults can reserve 5 to 7 meals per week.<br>\
            Pickup dates and times vary by site.\
            For more information and to reserve meals, contact a specific site.\
            An older adult's family may pick up meals, with prior arrangement.\
            Meals may also be home delivered if needed.\
            To get help in languages other than English, call the PCA helpline at\
            <b><a class='underlined' href='tel:+12157659040'>(215) 765-9040</a></b>.\
          ",
        },
        'PPR_Senior': {
          name: 'Philadelphia Parks & Recreation older adult centers',
          eligibility: '\
            Adults 55 and over are eligible at the Parks & Recreation older adult centers.<br>\
            No reservation necessary.\
          ',
          pickupDetails: '\
            Older adults can pick up 5 meals per week at most sites.\
          ',
        },
        'SENIOR SITE': {
          name: 'Older adult site',
        },

      },
    },
    generalMealSites: {
      header:  'General meal sites',
      eligibility: 'Any resident is eligible. No ID or proof of income is required.',
      pickupDetails: '',
      subsections: {
        'compiled': {
          name: 'General sites',
          pickupDetails: 'Days and times vary by site.',
        },
        'Broad Street Ministry': {
          name: 'Broad Street Ministry',
        },
        'Kensington Meal Partners': {
          name: 'Kensington Meal Partners',
        },
        'Muslims Serve': {
          name: 'Muslims Serve',
        },
        'SEAMAAC South Philly': {
          name: 'SEAMAAC South Philly',
        },
        'Office of Homeless Services': {
          name: 'Office of Homeless Services',
        },
      },
    },

    foodPantries: {
      header: 'Find more free food resources and other support:',
      intro: '',
      li1: 'Call <a href="tel:+311">311</a>. Call the pantry in advance to confirm their hours.',
      li2: 'The <a href="https://www.phila.gov/departments/office-of-homeless-services/">Office of Homeless Services website</a> lists more free meal sites. ',
      li3: '<a href="https://communityresourceconnects.org/">Community Resource Connects</a> has food and other resources.',
      h2:'Get help applying for benefits: ',
      li21:'<a href="https://www.phila.gov/programs/benephilly/">BenePhilly</a> helps apply for public benefits. Call 1-844-848-4376. ',
      li22:'<a href="https://www.hungercoalition.org/">The Coalition Against Hunger</a> helps apply for SNAP. Call 215-430-0556 ',
      li23:'Pre-apply for WIC at <a href="https://www.pawic.com/OnlineApplication.aspx">PA WIC.</a> WIC helps women, infants, and children under 5 years old get healthy food and nutrition information.  ',
    },
  },
};
