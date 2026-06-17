const products = [
  // 休閒服飾 (Casual) - 4 products
  {
    id: 1,
    name: "經典奢華小白鞋 (Classic White Sneakers)",
    category: "casual",
    categoryName: "休閒服飾",
    price: 3280,
    image: "images/casual_1.png",
    description: "採用頂級全粒面牛皮手工打造，簡約流線型設計。搭載高彈性防滑橡膠大底與極致透氣皮革內襯，無論日常漫步還是商務休閒，皆能展現品味與舒適。",
    rating: 4.8,
    reviews: 142,
    features: [
      "手工精選頂級牛皮鞋面",
      "人體工學緩震乳膠鞋墊",
      "耐磨防滑高分子橡膠大底",
      "簡約現代美學百搭設計"
    ]
  },
  {
    id: 2,
    name: "復古街潮高筒帆布鞋 (Retro Canvas Shoes)",
    category: "casual",
    categoryName: "休閒服飾",
    price: 1980,
    image: "images/casual_2.png",
    description: "經典高筒設計結合鮮豔復古色系，甄選雙層高密度帆布材質，具有防潑水塗層。鞋頭採用加固橡膠防撞設計，是您街頭潮流穿搭的絕佳伴侶。",
    rating: 4.6,
    reviews: 98,
    features: [
      "高密度防撕裂帆布材質",
      "加厚耐磨防撞橡膠鞋頭",
      "加彈硫化大底，抓地力強",
      "透氣排汗舒適內襯"
    ]
  },
  {
    id: 3,
    name: "超輕量機能網面慢跑鞋 (Lightweight Running Shoes)",
    category: "casual",
    categoryName: "休閒服飾",
    price: 3680,
    image: "images/casual_3.png",
    description: "專為城市跑者與久站族群設計。極致羽量化飛織鞋面，提供如第二層肌膚般貼合與散熱性能。搭載獨家爆米花科技中底，回彈反饋提升30%。",
    rating: 4.9,
    reviews: 215,
    features: [
      "一體成型飛織高透氣網面",
      "高科技減震爆米花回彈中底",
      "夜間反光安全貼條設計",
      "超羽量級無重力穿著體驗"
    ]
  },
  {
    id: 4,
    name: "舒適極簡編織懶人鞋 (Slip-on Loafers)",
    category: "casual",
    categoryName: "休閒服飾",
    price: 2480,
    image: "images/casual_4.png",
    description: "免綁鞋帶的一秒穿脫設計，優雅針織紋理，完美貼合腳背。超輕盈發泡大底，讓您的每一步都像踩在雲端上，是週末渡假與日常休閒的首選。",
    rating: 4.7,
    reviews: 87,
    features: [
      "彈力針織貼合鞋面",
      "一秒套入輕鬆穿脫",
      "抑菌防臭透氣鞋墊",
      "超輕量發泡EVA防滑大底"
    ]
  },

  // 正式服飾 (Formal) - 4 products
  {
    id: 5,
    name: "尊爵紳士手工真皮牛津鞋 (Premium Leather Oxfords)",
    category: "formal",
    categoryName: "正式服飾",
    price: 5800,
    image: "images/formal_1.png",
    description: "精選頂級義大利植鞣皮，由資深鞋匠手工上色雕花。固特異沿條工藝縫製，堅固耐穿。鞋底散發尊貴奢華質感，完美襯托商務精英的專業形象。",
    rating: 4.9,
    reviews: 74,
    features: [
      "義大利進口頂級牛皮面料",
      "手工精緻雕花橫條設計",
      "經典固特異工藝沿條結構",
      "真皮透氣大底搭配防滑貼片"
    ]
  },
  {
    id: 6,
    name: "優雅仕紳麂皮德比鞋 (Elegant Suede Derby Shoes)",
    category: "formal",
    categoryName: "正式服飾",
    price: 4500,
    image: "images/formal_2.png",
    description: "採用觸感細緻的頂級進口麂皮，低調沉穩的普魯士藍色調，配以精緻手工縫線。開放式襟片設計更貼合亞洲人高腳背腳型，提供從容優雅的著用體驗。",
    rating: 4.7,
    reviews: 63,
    features: [
      "頂級進口防水細絨麂皮",
      "開放式襟片設計，腳背不壓迫",
      "高密度吸震橡膠發泡鞋底",
      "雅痞風範，正式與休閒完美切換"
    ]
  },
  {
    id: 7,
    name: "職場女王經典漆皮高跟鞋 (Professional High Heels)",
    category: "formal",
    categoryName: "正式服飾",
    price: 4980,
    image: "images/formal_3.png",
    description: "專為現代職場女性設計的 7cm 黄金比例高跟鞋。極致高雅的黑色鏡面漆皮，搭配貼合足弓的隱形乳膠緩震墊，久站不累，氣場全開。",
    rating: 4.8,
    reviews: 112,
    features: [
      "奢華亮面防刮漆皮鞋面",
      "人體工學隱形三點防滑足弓支撐",
      "精確 7cm 美腿黃金高度細跟",
      "超靜音耐磨鞋跟天皮設計"
    ]
  },
  {
    id: 8,
    name: "雅痞風範馬銜扣真皮樂福鞋 (Classic Leather Loafers)",
    category: "formal",
    categoryName: "正式服飾",
    price: 5200,
    image: "images/formal_4.png",
    description: "經典馬銜扣點綴，精緻壓花光澤皮革。免繫帶優雅一腳蹬，後跟可折疊作踩後跟便鞋使用。既有紳士的穩重，又不失度假的隨性。",
    rating: 4.6,
    reviews: 55,
    features: [
      "經典復古金屬馬銜扣金屬件",
      "精緻壓紋軟牛皮鞋面",
      "兩穿式軟後跟折疊設計",
      "吸汗防潮全皮鞋墊"
    ]
  },

  // 飾品 (Accessories) - 3 products
  {
    id: 9,
    name: "炫彩極光夜光反光鞋帶 (Glow Shoelaces)",
    category: "accessories",
    categoryName: "飾品",
    price: 390,
    image: "images/access_1.png",
    description: "採用高科技發光纖維與 3M 超強反光絲編織而成，在黑暗中能發出耀眼霓虹光芒。不論是夜跑安全提升還是潮流夜店穿搭，都是全場焦點。",
    rating: 4.5,
    reviews: 189,
    features: [
      "3M 高感光反光絲材質",
      "蓄光發光纖維，持久釋放夜光",
      "雙層緊密編織，不易鬆脫",
      "120cm/140cm 多尺碼可選"
    ]
  },
  {
    id: 10,
    name: "復古英倫雕花金屬鞋扣 (Vintage Metal Shoe Charms)",
    category: "accessories",
    categoryName: "飾品",
    price: 680,
    image: "images/access_2.png",
    description: "以黃銅合金純手工鑄造，帶有濃郁的復古英倫巴洛克雕花。能輕易夾於鞋帶或鞋舌上，為平凡的皮鞋或休閒鞋增添不可忽視的精緻細節。",
    rating: 4.7,
    reviews: 42,
    features: [
      "精選抗氧化黃銅合金材質",
      "手工拋光打磨與巴洛刻雕刻",
      "加固夾緊按扣，不易滑落遺失",
      "一盒兩入，專屬禮盒包裝"
    ]
  },
  {
    id: 11,
    name: "竹炭機能抗菌無痕透氣襪 (Seamless Breathable Socks)",
    category: "accessories",
    categoryName: "飾品",
    price: 450,
    image: "images/access_3.png",
    description: "精選天然竹炭纖維編織，具備優異的物理抗菌與防臭效果。無接縫線頭設計防摩擦起泡，後跟搭載三條醫用級矽膠防滑條，徹底告別滑脫困擾。",
    rating: 4.8,
    reviews: 320,
    features: [
      "天然竹炭纖維吸濕排汗防臭",
      "仿手工無縫縫頭，零摩擦感",
      "後跟 3D 矽膠防滑止滑設計",
      "高彈力足弓加壓支撐環"
    ]
  },

  // 配件 (Gear) - 3 products
  {
    id: 12,
    name: "天然紅雪松實木防潮防皺鞋撐 (Cedar Shoe Trees)",
    category: "gear",
    categoryName: "配件",
    price: 1280,
    image: "images/gear_1.png",
    description: "精選北美頂級天然紅雪松木手工打磨，散發淡淡的木質香氣，自然吸附鞋內濕氣並物理防霉防蟲。雙向彈簧設計，能完美撐起鞋頭，防止皮革起皺變形。",
    rating: 4.9,
    reviews: 156,
    features: [
      "北美紅雪松實木（無漆無蠟）",
      "自然香氣，抑菌除臭防潮",
      "前掌雙向自動寬度彈簧延展",
      "精裝黃銅提環，取放優雅流暢"
    ]
  },
  {
    id: 13,
    name: "奢華頭層牛皮把手金屬鞋拔 (Ergonomic Shoe Horn)",
    category: "gear",
    categoryName: "配件",
    price: 750,
    image: "images/gear_2.png",
    description: "符合人體工學的流線曲率，滑順保護鞋後跟免受踩踏變形。手把處包裹頂級頭層鞍皮，手工縫製油邊，金屬主體極致堅固不彎折，是精緻生活的必備之物。",
    rating: 4.8,
    reviews: 58,
    features: [
      "加厚不鏽鋼主體，堅固耐用",
      "頭層小牛皮手工包邊把手",
      "防滑指凹人體工學順滑曲率",
      "配有精緻掛繩，便於玄關收納"
    ]
  },
  {
    id: 14,
    name: "航天級奈米強效防水防污噴霧 (Waterproof Spray)",
    category: "gear",
    categoryName: "配件",
    price: 490,
    image: "images/gear_3.png",
    description: "採用領先的荷葉效應奈米防水技術，噴灑後在鞋履表面形成隱形保護膜。強力阻隔水滴、髒污、油脂，同時完全不影響面料的透氣性，一噴防護長達30天。",
    rating: 4.7,
    reviews: 289,
    features: [
      "全新奈米荷葉物理斥水技術",
      "無色無味，不傷面料不褪色",
      "適用於真皮、麂皮、網布及帆布",
      "防護抗污效果持久，高容量裝"
    ]
  },

  // 其它類 (Others) - 2 products
  {
    id: 15,
    name: "超高硬度磁吸側開透明鞋盒 (Magnetic Shoe Box)",
    category: "others",
    categoryName: "其它類",
    price: 890,
    image: "images/other_1.png",
    description: "精選高純度防黃變 PET 材質，全透明面板如藝術展櫃般呈現珍藏球鞋。加厚框架結構，承重力極強，可多層安全疊加。強磁側開關門，取放球鞋優雅便利。",
    rating: 4.8,
    reviews: 183,
    features: [
      "抗紫外線防黃變高透明 PET 面板",
      "卡槽疊加卡扣設計，安全不傾倒",
      "超大空間，高筒籃球鞋輕鬆收納",
      "強力磁鐵吸附門板，防塵防潮"
    ]
  },
  {
    id: 16,
    name: "專業球鞋全效深層清潔保養組 (Deep Cleaning Kit)",
    category: "others",
    categoryName: "其它類",
    price: 650,
    image: "images/other_2.png",
    description: "全套包含98%天然成分清潔液、進口硬毛刷（用於鞋底橡膠）與軟豬鬃毛刷（用於麂皮鞋面）、超細纖維吸水布。溫和而強效去污，溫柔對待您的愛鞋。",
    rating: 4.7,
    reviews: 142,
    features: [
      "98% 天然椰子油與荷荷巴油提煉液",
      "雙硬度專業清潔刷（硬毛+軟毛）",
      "免水洗配方，快速去污去黃",
      "贈超細纖維雙面吸水擦鞋巾"
    ]
  }
];

// 匯出產品以供其他頁面讀取（如果是在模組化環境），但在純網頁環境中我們直接掛在 window 上
if (typeof window !== 'undefined') {
  window.products = products;
}
