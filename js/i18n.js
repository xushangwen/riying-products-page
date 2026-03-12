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
    navMenuItems: ['关于我们', '产品', '供应商', '联系我们', '社会责任'],
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
    navMenuItems: ['About Us', 'Products', 'Suppliers', 'Contact', 'SR'],
  }
};

var NAV_ZH = {
  nav_about:              '关于我们',
  nav_products:           '产品',
  nav_suppliers:          '供应商',
  nav_contact:            '联系我们',
  nav_sr:                 '社会责任',
  mega_about_main:        '关于日盈',
  mega_about_sub_intro:   '公司简介',
  mega_about_sub_history: '发展历程',
  mega_about_sub_vision:  '愿景使命',
  mega_about_sub_honor:   '荣誉资质',
  mega_about_chair:       '主席致辞',
  mega_about_clients:     '合作客户',
  mega_about_mfg:         '生产基地',
  mega_prod_1:            '感知',
  mega_prod_2:            '传输',
  mega_prod_3:            '控制',
  mega_prod_4:            '执行',
  mega_sup_1:             '准入流程',
  mega_sup_2:             '采购模块',
  mega_sup_3:             '供应商联系',
  mega_contact_1:         '来访路线',
  mega_contact_2:         '意见反馈',
  mega_sr_1:              '社会责任',
  footer_visit:           '来访路线',
  footer_feedback:        '在线反馈',
  footer_privacy:         '隐私保护',
  footer_legal:           '法律条款',
};

function t(key) {
  var lang = getLang();
  return UI[lang][key] || UI['zh'][key];
}
