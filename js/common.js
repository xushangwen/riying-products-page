// ============================================================
// COMMON — 全局交互逻辑（导航 + 回顶部）
// ============================================================

(function () {
  // Align mega menu columns under nav items
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
}());
