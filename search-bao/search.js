// Object mapping cho các mục menu
const contentMap = {
   "Địa Điểm": {
  Bắc: {
    mainContent: {
      imageSrc: "../image/halong.png",
      title: "Vịnh Hạ Long",
      description: "Vịnh Hạ Long, di sản UNESCO, 1.969 đảo đá vôi, hang động kỳ vĩ. Gợi ý: Chèo kayak, du thuyền."
    },
    imgtilte2_1: {
      imageSrc: "../image/trangan.png",
      title: "Tràng An",
      description: "Tràng An, di sản UNESCO, sông Ngô Đồng, hang động, cố đô Hoa Lư. Gợi ý: Du thuyền Tam Cốc."
    },
    imgtilte2_2: {
      imageSrc: "../image/hanoi.png",
      title: "Hà Nội",
      description: "Hà Nội, thủ đô nghìn năm văn hiến, Hồ Gươm, Phố Cổ, Văn Miếu. Gợi ý: Chợ Đồng Xuân."
    },
    imgtilte3_1: {
      imageSrc: "../image/haiphong.png",
      title: "Hải Phòng",
      description: "Hải Phòng, thành phố cảng, hoa phượng đỏ, Cát Bà. Gợi ý: Khu du lịch Đồ Sơn."
    },
    imgtilte3_2: {
      imageSrc: "../image/sapa.png",
      title: "Sa Pa",
      description: "Sa Pa, khí hậu mát mẻ, văn hóa dân tộc, cảnh núi non. Gợi ý: Chợ đêm Sa Pa."
    },
  },
  Trung: {
    mainContent: {
      imageSrc: "../image/hue.png",
      title: "Huế",
      description: "Huế, cố đô, di sản UNESCO, kinh thành, nhã nhạc cung đình. Gợi ý: Tham quan lăng tẩm."
    },
    imgtilte2_1: {
      imageSrc: "../image/danang.png",
      title: "Đà Nẵng",
      description: "Đà Nẵng, bãi biển Mỹ Khê, cầu Rồng, thành phố đáng sống. Gợi ý: Ngũ Hành Sơn."
    },
    imgtilte2_2: {
      imageSrc: "../image/hoian.png",
      title: "Phố Cổ Hội An",
      description: "Phố cổ Hội An, di sản UNESCO, đèn lồng, thương cảng cổ. Gợi ý: Chợ đêm Hội An."
    },
    imgtilte3_1: {
      imageSrc: "../image/vinh.png",
      title: "Vinh",
      description: "Vinh, trung tâm Bắc Trung Bộ, sông Lam, di tích lịch sử. Gợi ý: Thành cổ Vinh."
    },
    imgtilte3_2: {
      imageSrc: "../image/khanhhoa.png",
      title: "Khánh Hòa",
      description: "Khánh Hòa, vịnh Nha Trang, văn hóa Chăm Pa. Gợi ý: Tháp Bà Ponagar."
    },
  },
  Nam: {
    mainContent: {
      imageSrc: "../image/hcm.png",
      title: "TP. Hồ Chí Minh",
      description: "TP.HCM, trung tâm kinh tế, Dinh Độc Lập, chợ Bến Thành. Gợi ý: Phố đi bộ Nguyễn Huệ."
    },
    imgtilte2_1: {
      imageSrc: "../image/cantho.png",
      title: "Cần Thơ",
      description: "Cần Thơ, chợ nổi Cái Răng, văn hóa miền Tây. Gợi ý: Du thuyền sông Hậu."
    },
    imgtilte2_2: {
      imageSrc: "../image/phuquoc.png",
      title: "Phú Quốc",
      description: "Phú Quốc, thiên đường biển đảo, bãi Sao, làng chài. Gợi ý: Vinpearl Safari."
    },
    imgtilte3_1: {
      imageSrc: "../image/dalat.png",
      title: "Đà Lạt",
      description: "Đà Lạt, thành phố ngàn hoa, khí hậu mát mẻ. Gợi ý: Hồ Xuân Hương."
    },
    imgtilte3_2: {
      imageSrc: "../image/tayninh.png",
      title: "Tây Ninh",
      description: "Tây Ninh, núi Bà Đen, trung tâm tâm linh. Gợi ý: Chùa Bà Đen."
    },
  },
},
    "Văn Hoá": {
    Bắc: {
      mainContent: {
        imageSrc: "../image/nguqua.png",
        title: "Mâm Ngũ Quả",
        description: "Mâm ngũ quả Tết, biểu tượng ngũ hành, cầu phúc lộc. Gợi ý: Chuối, bưởi, cam tại Hà Nội."
      },
      imgtilte2_1: {
        imageSrc: "../image/aodai.png",
        title: "Áo Dài",
        description: "Áo dài, trang phục truyền thống, biểu tượng phụ nữ Việt. Gợi ý: Lễ hội áo dài Hà Nội."
      },
      imgtilte2_2: {
        imageSrc: "../image/chuahuong.png",
        title: "Lễ Hội Chùa Hương",
        description: "Lễ hội chùa Hương, cầu may đầu năm. Gợi ý: Chùa Hương (Hà Nội)."
      },
      imgtilte3_1: {
        imageSrc: "../image/banhchung.png",
        title: "Bánh Chưng",
        description: "Bánh chưng Tết, biểu tượng đất trời, lòng biết ơn. Gợi ý: Làng bánh chưng Tranh Khúc (Hà Nội)."
      },
      imgtilte3_2: {
        imageSrc: "../image/music.png",
        title: "Nhạc Dân Tộc",
        description: "Nhạc dân tộc miền Bắc, sáo trúc, đàn bầu. Gợi ý: Nhà hát Lớn Hà Nội."
      },
    },
    Trung: {
      mainContent: {
        imageSrc: "../image/hue.png",
        title: "Cố Đô Huế",
        description: "Cố đô Huế, di sản UNESCO, kiến trúc cung đình. Gợi ý: Kinh thành Huế."
      },
      imgtilte2_1: {
        imageSrc: "../image/hoian.png",
        title: "Phố Cổ Hội An",
        description: "Phố cổ Hội An, di sản UNESCO, đèn lồng rực rỡ. Gợi ý: Hội An (Quảng Nam)."
      },
      imgtilte2_2: {
        imageSrc: "../image/myson.png",
        title: "Thánh Địa Mỹ Sơn",
        description: "Thánh địa Mỹ Sơn, di tích Chăm Pa cổ. Gợi ý: Mỹ Sơn (Quảng Nam)."
      },
      imgtilte3_1: {
        imageSrc: "../image/cau ngu.png",
        title: "Lễ Hội Cầu Ngư",
        description: "Lễ hội Cầu Ngư, cầu mưa thuận gió hòa. Gợi ý: Lễ hội tại Phú Yên."
      },
      imgtilte3_2: {
        imageSrc: "../image/banhtet.png",
        title: "Bánh Tét",
        description: "Bánh tét Tết, gắn kết gia đình, hồn quê. Gợi ý: Làng bánh tét Trà Cuôn (Huế)."
      },
    },
    Nam: {
      mainContent: {
        imageSrc: "../image/nguqua_nam.png",
        title: "Mâm Ngũ Quả",
        description: "Mâm ngũ quả Nam, cầu vừa đủ xài. Gợi ý: Dưa hấu, mãng cầu tại TP.HCM."
      },
      imgtilte2_1: {
        imageSrc: "../image/tongon.png",
        title: "Lễ Hội Tống Ôn",
        description: "Lễ hội Tống Ôn, xua đuổi điều xấu. Gợi ý: Chùa Ông (Cần Thơ)."
      },
      imgtilte2_2: {
        imageSrc: "../image/duabo.png",
        title: "Lễ Hội Đua Bò",
        description: "Lễ hội đua bò Bảy Núi, văn hóa Khmer. Gợi ý: Tri Tôn (An Giang)."
      },
      imgtilte3_1: {
        imageSrc: "../image/kyyen.png",
        title: "Lễ Hội Kỳ Yên",
        description: "Lễ hội Kỳ Yên, cầu bình an, phát đạt. Gợi ý: Đình làng Cần Thơ."
      },
      imgtilte3_2: {
        imageSrc: "../image/chonoi.png",
        title: "Chợ Nổi",
        description: "Chợ nổi, nét văn hóa sông nước miền Tây. Gợi ý: Chợ nổi Cái Răng (Cần Thơ)."
      },
    },
  },
  "Ẩm Thực": {
  Bắc: {
    mainContent: {
      imageSrc: "../image/pho.png",
      title: "Phở",
      description: "Phở Hà Nội, nước dùng ngọt thanh, bún, thịt bò, rau thơm. Gợi ý: Phở Thìn Lò Đúc (13 Lò Đúc, Hà Nội)."
    },
    imgtilte2_1: {
      imageSrc: "../image/buncha.png",
      title: "Bún Chả",
      description: "Bún chả Hà Nội, chả nướng, nước mắm chua ngọt. Gợi ý: Bún chả Đắc Kim (1 Hàng Mành, Hà Nội)."
    },
    imgtilte2_2: {
      imageSrc: "../image/chaca.png",
      title: "Chả Cá",
      description: "Chả cá Lã Vọng, cá lăng nướng, mắm tôm, rau thơm. Gợi ý: Chả cá Lã Vọng (14 Chả Cá, Hà Nội)."
    },
    imgtilte3_1: {
      imageSrc: "../image/xoi.png",
      title: "Xôi Xéo",
      description: "Xôi xéo, nếp dẻo, đậu xanh, mỡ gà, hành phi. Gợi ý: Xôi xéo Oanh Oanh (573 Đê La Thành, Hà Nội)."
    },
    imgtilte3_2: {
      imageSrc: "../image/bunthang.png",
      title: "Bún Thang",
      description: "Bún thang, nước dùng ngọt, gà, tôm khô, rau răm. Gợi ý: Bún thang Bà Đức (48 Cầu Gỗ, Hà Nội)."
    },
  },
  Trung: {
    mainContent: {
      imageSrc: "../image/miquang.png",
      title: "Mì Quảng",
      description: "Mì Quảng, sợi mì vàng, nước dùng đậm, rau sống 9 vị. Gợi ý: Mì xứ Quảng (36 Tân Thắng, TP.HCM)."
    },
    imgtilte2_1: {
      imageSrc: "../image/bunbo.png",
      title: "Bún Bò Huế",
      description: "Bún bò Huế, nước dùng mắm ruốc, sả, thịt bò, giò heo. Gợi ý: Bún bò Mệ Kéo (20 Bạch Đằng, Huế)."
    },
    imgtilte2_2: {
      imageSrc: "../image/caolau.png",
      title: "Cao Lầu",
      description: "Cao lầu Hội An, mì vàng, thịt xá xíu, rau sống. Gợi ý: Cao lầu Bà Bé (Chợ Hội An, Quảng Nam)."
    },
    imgtilte3_1: {
      imageSrc: "../image/banhbeo.png",
      title: "Bánh Bèo Chén",
      description: "Bánh bèo Huế, bột gạo mỏng, nhân tôm, da heo chiên. Gợi ý: Bánh bèo chén Cô Xê (613 Nguyễn Tất Thành, Hội An)."
    },
    imgtilte3_2: {
      imageSrc: "../image/banhbotloc.png",
      title: "Bánh Bột Lọc",
      description: "Bánh bột lọc Huế, vỏ dai, nhân tôm thịt. Gợi ý: Bánh Huế Tin Tin (G3 Green Bay, Hà Nội)."
    },
  },
  Nam: {
    mainContent: {
      imageSrc: "../image/comtam.png",
      title: "Cơm Tấm",
      description: "Cơm tấm Sài Gòn, gạo tấm, sườn nướng, trứng ốp la. Gợi ý: Cơm tấm Ba Ghiền (84 Đặng Văn Ngữ, TP.HCM)."
    },
    imgtilte2_1: {
      imageSrc: "../image/bunmam.png",
      title: "Bún Mắm",
      description: "Bún mắm miền Tây, nước lèo mắm cá linh, rau sống. Gợi ý: Bún mắm Tám Dự (5/1 Khu Vực 3, Cần Thơ)."
    },
    imgtilte2_2: {
      imageSrc: "../image/hutieu.png",
      title: "Hủ Tiếu Nam Vang",
      description: "Hủ tiếu Nam Vang, nước dùng ngọt, thịt bằm, tôm. Gợi ý: Hủ tiếu Nhân Quán (13A Phan Đình Phùng, Cần Thơ)."
    },
    imgtilte3_1: {
      imageSrc: "../image/goicuon.png",
      title: "Gỏi Cuốn",
      description: "Gỏi cuốn, tôm, thịt, rau cuốn bánh tráng, chấm tương. Gợi ý: Gỏi cuốn Lê Văn Sĩ (359 Lê Văn Sỹ, TP.HCM)."
    },
    imgtilte3_2: {
      imageSrc: "../image/banhxeo.png",
      title: "Bánh Xèo",
      description: "Bánh xèo miền Tây, nhân tôm, thịt, giá đỗ, rau. Gợi ý: Bánh xèo 7 Tới (45 Hoàng Quốc Việt, Cần Thơ)."
    },
  },
},
  PodCast: {
    mainContent: {
      imageSrc: "../image/postcard1.png",
      title: "Chào mừng đến với PodCast",
      description:
        "Thiết kế và gửi những tấm bưu thiếp độc đáo để chia sẻ cảm xúc!",
    },
  },
  WebBlog: {
    Webblog1: {
      imageSrc: "../image/default.png",
      title: "Webblog1",
      description: "Khám phá bài viết thú vị.",
    },
    Webblog2: {
      imageSrc: "../image/default.png",
      title: "Webblog2",
      description: "Khám phá bài viết thú vị.",
    },
  },
  Video: {
    mainContent: {
      imageSrc: "../image/video1.jpg",
      title: "Video",
      description: "Xem các video hấp dẫn.",
    },
  },
};

