
export default {
  language: 'Pусский',
  app: {
    title: 'Пункты выдачи продуктов',
    subtitle: 'Найдите бесплатное продовольствие и питание',
    bannerAlert: 'Многие места сегодня закрыты. Для получения более подробной информации о месте отдыха просмотрите дополнительные сведения.',
  },
  'General meal site': 'Пункты выдачи еды',
  'Food site': 'Пункт выдачи питания',
  'Student meal site': 'Пункт выдачи питания для учащихся',
  'Older adult meal site': 'Пункт выдачи питания для пожилых людей',
  'Community Refrigerators': 'Общественные холодильники',
  eligibility: 'Критерии получения помощи',
  pickupDetails: 'Информация о получении и время получения',
  beforeYouGo: 'Прежде чем идти',
  change: 'Изменение графика работы',
  closure: 'Временное закрытие',
  checkSite: 'уточните информацию по конкретному пункту. Часы работы могут меняться.',
  hoursVary: 'Время выдачи и имеющееся в наличии питание могут меняться.',
  MONDAY: 'Понедельник',
  TUESDAY: 'Вторник',
  WEDNESDAY: 'Среда',
  THURSDAY: 'Четверг',
  FRIDAY: 'Пятница',
  SATURDAY: 'Суббота',
  SUNDAY: 'Воскресенье',
  daysOfTheWeek: "День недели",
  schedule: "Расписание",
  nonPerish: 'только продукты длительного хранения',
  freshOnly: 'только свежие продукты',
  breakfastLunch: 'завтрак и обед',
  tenMeals: 'Свежее питание и обеды на неделю.',
  oneMeal: '1 количество порций на жителя',
  driveThrough: {
    dt: 'Без выхода из машины',
    wu: 'Пункт внутри помещения',
    both: 'Обслуживание как без выхода из машины, так и внутри помещения',
  },
  sections: {
    foodSites: {
      header: 'Пункты выдачи продуктов',
      eligibility: 'уточните информацию по конкретному пункту..',
      pickupDetails: 'Жители могут получить дополнительное питание для своих семей.',
      subsections: {
        'PPR': {
          name: 'Парки и центры отдыха и развлечений Филадельфии',
          pickupDetails: '',
        },
      },
    },
    studentMealSites: {
      header: 'Пункты выдачи питания для учащихся',
      eligibility: 'Допускаются дети и молодежь. Удостоверение личности не требуется. ',
      pickupDetails: '',
      subsections: {
        'PSD': {
          name: 'Школы школьного округа Филадельфии',
          pickupDetails: '',
          eligibility: 'Право на получение помощи есть у всех детей и подростков. Удостоверение личности не требуется.',
        },
        'PHA': {
          name: 'Общественные центры Управления жилищного хозяйства Филадельфии (PHA)',
          pickupDetails: 'Понедельник:  9:00 – 10:00 и 12:00 – 14:00<br>\
          Вторник:  9:00 – 10:00 и 12:00 – 14:00<br>\
          Среда:  9:00 – 10:00 и 12:00 – 14:00<br>\
          Четверг:  9:00 – 10:00 и 12:00 – 14:00<br>\
          Пятница:  9:00 – 10:00 и 12:00 – 14:00<br>\
          Прием пищи должен осуществляться на месте. Для получения дополнительных сведений посетите пункт питания.',
          eligibility: 'Право на получение помощи есть у всех детей и подростков. Удостоверение личности не требуется.',

        },
        'CHARTER': {
          name: 'Чартерные школы',
          pickupDetails: '',
          eligibility: 'Право на получение помощи есть у всех детей и подростков. Удостоверение личности не требуется.',

        },
        'PPR_StudentMeals': {
          name: 'Парки и центры отдыха и развлечений Филадельфии',
          hidePickupDetailsInGreeting: true,
          pickupDetails: 'Питание предоставляется:<br>\
          С 28 по 30 декабря, 3 января, 1 февраля, с 11 по 14 апреля. <br>\
          Часы работы и время приема пищи в рекреационном центре зависят от конкретного места. Прием пищи должен осуществляться на месте. Для получения дополнительной информации звоните или приходите в рекреационный центр.',
          eligibility: 'Право на получение помощи есть у всех детей и подростков. Удостоверение личности не требуется.',

        },
        'playstreets': {
          name: 'Улицы Playstreet',
          pickupDetails: 'Игровые улицы открыты с понедельника по пятницу с 10:00 до 16:00. Движение транспорта по улицам в это время закрыто. Время приема пищи может отличаться в зависимости от пункта питания. Для получения дополнительных сведений приходите на игровые улицы.<br>\
          На игровых улицах подаются обеды и закуски.',
          eligibility: 'Право на получение помощи есть у всех детей и подростков. Удостоверение личности не требуется.',
        },
        'NDS': {
          name: 'Центры Nutritional Development Services',
          pickupDetails: 'В центрах можно получить ежедневное питание или наборы для завтрака и обеда на 7 дней. Подробную информацию можно получить в организации Nutritional Development Services.',
          eligibility: 'Право на получение помощи есть у всех детей и подростков. Удостоверение личности не требуется.',
        },
        'Other': {
          name: 'Другие центры раздачи летнего питания',
          pickupDetails: 'Время раздачи питания различается в зависимости от конкретного адреса. Подробную информацию можно узнать в соответствующем центре летнего питания.',
          eligibility: 'Право на получение помощи есть у всех детей и подростков. Удостоверение личности не требуется.',
        },
        'Recreation Center': {
          name: 'Центры отдыха',
          pickupDetails: 'Понедельник – пятница с 9:00 до 15:00.  Время приема пищи может отличаться в зависимости от пункта питания. Прием пищи должен осуществляться на месте.  Для получения дополнительной информации звоните или приходите в рекреационный центр. ',
          eligibility: 'Право на получение помощи есть у всех детей и подростков. Удостоверение личности не требуется.',
        },
        'Caring for Friends': {
          name: 'Caring for Friends',
          pickupDetails: 'Прием пищи должен осуществляться на месте. Для получения дополнительной информации обратитесь в пункт питания по контактным данным. ',
          eligibility: 'Допускаются дети и молодежь. Удостоверение личности не требуется.',
        },
        'Philabundance Summer Meal Sites': {
          name: 'Philabundance Summer Meal Sites',
          pickupDetails: 'Для получения дополнительной информации обратитесь в пункт питания по контактным данным.',
          eligibility: 'Допускаются дети и молодежь. Удостоверение личности не требуется.',
        },
        'Other Summer Meal Sites':{
          name: ' Другие пункты питания в летний период ',
          pickupDetails: 'Время приема пищи может отличаться в зависимости от пункта питания. Прием пищи должен осуществляться на месте. Для получения дополнительных сведений приходите в пункты питания. ',
          eligibility: 'Допускаются дети и молодежь. Удостоверение личности не требуется.',
        },
      },
      custom: {
        // info: '\
        // Для того, чтобы найти больше пунктов бесплатного питания для детей и молодежи в летний период: \
        // <br><ul><li>звоните на горячую линию пунктов питания в летний период по номеру <a href="tel:215-770-4659">215-770-4659</a>;</li>   \
        // <li>отправьте сообщение с текстом "FOOD" или "COMIDA" на номер <a href="tel:304-304">304-304</a> для получения списка ближайших пунктов питания; </li> \
        // <li>посетите веб сайт по адресу <a target="_blank" href="http://www.phillysummermeals.org">www.phillysummermeals.org</a> для поиска площадок питания для молодежи в летний период.</li></ul>  \
        // ',
        info: 'Для получения информации об организации питания в школе для учащихся посетите <a href="https://www.philasd.org/foodservices/">страницу службы питания школьного округа Филадельфии.</a><br>\
        Также в рамках программ Out of School Time молодежь может получить готовую еду или перекусы. \
        Чтобы выбрать программу и узнать о ней больше, посетите сайт <a href="https://www.phila.gov/ost/program-locator/#/">OST Program Locator (Поиск программ OST).</a>',
      },
    },
    olderAdultMealSites: {
      header: 'Пункты выдачи питания для пожилых людей',
      eligibility: '\
      Взрослые старше 60 лет могут получить питание на площадках, с которыми сотрудничает Philadelphia Corporation for Aging (PCA).\
        <i><b>Чтобы получить питание, необходимо заранее позвонить представителям площадки и договориться о бронировании.</b></i><br>\
        Люди старше 55 лет могут получить питание в центрах отдыха и прогулок для пожилых.\
        Предварительное бронирование не требуется.\
      ',
      pickupDetails: '',
      subsections: {
        'PCA': {
          name: 'Пункты выдачи продуктов, поддерживаемые PCA',
          eligibility: '\
          Взрослые старше 60 лет могут получить питание на площадках, с которыми сотрудничает Philadelphia Corporation for Aging (PCA).\
            <i><b>Чтобы получить питание, необходимо заранее позвонить представителям площадки и договориться о бронировании.</b></i><br>\
          ',
          pickupDetails: "\
          которыми работает PCA\
          Пожилые могут забронировать 5–7 наборов питания в неделю.\
          Даты и время выдачи на разных площадках отличаются. Чтобы узнать подробности и забронировать набор питания,\
          свяжитесь с представителями площадки. Наборы питания, забронированные для пожилых,\
          могут забрать их родственники по предварительному согласованию. Если вы не говорите по-английски и вам нужна помощь,\
          позвоните в службу поддержки PCA по номеру\
          <b><a class='underlined' href='tel:+12157659040'>(215) 765-9040</a></b>.\
          ",
        },
        'PPR_Senior': {
          name: 'Парки и центры отдыха и развлечений для пожилых людей',
          eligibility: '\
          Люди старше 55 лет могут получить питание в центрах отдыха и прогулок для пожилых.\
          Предварительное бронирование не требуется.\
          ',
          pickupDetails: '\
            На большинстве площадок пожилым предоставляется пять наборов питания в неделю. \
          ',
        },
      },
    },
    generalMealSites: {
      header:  'Пункты выдачи еды',
      eligibility: 'Право на получение помощи есть у каждого местного жителя. Удостоверение личности или справка о доходах не требуется.',
      pickupDetails: '',
      subsections: {
        'compiled': {
          name: 'Пункты выдачи еды',
          pickupDetails: 'У каждого пункта свой график работы',
        },
      },
    },
    communityRefrigerators: {
      header:  'Общественные холодильники',
      eligibility: 'Общественные холодильники — это места, где каждый может взять немного еды.',
      pickupDetails: 'Общественные холодильники доступны круглосуточно, семь дней в неделю. Взять продукты из холодильника можно в любой момент. \
      Общественные холодильники обслуживаются общественными организациями и волонтерами. \
      Количество и ассортимент продуктов могут меняться, так как еда приобретается за счет пожертвований. \
      Для дополнительной информации посетите веб-сайт, посвященный интересующему вас холодильнику.',
      subsections: {
        'compiled': {
          name: 'Общественные холодильники',
          pickupDetails: '',
        },
        'Bebashi': {
          name: 'Bebashi',
        },
        'East Falls Community Fridge': {
          name: 'East Falls Community Fridge',
        },
        'Germantown Community Fridge': {
          name: 'Germantown Community Fridge',
        },
        'South Philadelphia Community Fridge': {
          name: 'South Philadelphia Community Fridge',
        },
        'Umoja Community Fridge': {
          name: 'Umoja Community Fridge',
        },
        'Fridges and Family': {
          name: 'Fridges and Family',
        },
      },
    },
    foodPantries: {
      header: 'Поиск пунктов выдачи бесплатного питания и информация о других ресурсах ',
      intro: '',
      li1: 'Позвоните по номеру <a href="tel:+311">311</a>. Позвоните в пункт выдачи питания, чтобы уточнить его график работы.',
      li2: 'Посетите сайт Службы помощи бездомным<a href="https://www.phila.gov/departments/office-of-homeless-services/"> (Office of Homeless Services)</a>, чтобы узнать адреса пунктов выдачи бесплатного питания. ',
      li3: 'Посетите сайт  <a href="https://communityresourceconnects.org/">Community Resource Connects</a>, чтобы ознакомиться с информацией о пунктах выдачи питания и прочих ресурсах в вашем регионе.',
      h2:'Помощь в подаче заявлений на получение пособий и льгот ',
      li21:'Программа  <a href="https://www.phila.gov/programs/benephilly/">BenePhilly: </a> подача заявлений на получение социальных пособий. Чтобы связаться со специалистом программы, позвоните по номеру 1-833-373-5868.',
      li22:'Организация <a href="https://www.hungercoalition.org/">Coalition Against Hunger:</a>  подача заявления на пособие по программе льготной покупки продуктов SNAP. Чтобы связаться со специалистом, позвоните по номеру 215-430-0556.',
      li23:'Предварительная подача заявления на льготы по программе WIC в штате Пенсильвания.В рамках программы женщинам, младенцам и детям (до 5 лет) предоставляется здоровое питание и консультации по вопросам питания. <a href="https://www.pawic.com/OnlineApplication.aspx">PA WIC.</a>  ',
    },
  },
};
