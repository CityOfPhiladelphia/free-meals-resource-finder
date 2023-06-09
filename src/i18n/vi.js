
export default {
  language: 'Tiếng Việt',
  app: {
    title: 'Các điểm phân phát thực phẩm',
    subtitle: 'Tìm Thực Phẩm và Bữa Ăn Miễn Phí',
    bannerAlert: 'Hôm nay, nhiều địa điểm đóng cửa. Hãy kiểm tra các chi tiết về địa điểm cụ thể để biết thêm thông tin.',
  },
  'General meal site': 'Các địa điểm cung cấp suất ăn theo bữa',
  'Food site': 'Điểm phát thực phẩm',
  'Student meal site': 'Điểm phát bữa ăn học sinh',
  'Older adult meal site': 'Điểm phát bữa ăn cho người già',
  'Community refrigerators': 'Tủ Lạnh Cộng Đồng',
  'Community refrigerator': 'Tủ Lạnh Cộng Đồng',
  'Community Refrigerator': 'Tủ Lạnh Cộng Đồng',
  eligibility: 'Điều kiện hội đủ',
  pickupDetails: 'Chi tiết',
  details: 'Thông tin chi tiết',
  beforeYouGo: 'Trước khi đi',
  change: 'Đổi lịch',
  closure: 'Đóng cửa tạm thời',
  checkSite: 'Kiểm tra thông tin địa điểm cụ thể. Giờ hoạt động có thể thay đổi.',
  hoursVary: 'Giờ hoạt động và mức sẵn có khác nhau.',
  MONDAY: 'Thứ Hai',
  TUESDAY: 'Thứ Ba',
  WEDNESDAY: 'Thứ Tư',
  THURSDAY: 'Thứ Năm',
  FRIDAY: 'Thứ Sáu',
  SATURDAY: 'Thứ Bảy',
  SUNDAY: 'Chủ Nhật',
  daysOfTheWeek: "Ngày trong tuần",
  schedule: "Lịch hẹn",
  nonPerish: 'chỉ có đồ ăn không dễ ôi thiu',
  freshOnly: 'chỉ có nông sản tươi',
  breakfastLunch: 'bữa sáng và bữa trưa',
  tenMeals: 'Thực phẩm tươi sống và các bữa ăn được cung cấp trong tuần.',
  oneMeal: '1 bữa ăn mỗi cư dân',
  driveThrough: {
    dt: 'Lái xe qua',
    wu: 'Đi bộ vào',
    both: 'Lái xe qua & đi bộ vào',
  },
  sections: {
    foodSites: {
      header: 'Các điểm phát thực phẩm',
      eligibility: 'Kiểm tra thông tin địa điểm cụ thể. ',
      pickupDetails: 'Cư dân có thể nhận thực phẩm bổ sung cho hộ gia đình của mình.',
      subsections: {
        'PPR': {
          name: 'Các trung tâm của Philadelphia Parks & Recreation',
          pickupDetails: '',
        },
      },
    },
    studentMealSites: {
      header: 'Các điểm phát bữa ăn học sinh',
      eligibility: 'Tất cả trẻ em và thanh thiếu niên đều có thể được phục vụ. Không cần giấy tờ tùy thân. ',
      pickupDetails: '',
      subsections: {
        'PSD': {
          name: 'Các trường của Học khu Philadelphia',
          hidePickupDetailsInGreeting: true,
          pickupDetails: '',
          eligibility: 'Tất cả trẻ em và thanh thiếu niên đều đủ điều kiện. Không cần ID.',
        },
        'PHA': {
          name: 'Các trung tâm cộng đồng của Philadelphia Housing Authority (PHA)',
          hidePickupDetailsInGreeting: true,
          pickupDetails: 'Thứ Hai, 9:00 sáng – 10:00 sáng và 12:00 trưa – 2:00 chiều<br>\
          Thứ Ba 9:00 sáng – 10:00 sáng và 12:00 trưa – 2:00 chiều<br>\
          Thứ Tư 9:00 sáng – 10:00 sáng và 12:00 trưa – 2:00 chiều<br>\
          Thứ Năm 9:00 sáng – 10:00 sáng và 12:00 trưa – 2:00 chiều<br>\
          Thứ Sáu 9:00 sáng – 10:00 sáng và 12:00 trưa – 2:00 chiều<br>\
          Phải ăn tại chỗ. Để biết thêm thông tin, xin tới địa điểm.',
          eligibility: 'Tất cả trẻ em và thanh thiếu niên đều đủ điều kiện. Không cần ID.',
        },
        'CHARTER': {
          name: 'Các trường công đặc quyền',
          pickupDetails: '',
          eligibility: 'Tất cả trẻ em và thanh thiếu niên đều đủ điều kiện. Không cần ID.',
          hidePickupDetailsInGreeting: true,
        },
        'PPR_StudentMeals': {
          name: 'Các trung tâm của Philadelphia Parks & Recreation',
          hidePickupDetailsInGreeting: true,
          pickupDetails: 'Các bữa ăn có sẵn:<br>\
           28 - 30 tháng 12, 3 tháng 1, 1 tháng 2, 11 - 14 tháng 4. <br>\
           Giờ ăn và giờ của Trung tâm Giải trí thay đổi tùy theo địa điểm. Tất cả các bữa ăn phải được ăn tại chỗ. Để biết thêm thông tin, vui lòng gọi hoặc truy cập Trung tâm Giải trí. ',
          eligibility: 'Tất cả trẻ em và thanh thiếu niên đều đủ điều kiện. Không cần ID.',

        },
        'playstreets': {
          name: 'Playstreets (Chơi trên đường phố)',
          hidePickupDetailsInGreeting: true,
          pickupDetails: 'Playstreets mở cửa từ Thứ Hai đến Thứ Sáu, từ 10 giờ sáng đến 4 giờ chiều. Cấm ô tô lưu thông ở đây. Giờ phục vụ bữa ăn thay đổi tùy theo địa điểm. Để biết thêm thông tin, xin tới Playstreets<br>\
          Playstreets phục vụ bữa trưa và bữa ăn nhẹ.',
          eligibility: 'Tất cả trẻ em và thanh thiếu niên đều đủ điều kiện. Không cần ID.',
        },
        'NDS': {
          name: 'Dịch vụ Phát triển Dinh dưỡng',
          hidePickupDetailsInGreeting: true,
          pickupDetails: 'Các địa điểm có thể cung cấp bữa ăn hàng ngày hoặc bữa sáng và hộp ăn trưa 7 ngày. Liên hệ với Dịch vụ Phát triển Dinh dưỡng để biết thêm thông tin chi tiết.',
          eligibility: 'Tất cả trẻ em và thanh thiếu niên đều đủ điều kiện. Không cần ID.',
        },
        'Other': {
          name: 'Các Địa điểm Bữa ăn Mùa hè Khác',
          hidePickupDetailsInGreeting: true,
          pickupDetails: 'Giờ cung cấp bữa ăn thay đổi tùy theo địa điểm. Để biết thêm thông tin, hãy ghé thăm các địa điểm bữa ăn mùa hè.',
          eligibility: 'Tất cả trẻ em và thanh thiếu niên đều đủ điều kiện. Không cần ID.',
        },
        'Recreation Center': {
          name: 'Trung tâm Giải trí',
          hidePickupDetailsInGreeting: true,
          pickupDetails: 'Thứ Hai đến thứ Sáu, từ 9giờ sáng đến 3 giờ chiều. Giờ phục vụ bữa ăn thay đổi tùy theo địa điểm. Phải ăn tại chỗ.Để biết thêm thông tin, vui lòng gọi hoặc truy cập Trung tâm Giải trí. ',
          eligibility: 'Tất cả trẻ em và thanh thiếu niên đều đủ điều kiện. Không cần ID.',
        },
        'Caring for Friends': {
          name: 'Caring for Friends',
          hidePickupDetailsInGreeting: true,
          pickupDetails: 'Phải ăn tại chỗ. Liên hệ địa điểm để biết thêm chi tiết. ',
          eligibility: 'Tất cả trẻ em và thanh thiếu niên đều có thể tham gia. Không cần giấy tờ tùy thân.',
        },
        'Philabundance Summer Meal Sites': {
          name: 'Địa điểm phục vụ bữa ăn mùa hè Philabundance  ',
          hidePickupDetailsInGreeting: true,
          pickupDetails: 'Liên hệ địa điểm để biết thêm chi tiết.',
          eligibility: 'Tất cả trẻ em và thanh thiếu niên đều có thể tham gia. Không cần giấy tờ tùy thân.',
        },
        'Other Summer Meal Sites':{
          name: 'Địa điểm phục vụ bữa ăn mùa hè khác',
          hidePickupDetailsInGreeting: true,
          pickupDetails: 'Giờ phục vụ bữa ăn thay đổi tùy theo địa điểm. Phải ăn tại chỗ. Để biết thêm thông tin, xin tới địa điểm phục vụ bữa ăn mùa hè. ',
          eligibility: 'Tất cả trẻ em và thanh thiếu niên đều có thể tham gia. Không cần giấy tờ tùy thân.',
        },
      },
      custom: {
        info: '\
        Để tìm thêm địa điểm phục vụ bữa ăn mùa hè miễn phí cho trẻ em và thanh thiếu niên: \
        <br><ul><li>Gọi cho Đường dây nóng Bữa ăn Mùa hè theo số <a href="tel:215-770-4659">215-770-4659</a>.</li>   \
        <li>Soạn tin “FOOD” hoặc “COMIDA” gửi <a href="tel:304-304">304-304</a> để nhận danh sách các địa điểm phục vụ bữa ăn gần đó. </li> \
        <li>Truy cập <a target="_blank" href="http://www.phillysummermeals.org">www.phillysummermeals.org</a> để tìm các bữa ăn mùa hè miễn phí cho thanh thiếu niên. </li></ul> \
        ',
        // info: ' Truy cập trang <a href="https://www.philasd.org/foodservices/">Dịch Vụ Thực Phẩm của Học Khu Philadelphia</a> để biết thông tin về dịch vụ bữa ăn tại trường cho học sinh. <br>\
        // Ngoài ra, các chương trình Ngoài Giờ Học còn phục vụ đồ ăn nhẹ và các bữa ăn cho thanh thiếu niên. \
        // Truy cập <a href="https://www.phila.gov/ost/program-locator/#/">OST Program Locator</a> để tìm một chương trình và tìm hiểu thêm.',
      },
    },
    olderAdultMealSites: {
      header: 'Các điểm phát bữa ăn cho người già',
      eligibility: '\
      Dành cho những người lớn từ 60 tuổi trở lên, tại các địa điểm được Hiệp Hội Người Cao Niên Philadelphia (Philadelphia Corporation for Aging, PCA) hỗ trợ. \
        <i><b>Người cao niên phải gọi điện trước để đặt trước bữa ăn trước khi đến nhận bữa ăn.</b></i><br>\
        Người lớn từ 55 tuổi trở lên đủ điều kiện tại các trung tâm dành cho người già của Parks & Recreation. <br>\
        Không cần đặt trước.\
      ',
      pickupDetails: '',
      subsections: {
        'PCA': {
          name: 'Các điểm do PCA hỗ trợ',
          eligibility: '\
          Dành cho những người lớn từ 60 tuổi trở lên, tại các địa điểm được Hiệp Hội Người Cao Niên Philadelphia (Philadelphia Corporation for Aging, PCA) hỗ trợ. \
          <i><b>Người cao niên phải gọi điện trước để đặt trước bữa ăn trước khi đến nhận bữa ăn.</b></i><br>\
          ',
          pickupDetails: "\
          Người cao niên có thể đặt trước 5 đến 7 bữa ăn mỗi tuần.\
          Ngày và giờ đến lấy bữa ăn sẽ khác nhau tùy theo địa điểm. \
          Để biết thêm thông tin và đặt trước bữa ăn, vui lòng liên hệ với một địa điểm cụ thể.\
          Gia đình của người lớn tuổi có thể đến nhận bữa ăn, nếu có sắp xếp trước. Để được trợ giúp bằng các \
          ngôn ngữ khác ngoài tiếng Anh, hãy gọi đến đường dây trợ giúp của PCA theo số\
            <b><a class='underlined' href='tel:+12157659040'>(215) 765-9040</a></b>.\
          ",
        },
        'PPR_Senior': {
          name: 'Các trung tâm dành cho người già của Parks & Recreation',
          eligibility: '\
          Dành cho những người lớn từ 55 tuổi trở lên, tại các Trung tâm giải trí & Công viên dành cho người cao niên. Không cần đặt trước.\
          ',
          pickupDetails: '\
          Người lớn tuổi có thể đến nhận 5 bữa ăn mỗi tuần tại hầu hết các địa điểm.\
          ',
        },
      },
    },
    generalMealSites: {
      header:  'Các Các địa điểm cung cấp suất ăn theo bữa',
      eligibility: 'Bất cứ cư dân nào cũng đều đủ điều kiện. Không cần ID hay bằng chứng thu nhập.',
      pickupDetails: '',
      subsections: {
        'compiled': {
          name: 'Các Các địa điểm cung cấp suất ăn theo bữa',
          pickupDetails: 'Ngày và giờ khác nhau giữa các điểm. ',
        },
      },
    },
    communityRefrigerators: {
      header:  'Tủ Lạnh Cộng Đồng',
      eligibility: 'Bất cứ ai cũng có thể đến một Tủ Lạnh Cộng Đồng để lấy thực phẩm. ',
      pickupDetails: 'Tủ Lạnh Cộng Đồng mở 24 giờ một ngày, 7 ngày một tuần và bất cứ ai cũng có thể lấy thực phẩm có sẵn bất kỳ lúc nào. \
      Tủ Lạnh Cộng Đồng được điều hành bởi các tổ chức dựa trên cộng đồng và các tình nguyện viên. \
      Tính sẵn có của thực phẩm sẽ thay đổi dựa vào đóng góp.  \
      Hãy truy cập từng trang web Tủ Lạnh Cộng Đồng để biết thêm chi tiết. ',
      subsections: {
        'compiled': {
          name: 'Tủ Lạnh Cộng Đồng',
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
      header: 'Tìm thêm các nguồn thực phẩm miễn phí và các hỗ trợ khác: ',
      intro: '',
      li1: 'Gọi đến số <a href="tel:+311">311</a>. Gọi trước cho phòng pantry để xác nhận giờ của họ.',
      li2: 'Trang  <a href="https://www.phila.gov/departments/office-of-homeless-services/">web của Office of Homeless Services</a> có liệt kê nhiều điểm phát bữa ăn miễn phí hơn. ',
      li3: '<a href="https://communityresourceconnects.org/">Community Resource Connects</a> có thực phẩm và các nguồn lực khác.',
      h2:'Nhận trợ giúp đăng ký các lợi ích: ',
      li21:'<a href="https://www.phila.gov/programs/benephilly/">BenePhilly </a> nhận trợ giúp đăng ký các lợi ích công cộng. Gọi đến số 1-833-373-5868. ',
      li22:'<a href="https://www.hungercoalition.org/">Coalition Against Hunger  </a>trợ giúp đăng ký SNAP. Gọi đến số 215-430-0556 ',
      li23:'Đăng ký trước cho WIC ở <a href="https://www.pawic.com/OnlineApplication.aspx">PA WIC. </a> WIC giúp phụ nữ, trẻ sơ sinh và trẻ em dưới 5 tuổi nhận được thông tin về dinh dưỡng và thực phẩm lành mạnh.',
    },
  },
};
