// ============================================================
// COMMON — 全局交互逻辑（导航 + 回顶部）
// ============================================================

(function () {
  // ── Language setup ────────────────────────────────────────
  var en = isEn();
  document.documentElement.lang = en ? 'en' : 'zh-CN';

  // Update page <title>
  if (en) {
    var titleEl = document.querySelector('title');
    if (titleEl) {
      titleEl.textContent = titleEl.textContent
        .replace('产品中心', 'Products')
        .replace('产品详情', 'Product Detail')
        .replace('产品小类', 'Product Category')
        .replace('日盈', 'Riying');
    }
  }

  // ── Lang switcher wiring ──────────────────────────────────
  function wireLangLinks(zhId, enId) {
    var zhEl = document.getElementById(zhId);
    var enEl = document.getElementById(enId);
    if (zhEl) {
      zhEl.href = buildLangUrl('zh');
      if (!en) { zhEl.style.color = 'var(--brand)'; zhEl.style.fontWeight = '600'; }
    }
    if (enEl) {
      enEl.href = buildLangUrl('en');
      if (en) { enEl.style.color = 'var(--brand)'; enEl.style.fontWeight = '600'; }
    }
  }
  wireLangLinks('lang-zh', 'lang-en');
  wireLangLinks('m-lang-zh', 'm-lang-en');

  // ── Banner text ───────────────────────────────────────────
  var bannerTitle  = document.querySelector('.banner-title');
  var bannerDesc   = document.querySelector('.banner-desc');
  var bannerKicker = document.querySelector('.banner-kicker');
  if (en) {
    if (bannerTitle)  bannerTitle.textContent = 'Products';
    if (bannerDesc)   bannerDesc.innerHTML = 'Sensing · Transmission · Control · Execution<br>Full-chain Automotive Electronics Solutions';
    if (bannerKicker) bannerKicker.textContent = 'Products Center';
  } else {
    if (bannerTitle)  bannerTitle.textContent = '产品中心';
    if (bannerDesc)   bannerDesc.innerHTML = '覆盖感知、传输、控制、执行四大领域<br>提供全链路汽车电子解决方案';
    if (bannerKicker) bannerKicker.textContent = 'PRODUCTS CENTER';
  }

  // ── Back to All Products button ───────────────────────────
  var btnBackAll = document.getElementById('btn-back-all');
  if (btnBackAll) {
    btnBackAll.href = en ? 'index.html?lang=en' : 'index.html';
    btnBackAll.innerHTML = '<i class="ri-arrow-left-line"></i> ' + (en ? 'Back to All Products' : '回到所有产品');
  }

  // ── data-i18n: footer links (EN→ZH text replacement) ─────
  if (!en) {
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (NAV_ZH[key]) el.textContent = NAV_ZH[key];
    });
  }

  // ── Footer: address + copyright (ZH only) ────────────────
  if (!en) {
    var addrEl = document.querySelector('.addr.addr-1');
    if (addrEl) addrEl.innerHTML = '江苏省常州市经开区潞横路2788号<span class="line">&nbsp;&nbsp;|&nbsp;&nbsp;</span>';
    var copyEl = document.querySelector('.copy');
    if (copyEl) copyEl.innerHTML = '©2026 江苏日盈电子股份有限公司 版权所有 &nbsp;&nbsp;&nbsp;&nbsp;<a href="http://beian.miit.gov.cn/" target="_blank">苏ICP备05061209号-2</a>';
  }

  // ── Detect product link type (anchors on index, else index.html) ──
  var firstProdLink = document.querySelector('.mega-col:nth-child(2) .mega-item a');
  var useAnchors = firstProdLink && firstProdLink.getAttribute('href').startsWith('#');
  var zhPL = useAnchors
    ? ['#category-perception', '#category-transmission', '#category-control', '#category-execution']
    : ['index.html', 'index.html', 'index.html', 'index.html'];

  // ── Chinese nav rebuild (7 cols) ──────────────────────────
  if (!en) {
    var navList = document.querySelector('.nav-list');
    if (navList) {
      navList.innerHTML =
        '<div class="category-item"><div class="name">公司介绍</div></div>' +
        '<div class="category-item"><div class="name">产品中心</div></div>' +
        '<div class="category-item"><div class="name">人才聘用</div></div>' +
        '<div class="category-item"><div class="name">供应链</div></div>' +
        '<div class="category-item"><div class="name">投资者关系</div></div>' +
        '<div class="category-item"><div class="name">新闻中心</div></div>' +
        '<div class="category-item"><div class="name">联系我们</div></div>';
    }

    var megaInner = document.getElementById('megaInner');
    if (megaInner) {
      megaInner.innerHTML =
        '<div class="mega-col">' +
          '<div class="mega-item">' +
            '<a href="https://www.riyingcorp.com/index.php?r=about%2Findex" target="_blank">企业介绍</a>' +
            '<ul class="mega-sub">' +
              '<li><a href="https://www.riyingcorp.com/index.php?r=about%2Fintro" target="_blank">简介</a></li>' +
              '<li><a href="https://www.riyingcorp.com/index.php?r=about%2Fhistory" target="_blank">历程</a></li>' +
              '<li><a href="https://www.riyingcorp.com/index.php?r=about%2Fduty" target="_blank">愿景使命</a></li>' +
              '<li><a href="https://www.riyingcorp.com/index.php?r=about%2Fhonor" target="_blank">荣誉资质</a></li>' +
            '</ul>' +
          '</div>' +
          '<div class="mega-item"><a href="https://www.riyingcorp.com/index.php?r=about%2Fleader" target="_blank">董事长致辞</a></div>' +
          '<div class="mega-item"><a href="https://www.riyingcorp.com/index.php?r=about%2Fcustomer" target="_blank">客户领域</a></div>' +
          '<div class="mega-item"><a href="https://www.riyingcorp.com/index.php?r=about%2Ffactory" target="_blank">制造工厂</a></div>' +
        '</div>' +
        '<div class="mega-col">' +
          '<div class="mega-item"><a href="' + zhPL[0] + '">感知</a></div>' +
          '<div class="mega-item"><a href="' + zhPL[1] + '">传输</a></div>' +
          '<div class="mega-item"><a href="' + zhPL[2] + '">控制</a></div>' +
          '<div class="mega-item"><a href="' + zhPL[3] + '">执行</a></div>' +
        '</div>' +
        '<div class="mega-col">' +
          '<div class="mega-item"><a href="https://www.riyingcorp.com/index.php?r=job%2Fstandard" target="_blank">人才标准</a></div>' +
          '<div class="mega-item"><a href="https://www.riyingcorp.com/index.php?r=job%2Fposition" target="_blank">招聘岗位</a></div>' +
        '</div>' +
        '<div class="mega-col">' +
          '<div class="mega-item"><a href="https://www.riyingcorp.com/index.php?r=supplier%2Fprocess" target="_blank">准入流程</a></div>' +
          '<div class="mega-item"><a href="https://www.riyingcorp.com/index.php?r=supplier%2Fmodule" target="_blank">采购模块</a></div>' +
          '<div class="mega-item"><a href="https://www.riyingcorp.com/index.php?r=supplier%2Fcontact" target="_blank">采购联系</a></div>' +
        '</div>' +
        '<div class="mega-col">' +
          '<div class="mega-item"><a href="http://www.sse.com.cn/home/search/?webswd=603286" target="_blank">信息披露</a></div>' +
          '<div class="mega-item"><a href="http://sns.sseinfo.com/company.do?uid=93067" target="_blank">投资者互动</a></div>' +
          '<div class="mega-item"><a href="https://www.riyingcorp.com/index.php?r=invest%2Fcontact" target="_blank">投资者联系</a></div>' +
        '</div>' +
        '<div class="mega-col">' +
          '<div class="mega-item"><a href="https://www.riyingcorp.com/index.php?r=news%2Findex" target="_blank">新闻汇总</a></div>' +
          '<div class="mega-item"><a href="https://www.riyingcorp.com/index.php?r=news%2Fsr" target="_blank">社会责任</a></div>' +
        '</div>' +
        '<div class="mega-col">' +
          '<div class="mega-item"><a href="https://www.riyingcorp.com/index.php?r=contact%2Fvisit" target="_blank">来访路线</a></div>' +
          '<div class="mega-item"><a href="https://www.riyingcorp.com/index.php?r=contact%2Ffeedback" target="_blank">信息反馈</a></div>' +
        '</div>';
    }

    var mobileWrap = document.querySelector('.nav-maps .wrap');
    if (mobileWrap) {
      mobileWrap.innerHTML =
        '<div class="category-item"><div class="category-name">公司介绍</div><div class="list">' +
          '<div class="item"><div class="item-name"><a href="https://www.riyingcorp.com/index.php?r=about%2Findex" target="_blank">企业介绍</a></div>' +
            '<ul>' +
              '<li><a href="https://www.riyingcorp.com/index.php?r=about%2Fintro" target="_blank">简介</a></li>' +
              '<li><a href="https://www.riyingcorp.com/index.php?r=about%2Fhistory" target="_blank">历程</a></li>' +
              '<li><a href="https://www.riyingcorp.com/index.php?r=about%2Fduty" target="_blank">愿景使命</a></li>' +
              '<li><a href="https://www.riyingcorp.com/index.php?r=about%2Fhonor" target="_blank">荣誉资质</a></li>' +
            '</ul></div>' +
          '<div class="item"><div class="item-name"><a href="https://www.riyingcorp.com/index.php?r=about%2Fleader" target="_blank">董事长致辞</a></div></div>' +
          '<div class="item"><div class="item-name"><a href="https://www.riyingcorp.com/index.php?r=about%2Fcustomer" target="_blank">客户领域</a></div></div>' +
          '<div class="item"><div class="item-name"><a href="https://www.riyingcorp.com/index.php?r=about%2Ffactory" target="_blank">制造工厂</a></div></div>' +
        '</div></div>' +
        '<div class="category-item"><div class="category-name">产品中心</div><div class="list">' +
          '<div class="item"><div class="item-name"><a href="' + zhPL[0] + '">感知</a></div></div>' +
          '<div class="item"><div class="item-name"><a href="' + zhPL[1] + '">传输</a></div></div>' +
          '<div class="item"><div class="item-name"><a href="' + zhPL[2] + '">控制</a></div></div>' +
          '<div class="item"><div class="item-name"><a href="' + zhPL[3] + '">执行</a></div></div>' +
        '</div></div>' +
        '<div class="category-item"><div class="category-name">人才聘用</div><div class="list">' +
          '<div class="item"><div class="item-name"><a href="https://www.riyingcorp.com/index.php?r=job%2Fstandard" target="_blank">人才标准</a></div></div>' +
          '<div class="item"><div class="item-name"><a href="https://www.riyingcorp.com/index.php?r=job%2Fposition" target="_blank">招聘岗位</a></div></div>' +
        '</div></div>' +
        '<div class="category-item"><div class="category-name">供应链</div><div class="list">' +
          '<div class="item"><div class="item-name"><a href="https://www.riyingcorp.com/index.php?r=supplier%2Fprocess" target="_blank">准入流程</a></div></div>' +
          '<div class="item"><div class="item-name"><a href="https://www.riyingcorp.com/index.php?r=supplier%2Fmodule" target="_blank">采购模块</a></div></div>' +
          '<div class="item"><div class="item-name"><a href="https://www.riyingcorp.com/index.php?r=supplier%2Fcontact" target="_blank">采购联系</a></div></div>' +
        '</div></div>' +
        '<div class="category-item"><div class="category-name">投资者关系</div><div class="list">' +
          '<div class="item"><div class="item-name"><a href="http://www.sse.com.cn/home/search/?webswd=603286" target="_blank">信息披露</a></div></div>' +
          '<div class="item"><div class="item-name"><a href="http://sns.sseinfo.com/company.do?uid=93067" target="_blank">投资者互动</a></div></div>' +
          '<div class="item"><div class="item-name"><a href="https://www.riyingcorp.com/index.php?r=invest%2Fcontact" target="_blank">投资者联系</a></div></div>' +
        '</div></div>' +
        '<div class="category-item"><div class="category-name">新闻中心</div><div class="list">' +
          '<div class="item"><div class="item-name"><a href="https://www.riyingcorp.com/index.php?r=news%2Findex" target="_blank">新闻汇总</a></div></div>' +
          '<div class="item"><div class="item-name"><a href="https://www.riyingcorp.com/index.php?r=news%2Fsr" target="_blank">社会责任</a></div></div>' +
        '</div></div>' +
        '<div class="category-item"><div class="category-name">联系我们</div><div class="list">' +
          '<div class="item"><div class="item-name"><a href="https://www.riyingcorp.com/index.php?r=contact%2Fvisit" target="_blank">来访路线</a></div></div>' +
          '<div class="item"><div class="item-name"><a href="https://www.riyingcorp.com/index.php?r=contact%2Ffeedback" target="_blank">信息反馈</a></div></div>' +
        '</div></div>';
    }
  }

  // ── Align mega menu columns under nav items ────────────────
  function syncMegaCols() {
    var navItems = document.querySelectorAll('.nav-list .category-item');
    var megaCols = document.querySelectorAll('.mega-col');
    var megaInner = document.getElementById('megaInner');
    if (!megaInner || !navItems.length) return;

    megaInner.style.justifyContent = 'flex-start';
    megaInner.style.gap = '0';

    // Pass 1: reset mega-cols to auto → measure natural content widths
    megaCols.forEach(function (col) {
      col.style.flex = 'none';
      col.style.width = 'auto';
      col.style.boxSizing = 'content-box';
      col.style.minWidth = '0';
    });
    // Reading getBoundingClientRect forces reflow → accurate natural widths
    var colWidths = Array.prototype.map.call(megaCols, function (col) {
      return col.getBoundingClientRect().width;
    });

    // Pass 2: push natural widths onto nav items so they expand to match
    navItems.forEach(function (item, i) {
      item.style.minWidth = (colWidths[i] || 0) + 'px';
    });

    // Pass 3: read updated nav item positions, align mega-cols under them
    // (first getBoundingClientRect call here forces another reflow)
    var megaLeft = megaInner.getBoundingClientRect().left;
    navItems.forEach(function (item, i) {
      if (!megaCols[i]) return;
      var r = item.getBoundingClientRect();
      megaCols[i].style.boxSizing = 'border-box';
      megaCols[i].style.width = r.width + 'px';
      if (i === 0) megaInner.style.paddingLeft = (r.left - megaLeft) + 'px';
    });
  }
  syncMegaCols();
  window.addEventListener('resize', syncMegaCols);

  // ── Highlight mega-col on nav hover ───────────────────────
  function bindNavHover() {
    var navItems = document.querySelectorAll('.nav-list .category-item');
    var megaCols = document.querySelectorAll('.mega-col');
    navItems.forEach(function (item, i) {
      item.addEventListener('mouseenter', function () {
        if (megaCols[i]) megaCols[i].classList.add('active');
      });
      item.addEventListener('mouseleave', function () {
        if (megaCols[i]) megaCols[i].classList.remove('active');
      });
    });
  }
  bindNavHover();

  // ── Back to top ───────────────────────────────────────────
  window.addEventListener('scroll', function () {
    var backtop = document.getElementById('backtop');
    if (!backtop) return;
    backtop.classList.toggle('active', window.pageYOffset > 300);
  });

  // ── Smooth scroll for anchor links ────────────────────────
  document.addEventListener('click', function (e) {
    var target = e.target.closest('a[href^="#category-"]');
    if (!target) return;
    e.preventDefault();
    var element = document.querySelector(target.getAttribute('href'));
    if (element) {
      var header = document.getElementById('head');
      if (header && header.classList.contains('nav-open')) header.classList.remove('nav-open');
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset - 120,
        behavior: 'smooth'
      });
    }
  });
}());
