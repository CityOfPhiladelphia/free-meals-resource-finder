
export default {
  language: 'English',
  app: {
    title: 'Food and meal finder',
    subtitle: 'Get free food, nutrition services, and public benefits',
    bannerAlert: 'Many sites are closed today. Check specific site details for more information.',
    noResults: "We're sorry, there are no results for that search. Adjust the filters you've selected and try again.",
    searchPlaceholders: {
      all: "Search by address or zipcode",
    },
  },
  categoryType: {
    category: 'Category',
    generalMealSite: 'General meal site',
    foodSite: 'Food site',
    studentMealSite: 'Student meal site',
    olderAdultMealSite: 'Older adult meal site',
    communityRefrigerator: 'Community refrigerator',
    publicBenefits: 'Food assistance and benefits',
  },
  eligibility: 'Eligibility',
  // pickupDetails: 'Pickup details',
  pickupDetails: 'Details',
  details: 'Details',
  beforeYouGo: 'Before you go',
  change: 'Schedule change',
  closure: 'Temporary closure',
  holidayClosure: 'This site is currently temporarily closed for ',
  futureHolidayClosure: 'This site will by temporarily closed for ',
  holidayClosureAllSites_juneteenth: 'Juneteenth - Hours may change for the holiday on 6/19. Contact the site before you go.',
  holidayClosureAllSites_weekend: 'Hours may change during the holiday weekend. Contact the site before you go.',
  holidayClosureAllSites: 'Hours may change during the holiday weekend. Contact the site before you go.',
  winterHolidayClosureAllSites: "Christmas and New Year's Holidays - Hours may change during the winter holidays. Contact the site before you go.",
  futureHolidayClosureAllSites: 'Hours may change during the holiday weekend. Contact the site before you go.',
  weatherClosure: 'This site is currently temporarily closed due to weather.',
  temporaryClosure: 'This site is currently temporarily closed.',
  schedule: 'Schedule',
  nonPerish: 'non-perishable items only',
  freshOnly: 'fresh produce only',
  breakfastLunch: 'Breakfast and lunch',
  tenMeals: 'Sites provide 7 breakfast and 7 lunch meals and fresh fruit each week.',
  oneMeal: '1 meal per resident',
  driveThrough: {
    dt: 'Drive-thru',
    wu: 'Walk-up',
    both: 'Drive-thru & walk-up',
  },
  daysAndTimesVaryBySite: 'Days and times vary by site.',
  sections: {
    foodSites: {
      header: 'Food sites',
      eligibility: 'Any resident is eligible. No ID or proof of income is required.',
      pickupDetails: {
        p1: 'Food sites offer supplemental food and groceries.',
        p3: 'Depending on the location, residents may receive:',
        li1: 'Prepacked boxes of food.',
        li2: 'Their choice of food from a pantry.',
        li3: 'Their choice of food from a community refrigerator.',
      },
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
        'Nutritional Development Services': {
          name: 'Nutritional Development Services',
        },
        'Small Things Philly': {
          name: 'Small Things Philly',
        },
        'Community Refrigerators': {
          name: 'Community Refrigerators',
          eligibility: 'Anyone can visit a Community Refrigerator to pick up food.',
          pickupDetails: 'Community Refrigerators are open 24 hours a day, 7 days a week and anyone can take the available food at any time. \
          Community Refrigerators are run by community-based organizations and volunteers. \
          Availability of food will vary based on donations. \
          Visit each Community Refrigerator website for more details.',
        },
        'General Food Site': {
          name: 'General Food Site',
        },
      },
    },
    generalMealSites: {
      header:  'General meal sites',
      eligibility: 'Any resident is eligible. No ID or proof of income is required.',
      pickupDetails: {
        p1: 'General meal sites offer ready-to-eat meals.',
      },
      subsections: {
        'Office of Homeless Services': {
          name: 'Office of Homeless Services',
        },
        'STP': {
          name: 'Small Things Philly',
        },
      },
    },
    olderAdultMealSites: {
      header: 'Older adult meal sites',
      eligibility: {
        p1: 'Age of eligibility varies by site.',
        p2: 'Spouses of eligible adults may also receive meals at these sites, regardless of their age.',
      },
      pickupDetails: {
        p1: 'Older adult meal sites offer ready-to-eat meals.',
        // p3: 'Residents can pick up five meals per week at most locations. In some cases, meals must be reserved in advance.',
        p4: 'It is preferred that residents reserve meals at least one week in advance.',
      },
      subsections: {
        'PCA': {
          name: 'PCA-supported sites',
          eligibility: {
            li1: 'Adults 60 and over are eligible at sites supported by the Philadelphia Corporation for Aging (PCA).',
            p2: "To learn about other services or to get help in another language, call the PCA helpline at\
            <b><a class='underlined' href='tel:+12157659040'>(215) 765-9040</a>.",
          },
          pickupDetails: {
            p1: 'Older adult meal sites offer ready-to-eat meals.',
            // p3: 'In some cases, meals must be reserved in advance.',
            p3: 'A resident can get up to five meals per week at this location. Meals are served on site.',
            p4: 'It is preferred that residents reserve meals at least one week in advance. Call the site to learn more and make a reservation.',
          },
        },
        'specialPCA': {
          eligibility: {
            li1: 'Adults 60 and over are eligible at sites supported by the Philadelphia Corporation for Aging (PCA).',
            p2: "To learn about other services or to get help in another language, call the PCA helpline at\
            <b><a class='underlined' href='tel:+12157659040'>(215) 765-9040</a>.",
          },
          pickupDetails: {
            p1: 'Older adult meal sites offer ready-to-eat meals.',
            // p3: 'Residents can pick up five meals per week at this site. Meals must be reserved in advance.',
            p3: 'A resident can get up to seven meals per week at this location. This includes a combination of on-site meals and to-go meals.',
            p4: 'It is preferred that residents reserve meals at least one week in advance. Call the site to learn more and make a reservation.',
          },
        },
        'PPR_Senior': {
          name: 'Philadelphia Parks & Recreation older adult centers',
          eligibility: {
            li1: 'Adults 55 and over are eligible at Parks & Recreation older adult centers.',
            p2: "To learn about other services or to get help in another language, call the PCA helpline at\
            <b><a class='underlined' href='tel:+12157659040'>(215) 765-9040</a>.",
          },
          pickupDetails: {
            p1: 'Older adult meal sites offer ready-to-eat meals.',
            p3: 'Residents can pick up five meals per week at most locations.',
          },
        },
      },
    },
    studentMealSites: {
      header: 'Student meal sites',
      offSeason: {
        p1: 'All students in the School District of Philadelphia receive free breakfast and lunch at school. To learn more, see the <a target="_blank" href="https://www.philasd.org/foodservices/">district’s food services page.</a>',
        p2: 'Young people can also get snacks or meals at <a target="_blank" href="https://www.phila.gov/ost/program-locator/#/">Out of School Time programs.</a>',
      },
      eligibility: 'Children and youth age 18 or under are eligible. No ID is required.',
      pickupDetails: {
        p1: 'Student meal sites offer ready-to-eat meals.',
      },
      otherResources: {
        p1: 'To find more summer meals for young people:',
        li1: 'Call the Summer Meals Hotline at <a href="tel:215-770-4659">(215) 770-4659</a>.',
        li2: 'Text “FOOD” or “COMIDA” to <a href="tel:304-304">304-304</a>.',
        li3: 'Visit <a target="_blank" href="http://www.phillysummermeals.org">www.phillysummermeals.org</a>.',
        li4: 'Visit <a target="_blank" href="https://www.fns.usda.gov/summer/sitefinder">www.fns.usda.gov/summer/sitefinder</a> to find free summer meals for youth.',
      },
      subsections: {
        'PHA': {
          name: 'Philadelphia Housing Authority (PHA) community centers',
          pickupDetails: 'Meals must be eaten on site. For more information, visit the site.',
        },
        'playstreets': {
          name: 'Playstreets',
          pickupDetails: 'Playstreets are open Monday to Friday between 10:00 a.m. to 4:00 p.m. Streets are closed to automobile traffic. Meal times vary by site. For more information, visit the Playstreet.<br>\
          Playstreets serve lunch and a snack.',
        },
        'NDS': {
          name: 'Nutritional Development Services',
          pickupDetails: 'Meals must be eaten on site. Contact NDS for more details.',
        },
        'Recreation Center': {
          name: 'Recreation Centers',
          pickupDetails: 'Monday to Friday between 9:00 a.m. to 3:00 p.m. Meal times vary by site. Meals must be eaten on site. For more information, call or visit the Recreation Center.',
        },
        'Caring for Friends': {
          name: 'Caring for Friends',
          pickupDetails: 'Meals must be eaten on site. Contact the site for more details.',
        },
        'Philabundance Summer Meal Sites': {
          name: 'Philabundance Summer Meal Sites',
          pickupDetails: 'Contact the site for more details.',
        },
        'Other Summer Meal Sites':{
          name: 'Other Summer Meal Sites',
          pickupDetails: 'Meal times vary by site. Meals must be eaten on site. For more information, visit the summer meal site.',
        },
        'JSJ Food Bank': {
          name: 'JSJ Food Bank',
          pickupDetails: 'Contact the site for more details.',
        },
      },
    },
    publicBenefits: {
      header: 'Food assistance and benefits',
      eligibility: 'Eligibility varies by site.',
      pickupDetails: {
        p1: 'Depending on the location, residents may:',
        li1: 'Learn about and enroll in public benefits.',
        li2: 'Get nutrition services and support.',
        li3: 'Get referrals to health care or social services.',
        p2: 'Days, times, and services vary by site.',
      },
      subsections: {
        'WIC': {
          name: 'WIC',
          eligibility: '\
            WIC serves pregnant people, people who have recently had a baby, and children\
            under five years old, including foster children. To receive WIC, you must meet\
            <a href="https://pawic.com/IncomeGuidelines.aspx" target="_blank">the income guidelines</a>.\
          ',
          pickupDetails: "\
            WIC provides nutrition services, breastfeeding support, and referrals for health\
            care and social services. Through WIC, you can also receive benefits to help you\
            purchase healthy foods. To get started, call the WIC office that you plan to visit.\
          ",
        },
        'BenePhilly': {
          name: 'BenePhilly',
          eligibility: '\
            Any resident is eligible to visit a BenePhilly center.\
          ',
          pickupDetails: "\
            BenePhilly centers offer free one-on-one support to help residents enroll in public\
            benefits. These programs can help you pay for groceries, medication, health insurance,\
            and utilities. Days and hours vary by site.<br><br>Before you go, call the BenePhilly\
            center that you plan to visit.\
          ",
        },
      },
    },
    moreResources: {
      header: 'More resources',
      p1: 'Want to learn more? Explore other options for getting <a href="https://www.phila.gov/services/mental-physical-health/find-free-food-or-meals/" target="_blank">free food and additional support</a> or for getting help with <a href="https://www.phila.gov/services/payments-assistance-taxes/financial-services-for-residents/get-free-help-applying-for-public-benefits/" target="_blank">applying for public benefits</a>.',
    },
  },
  time: {
    category: 'Time of day',
    morning: 'Morning (before noon)',
    afternoon: 'Afternoon (noon - 5:00 p.m.)',
    evening: 'Evening (after 5:00 p.m.)',
  },
  checkSite: 'Site details are subject to change. Before you go, contact the site to confirm their hours and services.',
  otherResources: 'Other resources',
  exceptions: {
    "Open on second and fourth Tuesday of the month": "Open on second and fourth Tuesday of the month",
    "Open on first and third Saturday of the month": "Open on first and third Saturday of the month",
    "Open on second and fourth Monday of the month": "Open on second and fourth Monday of the month",
    "Open on first and third Wednesday of the month": "Open on first and third Wednesday of the month",
    "Open on first Monday of the month": "Open on first Monday of the month",
    "Open on first Tuesday of the month": "Open on first Tuesday of the month",
    "Open on third Thursday of the month": "Open on third Thursday of the month",
    "Open on third and fourth Saturday of the month": "Open on third and fourth Saturday of the month",
    "Open on first and third Mondays of the month": "Open on first and third Mondays of the month",
    "Open on the last Thursday of the month": "Open on the last Thursday of the month",
    "Open on first and third Friday of the month": "Open on first and third Friday of the month",
    "Open on second and fourth Saturday of the month": "Open on second and fourth Saturday of the month",
    "Open on first Friday of the month": "Open on first Friday of the month",
    "Open on first and third Monday of the month": "Open on first and third Monday of the month",
    "Open on third Saturday of the month": "Open on third Saturday of the month",
    "Open on second and fourth Wednesday of the month": "Open on second and fourth Wednesday of the month",
    "Open on second and fourth Saturdays of the month": "Open on second and fourth Saturdays of the month",
  },
};
