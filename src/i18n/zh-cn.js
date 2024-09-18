
export default {
  language: "中文",
  app: {
    title: "食物分发和用餐地点查找器",
    subtitle: "获得免费食物、营养服务和公共福利",
    "bannerAlert": "今天许多食物分发点关门。 查看具体的地点信息，以了解详细情况。",
    "noResults": "很抱歉，没有针对该搜索的结果。 请调整所选的过滤器，然后重试。",
    searchPlaceholders: {
      all: "按地址或邮政编码搜索",
    },
  },
  "categoryType": {
    category: "类别",
    "generalMealSite": "普通用餐地点",
    "foodSite": "食物分发点",
    "studentMealSite": "学生用餐地点",
    "olderAdultMealSite": "老年人用餐地点",
    "communityRefrigerator": "社区冰箱",
    "publicBenefits": "食品援助和福利",
  },
  eligibility: "资格",
  // "pickupDetails": "取餐详情",
  pickupDetails: "详细信息",
  details: "详细信息",
  "beforeYouGo": "出发之前",
  change: "日程变更",
  closure: "暂时关闭",
  "holidayClosure": "出于以下原因本地点目前暂时关闭 ",
  "futureHolidayClosure": "出于以下原因本地点将暂时关闭 ",
  holidayClosureAllSites_juneteenth: '6月19日——6月19日假期的时间可能会改变。出发前请联系该网站。',
  holidayClosureAllSites_weekend: '假日周末营业时间可能会发生变化。出发前请联系该网站。',
  holidayClosureAllSites: '假日周末营业时间可能会发生变化。出发前请联系该网站。',
  winterHolidayClosureAllSites: "Christmas and New Year's Holidays - 寒假期间营业时间可能会有所变化。出发前请联系该网站。",
  futureHolidayClosureAllSites: '假日周末营业时间可能会发生变化。出发前请联系该网站。',
  "weatherClosure": "出于天气原因本地点目前暂时关闭。",
  "temporaryClosure": "本地点目前暂时关闭",
  schedule: "日程安排",
  "nonPerish": "仅限不易腐烂的食品",
  "freshOnly": "仅限新鲜农产品",
  "breakfastLunch": "早餐和午餐",
  "tenMeals": "餐食援助地点每周提供7份早餐和7份午餐以及新鲜水果。",
  "oneMeal": "每居民可获得1份餐食",
  "driveThrough": {
    dt: "得来速",
    wu: "步行",
    both: "得来速和步行",
  },
  "daysAndTimesVaryBySite": "服务日期和时间因地点而异。",
  sections: {
    "foodSites": {
      header: "食物分发点",
      eligibility: "任何居民都有资格。 无需身份证或收入证明。",
      "pickupDetails": {
        "p1": "食物分发点提供提供额外食品和杂货。",
        "p3": "根据地点的不同，居民可能会收到：",
        "li1": "预先包装好的食品餐盒。",
        "li2": "他们从食品储藏室中选择的食物。",
        "li3": "他们从社区冰箱中选择的食物。",
      },
      subsections: {
        "PHILABUNDANCE": {
          name: "Philabundance食品援助组织",
        },
        "PHILABUNDANCE/SHARE FOOD PROGRAM": {
          name: "Philabundance食品援助组织/Share Food Program费城食品分享计划",
        },
        "SHARE FOOD PROGRAM": {
          name: "Share Food Program费城食品分享计划",
        },
        "Nutritional Development Services": {
          name: "Nutritional Development Services食品援助组织",
        },
        "Small Things Philly": {
          name: "Small Things Philly食品援助组织",
        },
        "Community Refrigerators": {
          name: "社区冰箱",
          eligibility: "任何人都可以访问社区冰箱，并从中自取食物。",
          "pickupDetails": "社区冰箱每周7天、每天24小时开放，任何人都可以随时从中自取食物。             社区冰箱由社区组织和志愿者负责运营。             其中的食品会因捐赠情况而有所不同。             欲了解更多信息，请访问每个社区冰箱网站。",
        },
      },
    },
    "generalMealSites": {
      header: "普通用餐地点",
      eligibility: "任何居民都有资格。 无需身份证或收入证明。",
      "pickupDetails": {
        "p1": "普通用餐地点提供即食餐。",
      },
      subsections: {
        "Office of Homeless Services": {
          name: "无家可归者服务办公室（Office of Homeless Services）",
        },
      },
    },
    olderAdultMealSites: {
      header: "老年人用餐地点",
      eligibility: {
        p1: "资格年龄因地点而异。",
        p2: "符合条件的成年人的配偶也可以在这些场所用餐，无论其年龄大小。",
      },
      pickupDetails: {
        p1: "老年人用餐地点提供即食餐。",
        // p3: "在大多数用餐点，居民每周可以领取五顿餐食。 在某些情况下，餐食必须提前预约。",
        p4: "居民最好至少提前一周预订餐食。",
      },
      subsections: {
        'PCA': {
          name: "费城老年人援助组织（PCA）支持的用餐点",
          eligibility: {
            li1: "60岁及以上的老年人有资格在费城老年人援助组织支持的用餐点用餐。",
            p2: "要了解其他服务或寻求其他语言的帮助，请拨打 PCA 帮助热线：<b><a class='underlined' href='tel:+12157659040'>(215) 765-9040</a>。",
          },
          pickupDetails: {
            p1: "老年人用餐地点提供即食餐。",
            // p3: "在某些情况下，餐食必须提前预约。",
            p3: "居民每周最多可以在这个地方吃五顿饭。酒店内供应餐点。",
            p4: "居民最好至少提前一周预订餐食。致电网站了解更多信息并进行预订。",
          },
        },
        'specialPCA': {
          eligibility: {
            li1: "60岁及以上的老年人有资格在费城老年人援助组织支持的用餐点用餐。",
            p2: "要了解其他服务或寻求其他语言的帮助，请拨打 PCA 帮助热线：<b><a class='underlined' href='tel:+12157659040'>(215) 765-9040</a>。",
          },
          pickupDetails: {
            p1: "老年人用餐地点提供即食餐。",
            // p3: '居民每周可以在这个地点领取五顿饭。餐食必须提前预订。',
            p3: "居民每周最多可以在这个地方吃七顿饭。这包括店内餐点和外带餐的组合。",
            p4: "居民最好至少提前一周预订餐食。致电网站了解更多信息并进行预订。",
          },
        },
        'PPR_Senior': {
          name: "费城公园和娱乐场所老年人中心",
          eligibility: {
            li1: "55岁及以上的老年人有资格在费城公园和娱乐场所老年人中心用餐。",
            p2: "要了解其他服务或寻求其他语言的帮助，请拨打 PCA 帮助热线：<b><a class='underlined' href='tel:+12157659040'>(215) 765-9040</a>。",
          },
          pickupDetails: {
            p1: "老年人用餐地点提供即食餐。",
            p3: "在大多数用餐点，居民每周可以领取五顿餐食。",
          },
        },
      },
    },
    "studentMealSites": {
      header: "学生用餐地点",
      offSeason: {
        p1: '费城学区的所有学生均可在学校享受免费早餐和午餐。要了解更多信息，请参阅该<a target="_blank" href="https://www.philasd.org/foodservices/">地区的餐饮服务页面。</a>',
        p2: '年轻人也可以在那里吃零食或饭菜<a target="_blank" href="https://www.phila.gov/ost/program-locator/#/">校外时间计划。</a>',
      },
      eligibility: "18岁或以下的儿童和青少年有资格。 无需身份证号码。",
      "pickupDetails": {
        "p1": "学生用餐地点提供即食餐。",
      },
      "otherResources": {
        "p1": "欲了解针对年轻人的更多夏季餐食援助：",
        "li1": "请拨打夏季餐食援助热线（Summer Meals Hotline）：<a href=\"tel:215-770-4659\">(215) 770-4659</a>。",
        "li2": "请发送短信“FOOD”或“COMIDA”至：<a href=\"tel:304-304\">304-304</a>。",
        "li3": "请访问：<a target=\"_blank\" href=\"http://www.phillysummermeals.org\">www.phillysummermeals.org</a>。",
        "li4": '访问 <a target="_blank" href="https://www.fns.usda.gov/summer/sitefinder">www.fns.usda.gov/summer/sitefinder</a>，为年轻人免费寻找夏日大餐。',
      },
      subsections: {
        "PHA": {
          name: "费城住房管理局（PHA）社区中心",
          "pickupDetails": "餐食须在现场食用。 欲了解更多信息，请访问相关站点。",
        },
        playstreets: {
          name: "娱乐街计划（Playstreets）",
          "pickupDetails": "娱乐街计划每周一至周五，上午10点至下午4点开放。 届时街道禁止汽车通行。 用餐时间因地点而异。 欲了解更多信息，请访问娱乐街计划网站。<br>            游乐街计划供应午餐和小吃。",
        },
        "NDS": {
          name: "Nutritional Development Services食品援助组织",
          "pickupDetails": "餐食须在现场食用。 请联系Nutritional Development Services食品援助组织，以获得更多信息。",
        },
        "Recreation Center": {
          name: "娱乐中心",
          "pickupDetails": "每周一至周五，上午9点至下午3点开放。 用餐时间因地点而异。 餐食须在现场食用。 欲了解更多信息，请联系或访问娱乐中心。",
        },
        "Caring for Friends": {
          name: "Caring for Friends食品援助组织",
          "pickupDetails": "餐食须在现场食用。 请联系该机构，以获得更多信息。",
        },
        "Philabundance Summer Meal Sites": {
          name: "Philabundance Summer Meal夏季餐食援助地点",
          "pickupDetails": "请联系该机构，以获得更多信息。",
        },
        "Other Summer Meal Sites": {
          name: "其他夏季餐食援助地点",
          "pickupDetails": "用餐时间因地点而异。 餐食须在现场食用。 欲了解更多信息，请访问夏季餐食援助地点。",
        },
      },
    },
    "publicBenefits": {
      header: "食品援助和福利",
      eligibility: "资格因地点而异。",
      "pickupDetails": {
        "p1": "根据地点的不同，居民可能：",
        "li1": "了解并参加公共福利计划。",
        "li2": "获得营养服务和援助。",
        "li3": "获得医疗保健或社会服务的推荐。",
        "p2": "服务日期、时间和服务内容因地点而异。",
      },
      subsections: {
        "WIC": {
          name: "妇女、婴儿和儿童特别补充营养计划（WIC）",
          eligibility: "              妇女、婴儿和儿童特别补充营养计划为孕妇、刚刚生产的母亲和五岁以下的儿童（包括寄养儿童）提供食品和营养援助服务。 欲获得妇女、婴儿和儿童特别补充营养计划的福利，需要满足相关的<a href=\"https://pawic.com/IncomeGuidelines.aspx\" target=\"_blank\">收入要求</a>。            ",
          "pickupDetails": "              妇女、婴儿和儿童特别补充营养计划提供营养服务、母乳喂养支持以及医疗保健和社会服务推荐。 通过妇女、婴儿和儿童特别补充营养计划，受益者可以获得帮助他们购买健康食品的福利。 欲获得该福利，请致电您打算前往的妇女、婴儿和儿童特别补充营养计划办公室。            ",
        },
        "BenePhilly": {
          name: "费城福利（BenePhilly）",
          eligibility: "              任何居民都有资格访问费城福利中心。            ",
          "pickupDetails": "              费城福利组织提供一对一的免费支持，帮助居民申请费城的公共福利。 这些计划可以帮助您支付杂货、药品、健康保险和水电费。 服务日期和时间因地点而异。<br><br>在您出发前，请致电您打算前往的费城福利中心。            ",
        },
      },
    },
    "moreResources": {
      header: "更多资源",
      "p1": "希望了解更多？ 探索其他选项，获得<a href=\"https://www.phila.gov/services/mental-physical-health/find-free-food-or-meals/\" target=\"_blank\">免费食物和额外支持</a>，或获得<a href=\"https://www.phila.gov/services/payments-assistance-taxes/financial-services-for-residents/get-free-help-applying-for-public-benefits/\" target=\"_blank\">申请公共福利</a>的协助。",
    },
  },
  time: {
    category: "每日服务时间",
    morning: "上午（中午前）",
    afternoon: "下午（中午-下午5点）",
    evening: "晚间（下午5点后）",
  },
  "checkSite": "地点的详细情况可能会有变动。 请在出发之前联系餐食援助地点，以确定他们的具体开放时间和服务内容。",
  "otherResources": "其他资源",
  exceptions: {
    "Open on second and fourth Tuesday of the month": "每月第二和第四个星期二开放",
    "Open on first and third Saturday of the month": "在每月的第一个和第三个星期六开放",
    "Open on second and fourth Monday of the month": "每月第二和第四个星期一开放",
    "Open on first and third Wednesday of the month": "在每月的第一个和第三个星期三开放",
    "Open on first Monday of the month": "在每月的第一个星期一开放",
    "Open on first Tuesday of the month": "在每月的第一个星期二开放",
    "Open on third Thursday of the month": "每月第三个星期四开放",
    "Open on third and fourth Saturday of the month": "每月第三和第四个星期六开放",
    "Open on first and third Mondays of the month": "每月的第一个和第三个星期一开放",
    "Open on the last Thursday of the month": "每月最后一个星期四开放",
    "Open on first and third Friday of the month": "在每月的第一个和第三个星期五开放",
    "Open on second and fourth Saturday of the month": "在每月的第二个和第四个星期六开放",
    "Open on first Friday of the month": "在每月的第一个星期五开放",
    "Open on first and third Monday of the month": "在每月的第一个和第三个星期一开放",
    "Open on third Saturday of the month": "每月第三个星期六开放",
    "Open on second and fourth Wednesday of the month": "每月第二和第四个星期三开放",
    "Open on second and fourth Saturdays of the month": "每月第二和第四个星期六开放",
  },
};