// Dữ liệu tĩnh cho PostCast, WebBlog, Video (giả lập từ index.html)
const staticContent = {
  PodCast: [
    { title: "Hội An", description: "Hội An là một thành phố cổ nằm bên sông Thu Bồn, thuộc tỉnh Quảng Nam, nổi tiếng với vẻ đẹp cổ kính và bình yên. Phố cổ Hội An được UNESCO công nhận là Di sản Văn hóa Thế giới, nổi bật với những ngôi nhà mái ngói rêu phong, đèn lồng rực rỡ và kiến trúc pha trộn giữa Việt, Trung, Nhật, Pháp. Hội An hấp dẫn du khách bởi không gian trầm lắng, các lễ hội truyền thống, ẩm thực đặc sắc và những trải nghiệm như đi thuyền trên sông Hoài hay thả đèn hoa đăng vào ban đêm.", imageSrc: "../image/hoianpostcast.png" },
    { title: "Đà Lạt", description: "Đà Lạt là thành phố nằm trên cao nguyên Lâm Viên, tỉnh Lâm Đồng, nổi tiếng với khí hậu mát mẻ quanh năm, cảnh quan thơ mộng và kiến trúc cổ kính kiểu Pháp. Nơi đây được mệnh danh là thành phố ngàn hoa, thu hút du khách bởi rừng thông, hồ nước, thác đẹp, vườn hoa và không khí yên bình. Đà Lạt cũng là điểm đến lý tưởng cho nghỉ dưỡng, chụp ảnh và trải nghiệm ẩm thực độc đáo.", imageSrc: "../image/dalatpostcast.png" },
    { title: "Hà Giang", description: "Hà Giang là tỉnh địa đầu Tổ quốc, nằm ở vùng núi phía Bắc Việt Nam, nổi tiếng với cảnh quan hùng vĩ, hoang sơ và bản sắc văn hóa độc đáo. Nơi đây có những danh thắng như cao nguyên đá Đồng Văn, đèo Mã Pì Lèng, sông Nho Quế, cùng những mùa hoa tam giác mạch, mận, đào rực rỡ. Hà Giang không chỉ là nơi để chiêm ngưỡng núi non, mà còn là hành trình khám phá văn hóa của đồng bào các dân tộc như H’Mông, Dao, Lô Lô… – mộc mạc, chân thành và đầy bản sắc.", imageSrc: "../image/hagiangpostcast.png" },
    { title: "Hà Tiên", description: "Hà Tiên là một thị xã ven biển thuộc tỉnh Kiên Giang, nằm ở phía Tây Nam của Việt Nam, giáp Campuchia. Nơi đây nổi tiếng với vẻ đẹp hài hòa giữa biển, núi, hang động và sông hồ, mang đậm nét trữ tình và cổ kính. Những địa danh như Mũi Nai, Thạch Động, Đông Hồ, Núi Đá Dựng… không chỉ gắn với thiên nhiên mà còn ẩn chứa chiều sâu văn hóa – lịch sử. Hà Tiên mang một vẻ đẹp yên bình, không xô bồ, thích hợp cho những ai muốn tìm một chốn nhẹ nhàng để nghỉ ngơi và cảm nhận.", imageSrc: "../image/hatienpostcast.png" },
  ],
  WebBlog: [
    { title: "Tiêu đề bài viết 1", description: "Đoạn trích của bài viết blog 1...", imageSrc: "../image/default.png" },
    { title: "Tiêu đề bài viết 2", description: "Đoạn trích của bài viết blog 2...", imageSrc: "../image/default.png" },
  ],
  Video: [
    { title: "Tiêu đề Video 1", description: "Nội dung Video 1", imageSrc: "../image/video1.jpg" },
    { title: "Tiêu đề Video 2", description: "Nội dung Video 2", imageSrc: "../image/video2.jpg" },
  ],
};

