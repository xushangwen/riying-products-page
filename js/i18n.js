// ============================================================
// I18N — 国际化工具（中/英双语）
// ============================================================

function getLang() {
  return (new URLSearchParams(location.search)).get('lang') === 'en' ? 'en' : 'zh';
}

function isEn() { return getLang() === 'en'; }

function buildLangUrl(lang) {
  var p = new URLSearchParams(location.search);
  if (lang === 'zh') { p.delete('lang'); } else { p.set('lang', lang); }
  var qs = p.toString();
  return location.pathname + (qs ? '?' + qs : '');
}

var UI = {
  zh: {
    navProducts: ['感知', '传输', '控制', '执行'],
    backAll: '回到所有产品',
    backBtn: '返回',
    productCenter: '产品中心',
    sectionDesc: '产品描述',
    sectionFeats: '产品特点',
    sectionParams: '技术参数',
    seriesProducts: '同系列产品',
    currentTag: '当前',
    viewProduct: '查看产品',
    viewDetail: '查看详情',
    noProduct: '暂无产品',
    empty: '详细产品信息整理中，欢迎联系我们获取更多技术资料',
    emptyDetail: '产品详细规格整理中，欢迎联系我们获取技术参数',
    productCount: function(n) { return n + ' 款产品'; },
    bannerTitle: '产品中心',
    bannerDesc: '覆盖感知、传输、控制、执行四大领域<br>提供全链路汽车电子解决方案',
    bannerKicker: 'Products Center',
    footerLinks: ['来访路线', '在线反馈', '隐私保护', '法律条款'],
    copy: '©2026 江苏日盈电子股份有限公司 版权所有',
    addr: '江苏省常州市经开区潞横路2788号',
    navMenuItems: ['公司介绍', '产品中心', '人才招聘', '供应链', '投资者关系', '新闻中心', '联系我们'],
  },
  en: {
    navProducts: ['Sensing', 'Transmission', 'Control', 'Execution'],
    backAll: 'Back to All Products',
    backBtn: 'Back',
    productCenter: 'Products',
    sectionDesc: 'Product Description',
    sectionFeats: 'Key Features',
    sectionParams: 'Specifications',
    seriesProducts: 'Related Products',
    currentTag: 'Current',
    viewProduct: 'View Product',
    viewDetail: 'View Details',
    noProduct: 'Coming Soon',
    empty: 'Product details are being organized. Please contact us for more technical information.',
    emptyDetail: 'Detailed specifications are being organized. Please contact us for technical parameters.',
    productCount: function(n) { return n + (n === 1 ? ' Product' : ' Products'); },
    bannerTitle: 'Products',
    bannerDesc: 'Sensing · Transmission · Control · Execution<br>Full-chain Automotive Electronics Solutions',
    bannerKicker: 'Products Center',
    footerLinks: ['Visit Us', 'Feedback', 'Privacy', 'Legal'],
    copy: '©2026 Jiangsu Riying Electronics Co., Ltd. All Rights Reserved',
    addr: '2788 Luheng Road, Changzhou Economic Development Zone, Jiangsu',
    navMenuItems: ['About Us', 'Products', 'Careers', 'Supply Chain', 'Investor Relations', 'News', 'Contact'],
  }
};

function t(key) {
  var lang = getLang();
  return UI[lang][key] || UI['zh'][key];
}
