// ============================================================
// COMMON — 全局交互逻辑（导航 + 回顶部）
// ============================================================

(function () {
  // ── Language switcher wiring ──────────────────────────────
  var en = isEn();

  // Set <html lang> attribute
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

  // Wire desktop and mobile lang switcher links
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

  // Update L1 banner text if present
  var bannerTitle = document.querySelector('.banner-title');
  var bannerDesc  = document.querySelector('.banner-desc');
  if (en && bannerTitle) { bannerTitle.textContent = 'Products'; }
  if (en && bannerDesc)  { bannerDesc.innerHTML = 'Sensing · Transmission · Control · Execution<br>Full-chain Automotive Electronics Solutions'; }

  // Update L2 "back to all products" button if present
  var btnBackAll = document.getElementById('btn-back-all');
  if (btnBackAll) {
    btnBackAll.href = en ? 'index.html?lang=en' : 'index.html';
    var btnText = btnBackAll.querySelector('i');
    if (btnText) { btnBackAll.innerHTML = '<i class="ri-arrow-left-line"></i> ' + (en ? 'Back to All Products' : '回到所有产品'); }
  }

  // ── Align mega menu columns under nav items ────────────────
  function syncMegaCols() {
    var navItems = document.querySelectorAll('.nav-list .category-item');
    var megaCols = document.querySelectorAll('.mega-col');
    var megaInner = document.getElementById('megaInner');
    if (!megaInner || !navItems.length) return;
    var megaLeft = megaInner.getBoundingClientRect().left;
    navItems.forEach(function (item, i) {
      if (!megaCols[i]) return;
      var r = item.getBoundingClientRect();
      megaCols[i].style.flex = 'none';
      megaCols[i].style.width = r.width + 'px';
      if (i === 0) megaInner.style.paddingLeft = (r.left - megaLeft) + 'px';
    });
  }
  syncMegaCols();
  window.addEventListener('resize', syncMegaCols);

  // Highlight mega-col when hovering nav item
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

  // Back to top button visibility
  window.addEventListener('scroll', function () {
    var backtop = document.getElementById('backtop');
    if (!backtop) return;
    if (window.pageYOffset > 300) {
      backtop.classList.add('active');
    } else {
      backtop.classList.remove('active');
    }
  });

  // Smooth scroll for anchor links
  document.addEventListener('click', function (e) {
    var target = e.target.closest('a[href^="#category-"]');
    if (!target) return;
    
    e.preventDefault();
    var hash = target.getAttribute('href');
    var element = document.querySelector(hash);
    
    if (element) {
      // Close mobile nav if open
      var header = document.getElementById('head');
      if (header && header.classList.contains('nav-open')) {
        header.classList.remove('nav-open');
      }
      
      // Smooth scroll to target
      var headerHeight = 120;
      var elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      var offsetPosition = elementPosition - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
}());