// Xử lý hamburger menu
const list = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".Menu");

list.addEventListener("click", () => {
  list.classList.toggle("active");
  menu.classList.toggle("active");
});

// Xử lý tìm kiếm
const searchInput = document.querySelector(".search-bar input");
const searchButton = document.querySelector(".search-bar .search-btn");
const clearButton = document.querySelector(".search-bar .clear-search");
const resultsList = document.querySelector(".results-list");

function performSearch(keyword) {
  keyword = keyword.trim().toLowerCase();
  resultsList.innerHTML = "";

  if (!keyword) {
    resultsList.innerHTML = '<p>Vui lòng nhập từ khóa tìm kiếm.</p>';
    return;
  }

  let results = [];

  // Tìm trong contentMap
  for (const menuItem in contentMap) {
    const content = contentMap[menuItem];
    if (["PodCast", "WebBlog", "Video"].includes(menuItem)) {
      const fields = [
        { ...content.mainContent, type: "main", menu: menuItem, section: "mainContent" },
        ...(content.Webblog1 ? [{ ...content.Webblog1, type: "webblog", menu: menuItem, section: "Webblog1" }] : []),
        ...(content.Webblog2 ? [{ ...content.Webblog2, type: "webblog", menu: menuItem, section: "Webblog2" }] : []),
      ];
      fields.forEach((field) => {
        if (field.title?.toLowerCase().includes(keyword) || (field.description?.toLowerCase().includes(keyword))) {
          results.push({
            title: field.title,
            description: field.description,
            imageSrc: field.imageSrc,
            menu: menuItem,
            type: field.type,
            section: field.section,
          });
        }
      });
    } else {
      for (const region in content) {
        const regionContent = content[region];
        const fields = [
          { ...regionContent.mainContent, type: "main", menu: menuItem, section: "mainContent", region },
          { ...regionContent.imgtilte2_1, type: "imgtilte2", menu: menuItem, section: "imgtilte2_1", region },
          { ...regionContent.imgtilte2_2, type: "imgtilte2", menu: menuItem, section: "imgtilte2_2", region },
          { ...regionContent.imgtilte3_1, type: "imgtilte3", menu: menuItem, section: "imgtilte3_1", region },
          { ...regionContent.imgtilte3_2, type: "imgtilte3", menu: menuItem, section: "imgtilte3_2", region },
        ];
        fields.forEach((field) => {
          if (field.title?.toLowerCase().includes(keyword) || (field.description?.toLowerCase().includes(keyword))) {
            results.push({
              title: field.title,
              description: field.description,
              imageSrc: field.imageSrc,
              menu: menuItem,
              type: field.type,
              section: field.section,
              region,
            });
          }
        });
      }
    }
  }

  // Tìm trong staticContent
  for (const menuItem in staticContent) {
    staticContent[menuItem].forEach((item, index) => {
      if (item.title.toLowerCase().includes(keyword) || (item.description?.toLowerCase().includes(keyword))) {
        let section;
        if (menuItem === "PodCast") {
          section = `postcard${index + 1}`;
        } else if (menuItem === "WebBlog") {
          section = `Webblog${index + 1}`;
        } else if (menuItem === "Video") {
          section = index === 0 ? "mainContent" : `video${index + 1}`;
        }
        results.push({
          title: item.title,
          description: item.description,
          imageSrc: item.imageSrc,
          menu: menuItem,
          type: menuItem.toLowerCase(),
          section,
        });
      }
    });
  }

  // Loại bỏ trùng lặp
  results = [...new Set(results.map((r) => JSON.stringify(r)))].map((r) => JSON.parse(r));

  // Hiển thị kết quả
  if (results.length === 0) {
    resultsList.innerHTML = `<p>Không tìm thấy kết quả phù hợp.</p>`;
  } else {
    results.forEach((result) => {
      const resultItem = document.createElement("div");
      resultItem.classList.add("result-item");
      const regionParam = result.region ? `&region=${encodeURIComponent(result.region)}` : '';
      resultItem.innerHTML = `
        <img src="${result.imageSrc || "../image/default.png"}" alt="${result.title}" onerror="this.src='../image/default.png'" />
        <div class="result-content">
          <h2>${result.title}</h2>
          <p>${result.description || "Không có mô tả"}</p>
          <a href="bao.html?menu=${encodeURIComponent(result.menu)}&section=${encodeURIComponent(result.section)}&title=${encodeURIComponent(result.title)}${regionParam}" class="result-link">Xem chi tiết</a>
        </div>
      `;
      resultsList.appendChild(resultItem);
    });
  }
} 

// Lấy từ khóa từ URL
const urlParams = new URLSearchParams(window.location.search);
const initialKeyword = urlParams.get("q") || "";
searchInput.value = initialKeyword;
performSearch(initialKeyword);

// Sự kiện input để hiển thị/ẩn nút xóa
searchInput.addEventListener("input", () => {
  if (searchInput.value) {
    clearButton.classList.add("visible");
  } else {
    clearButton.classList.remove("visible");
  }
});

// Sự kiện xóa tìm kiếm
clearButton.addEventListener("click", () => {
  searchInput.value = "";
  clearButton.classList.remove("visible");
  window.location.href = "../Main/index.html"; // Điều hướng về trang chủ chính
});

// Sự kiện click nút tìm kiếm
searchButton.addEventListener("click", () => {
  performSearch(searchInput.value);
});
searchButton.addEventListener("touchstart", () => {
  performSearch(searchInput.value);
});

// Sự kiện nhấn Enter trong input
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    performSearch(searchInput.value);
  }
});