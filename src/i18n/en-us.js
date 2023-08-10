
export default {
  language: 'English',
  app: {
    title: 'Food and meal finder',
    subtitle: 'Get free food, nutrition services, and public benefits',
    bannerAlert: 'Many sites are closed today. Check specific site details for more information.',
    noResults: "We're sorry, there are no results for that search. Adjust the filters you've selected and try again.",
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
  pickupDetails: 'Pickup details',
  details: 'Details',
  beforeYouGo: 'Before you go',
  change: 'Schedule change',
  closure: 'Temporary closure',
  holidayClosure: 'This site is currently temporarily closed for ',
  futureHolidayClosure: 'This site will by temporarily closed for ',
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
      },
    },
    olderAdultMealSites: {
      header: 'Older adult meal sites',
      eligibility: {
        p1: 'Age of eligibility varies by site.',
      },
      pickupDetails: {
        p1: 'Older adult meal sites offer ready-to-eat meals.',
        p3: 'Residents can pick up five meals per week at most locations. In some cases, meals must be reserved in advance.',
      },
      subsections: {
        'PCA': {
          name: 'PCA-supported sites',
          eligibility: {
            li1: 'Adults 60 and over are eligible at sites supported by the Philadelphia Corporation for Aging (PCA). Their spouses are also eligible, regardless of their age.',
            p2: "To learn about other services or to get help in another language, call the PCA helpline at\
            <b><a class='underlined' href='tel:+12157659040'>(215) 765-9040</a>.",
          },
          pickupDetails: {
            p1: 'Older adult meal sites offer ready-to-eat meals.',
            p3: 'In some cases, meals must be reserved in advance.',
          },
        },
        'specialPCA': {
          eligibility: {
            li1: 'Adults 60 and over are eligible at sites supported by the Philadelphia Corporation for Aging (PCA). Their spouses are also eligible, regardless of their age.',
            p2: "To learn about other services or to get help in another language, call the PCA helpline at\
            <b><a class='underlined' href='tel:+12157659040'>(215) 765-9040</a>.",
          },
          pickupDetails: {
            p1: 'Older adult meal sites offer ready-to-eat meals.',
            p3: 'Residents can pick up five meals per week at this site. Meals must be reserved in advance.',
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
      eligibility: 'Children and youth age 18 or under are eligible. No ID is required.',
      pickupDetails: {
        p1: 'Student meal sites offer ready-to-eat meals.',
      },
      otherResources: {
        p1: 'To find more summer meals for young people:',
        li1: 'Call the Summer Meals Hotline at <a href="tel:215-770-4659">(215) 770-4659</a>.',
        li2: 'Text “FOOD” or “COMIDA” to <a href="tel:304-304">304-304</a>.',
        li3: 'Visit <a target="_blank" href="http://www.phillysummermeals.org">www.phillysummermeals.org</a>.',
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
};
