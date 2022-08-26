
export default {
  language: '中文',
  app: {
    title: '食品分发地点',
    subtitle: '查找免费的食品和用餐服务',
    bannerAlert: '今天很多地点均关闭。有关更多信息，请查看具体地点详细信息。',
  },
  'General meal site': '常规餐食供应场所',
  'Food site': '食品地点',
  'Student meal site': '学生用餐场所',
  'Older adult meal site': '年长者用餐场所',
  eligibility: '合格标准',
  pickupDetails: '取餐详情及时间',
  beforeYouGo: '您出发前',
  change: '日程表变更',
  closure: '临时关闭',
  checkSite: '查看特定场所的信息。 时间有可能会变动。',
  hoursVary: '时间和可用性各不相同。',
  MONDAY: '星期一',
  TUESDAY: '星期二',
  WEDNESDAY: '星期三',
  THURSDAY: '星期四',
  FRIDAY: '星期五',
  SATURDAY: '星期六',
  SUNDAY: '星期日',
  nonPerish: '仅为非易腐物品',
  freshOnly: '仅为新鲜农产品',
  breakfastLunch: '早餐和午餐',
  tenMeals: '本周提供新鲜的食物和膳食。',
  oneMeal: '1 每个居民用餐',
  driveThrough: {
    dt: '免下车',
    wu: '步行',
    both: '免下车和步行',
  },
  sections: {
    foodSites: {
      header: '食品地点',
      eligibility: '所有居民都合格。 不需身份证或收入证明。',
      pickupDetails: '居民可以为他们的家庭领取补充食物。',
      subsections: {
        'PPR': {
          name: '费城公园和娱乐中心',
          pickupDetails: '',
        },
      },
    },
    studentMealSites: {
      header: '学生用餐场所',
      eligibility: '所有儿童和青少年均有资格。 需要身份证号码。 ',
      pickupDetails: '日期和时间会根据场所而有所不同。',
      subsections: {
        'PSD': {
          name: '费城学区',
          pickupDetails: '',
          eligibility: '所有儿童和青年人都合格。 不需要出示身份证件。',
        },
        'PHA': {
          name: '费城住房管理局(PHA)社区中心',
          pickupDetails: '周一上午 9:00 – 10:00，中午 12:00 – 下午 2:00<br>\
          周二上午 9:00 – 10:00，中午 12:00 – 下午 2:00<br>\
          周三上午 9:00 – 10:00，中午 12:00 – 下午 2:00<br>\
          周四上午 9:00 – 10:00，中午 12:00 – 下午 2:00<br>\
          周五上午 9:00 – 10:00，中午 12:00 – 下午 2:00<br>\
          餐食须在现场食用。 欲了解更多信息，请前往供应点咨询。',
          eligibility: '所有儿童和青年人都合格。 不需要出示身份证件。',
        },
        'CHARTER': {
          name: '特许学校',
          pickupDetails: '',
          eligibility: '所有儿童和青年人都合格。 不需要出示身份证件。',

        },
        'PPR_StudentMeals': {
          name: '费城公园和娱乐中心',
          hidePickupDetailsInGreeting: true,
          pickupDetails: '提供餐食： 12月28日-30日、1月3日、2月1日、4月11日-14日 <br>\
          娱乐中心的开放时间和用餐时间因地点而异。 所用餐食须在现场食用。 欲了解更多信息，请联系或访问娱乐中心。 ',
          eligibility: '所有儿童和青年人都合格。 不需要出示身份证件。',

        },
        'playstreets': {
          name: 'Playstreets',
          pickupDetails: '游乐街计划的开放时间为周一至周五上午 10 点 – 下午 4 点。街道禁止机动车驶入。 餐食供应时间因供应点而异。 欲了解更多信息，请前往游乐街计划咨询。<br>\
          游乐街计划供应午餐和一份点心。 ',
          eligibility: '所有儿童和青年人都合格。 不需要出示身份证件。',
        },
        'NDS': {
          name: '营养发育服务',
          pickupDetails: '餐饮场所可能供应一日三餐或一周七天的早餐和午餐餐盒。联系营养发育服务了解更多详情。',
          eligibility: '所有儿童和青年人都合格。 不需要出示身份证件。',
        },
        'Other': {
          name: '其他夏季餐饮场所',
          pickupDetails: '各个场所的供餐时间可能不同。如需更多信息，请访问夏季餐饮场所。',
          eligibility: '所有儿童和青年人都合格。 不需要出示身份证件。',
        },
        'Recreation Center': {
          name: '康乐中心',
          pickupDetails: '周一至周五上午 9点 – 下午 3 点。餐食供应时间因供应点而异。 餐食须在现场食用。欲了解更多信息，请致电或前往娱乐中心咨询。',
          eligibility: '所有儿童和青年人都合格。 不需要出示身份证件。',
        },
        'Caring for Friends': {
          name: '关爱朋友机构 ',
          pickupDetails: '餐食须在现场食用。 请联系供应点了解更多详情。 ',
          eligibility: '所有儿童和青少年均有资格。 需要身份证号码。',
        },
        'Philabundance Summer Meal Sites': {
          name: 'Philabundance 夏日餐食供应点  ',
          pickupDetails: '请联系供应点了解更多详情。',
          eligibility: '所有儿童和青少年均有资格。 需要身份证号码。',
        },
        'Other Summer Meal Sites':{
          name: '其他夏日餐食供应点 ',
          pickupDetails: '餐食供应时间因供应点而异。 餐食须在现场食用。 欲了解更多信息，请前往夏日餐食供应点咨询。 ',
          eligibility: '所有儿童和青少年均有资格。 需要身份证号码。',
        },
      },
      custom: {
        // info: '\
        // 若要查找面向儿童和青少年的夏日免费餐食供应点：  \
        // <br><ul><li>拨打夏日餐食热线 <a href="tel:215-770-4659">215-770-4659</a>。</li>   \
        // <li>发送短信 “FOOD” 或 “COMIDA” 至 <a href="tel:304-304">304-304</a>，即可获取附近餐食供应点的清单。 </li> \
        // <li>访问 <a target="_blank" href="http://www.phillysummermeals.org">www.phillysummermeals.org</a> 查找面向青少年供应的夏日免费餐食。</li></ul>  \
        // ',
        info: '请在学校放假期间，再次查看关于食物分配的最新信息。 <br>\
        访问 <a href="https://www.philasd.org/foodservices/">School District of Philadelphia（费城教育局）的 Food Services（食品服务）页面，</a> 了解关于学生在校用餐服务的信息。</li></ul>',
      },
    },
    olderAdultMealSites: {
      header: '年长者用餐场所',
      eligibility: '\
      60 岁及以上的长者有资格享受费城老龄公司 (Philadelphia Corporation for Aging, PCA) 支持站点提供的服务。 \
        <i><b>长者需要在取餐前提前打电话预约餐食。</b></i><br>\
        55 岁及以上的人群有资格享受公园与休闲老年人中心 (Parks & Recreation senior center) 提供的服务。<br> \
        无需预约。 \
      ',
      pickupDetails: '',
      subsections: {
        'PCA': {
          name: '费城老龄者公司（PCA）支持的场所',
          eligibility: '\
          60 岁及以上的长者有资格享受费城老龄公司 (Philadelphia Corporation for Aging, PCA) 支持站点提供的服务。 \
          <i><b>长者需要在取餐前提前打电话预约餐食。</b></i><br>\
          ',
          pickupDetails: "\
          长者每周可预约 5-7 顿餐食。<br>\
          取餐日期和次数因站点而异。 \
          如需了解更多信息，或需要预约餐食，请联系具体站点。 \
          经事先安排，可由长者的亲属取餐。 \
          如需获得英语以外语言的帮助，请致电 PCA 帮助热线\
          <b><a class='underlined' href='tel:+12157659040'>(215) 765-9040</a></b>.\
          ",
        },
        'PPR_Senior': {
          name: '家费城公园与休闲老年人中心',
          eligibility: '\
          55 岁及以上的人群有资格享受公园与休闲老年人中心 (Parks & Recreation senior center) 提供的服务。 <br>\
            无需预约。\
          ',
          pickupDetails: '\
          大多数站点支持长者每周领取 5 顿餐食。\
          ',
        },
      },
    },
    generalMealSites: {
      header:  '常规餐食供应场所',
      eligibility: '任何居民均合格。 不需身份证或收入证明。',
      pickupDetails: '',
      subsections: {
        'compiled': {
          name: '常规餐食供应场所',
          pickupDetails: '日期和时间会根据场所而有所不同。',
        },
      },
    },
    foodPantries: {
      header: '查找更多免费的食物资源和其他支持： ',
      intro: '',
      li1: '拨打 <a href="tel:+311">311</a>。 提前致电食品储藏室确认他们的工作时间。 ',
      li2: '无家可归者服务办公室 <a href="https://www.phila.gov/departments/office-of-homeless-services/">(Office of Homeless Services)</a>  网站列出了更多的免费餐食供应场所。',
      li3: '社区资源联络点  <a href="https://communityresourceconnects.org/">(Community Resource Connects) </a> h可提供食物和其他资源。',
      h2:'获取协助以申请福利。  ',
      li21:'<a href="https://www.phila.gov/programs/benephilly/">费城福利 (BenePhilly) </a>  可协助申请公共福利。 欢迎致电 1-844-848-4376。 ',
      li22:'<a href="https://www.hungercoalition.org/">反饥饿联盟 (Coalition Against Hunger) </a> 可协助申请 SNAP。 欢迎致电 215-430-0556。  ',
      li23:'在 <a href="https://www.pawic.com/OnlineApplication.aspx">PA WIC </a>提前申请 WIC。WIC 可帮助妇女、婴儿和 5 岁以下儿童获得健康食品和营养信息。 ',
    },
  },
};
