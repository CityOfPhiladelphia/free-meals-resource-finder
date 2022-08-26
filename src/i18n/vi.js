
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
  eligibility: 'Điều kiện hội đủ',
  pickupDetails: 'Chi tiết',
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
      pickupDetails: 'Ngày và giờ khác nhau giữa các điểm',
      subsections: {
        'PSD': {
          name: 'Các trường của Học khu Philadelphia',
          pickupDetails: '',
          eligibility: 'Tất cả trẻ em và thanh thiếu niên đều đủ điều kiện. Không cần ID.',
        },
        'PHA': {
          name: 'Các trung tâm cộng đồng của Philadelphia Housing Authority (PHA)',
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
          pickupDetails: 'Playstreets mở cửa từ Thứ Hai đến Thứ Sáu, từ 10 giờ sáng đến 4 giờ chiều. Cấm ô tô lưu thông ở đây. Giờ phục vụ bữa ăn thay đổi tùy theo địa điểm. Để biết thêm thông tin, xin tới Playstreets<br>\
          Playstreets phục vụ bữa trưa và bữa ăn nhẹ.',
          eligibility: 'Tất cả trẻ em và thanh thiếu niên đều đủ điều kiện. Không cần ID.',
        },
        'NDS': {
          name: 'Dịch vụ Phát triển Dinh dưỡng',
          pickupDetails: 'Các địa điểm có thể cung cấp bữa ăn hàng ngày hoặc bữa sáng và hộp ăn trưa 7 ngày. Liên hệ với Dịch vụ Phát triển Dinh dưỡng để biết thêm thông tin chi tiết.',
          eligibility: 'Tất cả trẻ em và thanh thiếu niên đều đủ điều kiện. Không cần ID.',
        },
        'Other': {
          name: 'Các Địa điểm Bữa ăn Mùa hè Khác',
          pickupDetails: 'Giờ cung cấp bữa ăn thay đổi tùy theo địa điểm. Để biết thêm thông tin, hãy ghé thăm các địa điểm bữa ăn mùa hè.',
          eligibility: 'Tất cả trẻ em và thanh thiếu niên đều đủ điều kiện. Không cần ID.',
        },
        'Recreation Center': {
          name: 'Trung tâm Giải trí',
          pickupDetails: 'Thứ Hai đến thứ Sáu, từ 9giờ sáng đến 3 giờ chiều. Giờ phục vụ bữa ăn thay đổi tùy theo địa điểm. Phải ăn tại chỗ.Để biết thêm thông tin, vui lòng gọi hoặc truy cập Trung tâm Giải trí. ',
          eligibility: 'Tất cả trẻ em và thanh thiếu niên đều đủ điều kiện. Không cần ID.',
        },
        'Caring for Friends': {
          name: 'Caring for Friends',
          pickupDetails: 'Phải ăn tại chỗ. Liên hệ địa điểm để biết thêm chi tiết. ',
          eligibility: 'Tất cả trẻ em và thanh thiếu niên đều có thể tham gia. Không cần giấy tờ tùy thân.',
        },
        'Philabundance Summer Meal Sites': {
          name: 'Địa điểm phục vụ bữa ăn mùa hè Philabundance  ',
          pickupDetails: 'Liên hệ địa điểm để biết thêm chi tiết.',
          eligibility: 'Tất cả trẻ em và thanh thiếu niên đều có thể tham gia. Không cần giấy tờ tùy thân.',
        },
        'Other Summer Meal Sites':{
          name: 'Địa điểm phục vụ bữa ăn mùa hè khác',
          pickupDetails: 'Giờ phục vụ bữa ăn thay đổi tùy theo địa điểm. Phải ăn tại chỗ. Để biết thêm thông tin, xin tới địa điểm phục vụ bữa ăn mùa hè. ',
          eligibility: 'Tất cả trẻ em và thanh thiếu niên đều có thể tham gia. Không cần giấy tờ tùy thân.',
        },
      },
      custom: {
        // info: '\
        // Để tìm thêm địa điểm phục vụ bữa ăn mùa hè miễn phí cho trẻ em và thanh thiếu niên: \
        // <br><ul><li>Gọi cho Đường dây nóng Bữa ăn Mùa hè theo số <a href="tel:215-770-4659">215-770-4659</a>.</li>   \
        // <li>Soạn tin “FOOD” hoặc “COMIDA” gửi <a href="tel:304-304">304-304</a> để nhận danh sách các địa điểm phục vụ bữa ăn gần đó. </li> \
        // <li>Truy cập <a target="_blank" href="http://www.phillysummermeals.org">www.phillysummermeals.org</a> để tìm các bữa ăn mùa hè miễn phí cho thanh thiếu niên. </li></ul> \
        // ',
        info: 'Kiểm tra lại để biết thông tin cập nhật về hoạt động phân phối thực phẩm trong thời gian nghỉ ở trường.<br>\
        Truy cập trang <a href="https://www.philasd.org/foodservices/">Dịch Vụ Thực Phẩm của Học Khu Philadelphia</a> để biết thông tin về dịch vụ bữa ăn tại trường cho học sinh.</li></ul>',
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
    foodPantries: {
      header: 'Tìm thêm các nguồn thực phẩm miễn phí và các hỗ trợ khác: ',
      intro: '',
      li1: 'Gọi đến số <a href="tel:+311">311</a>. Gọi trước cho phòng pantry để xác nhận giờ của họ.',
      li2: 'Trang  <a href="https://www.phila.gov/departments/office-of-homeless-services/">web của Office of Homeless Services</a> có liệt kê nhiều điểm phát bữa ăn miễn phí hơn. ',
      li3: '<a href="https://communityresourceconnects.org/">Community Resource Connects</a> có thực phẩm và các nguồn lực khác.',
      h2:'Nhận trợ giúp đăng ký các lợi ích: ',
      li21:'<a href="https://www.phila.gov/programs/benephilly/">BenePhilly </a> nhận trợ giúp đăng ký các lợi ích công cộng. Gọi đến số 1-844-848-4376. ',
      li22:'<a href="https://www.hungercoalition.org/">Coalition Against Hunger  </a>trợ giúp đăng ký SNAP. Gọi đến số 215-430-0556 ',
      li23:'Đăng ký trước cho WIC ở <a href="https://www.pawic.com/OnlineApplication.aspx">PA WIC. </a> WIC giúp phụ nữ, trẻ sơ sinh và trẻ em dưới 5 tuổi nhận được thông tin về dinh dưỡng và thực phẩm lành mạnh.',
    },
  },
};