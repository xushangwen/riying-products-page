// ============================================================
// L2 — 小类产品列表页渲染
// ============================================================

document.addEventListener('DOMContentLoaded', init);

function init() {
  const p   = getParams();
  const cat = findCat(p.get('cat'));
  const sub = findSub(cat, p.get('sub'));
  if (!cat || !sub) { location.href = 'index.html'; return; }

  setBreadcrumb(cat, sub);
  setBanner(cat, sub);
  renderProducts(cat, sub);
}

function setBreadcrumb(cat, sub) {
  document.getElementById('breadcrumb-inner').innerHTML =
    '<a class="bc-back" href="index.html"><i class="ri-arrow-left-line"></i>返回</a>' +
    '<div class="bc-divider"></div>' +
    '<span class="bc-item" onclick="location.href=\'index.html\'">产品中心</span>' +
    '<i class="ri-arrow-right-s-line bc-sep"></i>' +
    '<span class="bc-current">' + sub.name + '</span>';
}

function setBanner(cat, sub) {
  const bannerImg = getSubImg(sub);
  const productCount = sub.products && sub.products.length > 0
    ? sub.products.length + ' 款产品'
    : '产品详情整理中';

  document.getElementById('l2-banner').innerHTML =
    '<div class="l2-banner-bg">' +
      '<img src="' + bannerImg + '" alt="">' +
      '<div class="l2-banner-color" style="background:linear-gradient(135deg,' + cat.color + 'BB 0%,' + cat.color + '33 55%,transparent 80%)"></div>' +
      '<div class="l2-banner-overlay"></div>' +
    '</div>' +
    '<div class="container l2-banner-content">' +
      '<span class="l2-banner-tag" style="background:' + cat.color + '"><i class="' + cat.icon + '"></i> ' + cat.name + '</span>' +
      '<h1 class="l2-banner-title">' + sub.name + '</h1>' +
      '<p class="l2-banner-sub">' + productCount + '</p>' +
    '</div>';
}

function renderProducts(cat, sub) {
  const app  = document.getElementById('app');
  const prods = sub.products || [];

  if (!prods.length) {
    app.innerHTML =
      '<div class="page-view">' +
        '<div class="placeholder-state">' +
          '<i class="ri-inbox-line"></i>' +
          '<p>详细产品信息整理中，欢迎联系我们获取更多技术资料</p>' +
        '</div>' +
      '</div>';
    return;
  }

  const cards = prods.map(function(p) {
    return (
      '<div class="prd-card" style="--card-accent:' + cat.color + '" onclick="goTo(\'product.html?cat=' + cat.id + '&sub=' + sub.id + '&id=' + p.id + '\')">' +
        '<div class="prd-img"><img src="' + getImg(p) + '" alt="' + p.name + '" loading="lazy"></div>' +
        '<div class="prd-body">' +
          '<div class="prd-name">' + p.name + '</div>' +
          '<div class="prd-arrow" style="color:' + cat.color + '">查看详情<i class="ri-arrow-right-line"></i></div>' +
        '</div>' +
      '</div>'
    );
  }).join('');

  app.innerHTML = '<div class="page-view"><div class="product-grid">' + cards + '</div></div>';
}
