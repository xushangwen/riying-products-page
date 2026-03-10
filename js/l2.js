// ============================================================
// L2 — 小类产品列表页渲染
// ============================================================

document.addEventListener('DOMContentLoaded', init);

function init() {
  var p   = getParams();
  var cat = findCat(p.get('cat'));
  var sub = findSub(cat, p.get('sub'));
  var indexUrl = isEn() ? 'index.html?lang=en' : 'index.html';
  if (!cat || !sub) { location.href = indexUrl; return; }

  setBreadcrumb(cat, sub);
  setBanner(cat, sub);
  renderProducts(cat, sub);
}

function setBreadcrumb(cat, sub) {
  var en = isEn();
  var enSub = getEnSub(sub.id);
  var subName = en ? (enSub.name || sub.name) : sub.name;
  var indexUrl = en ? 'index.html?lang=en' : 'index.html';
  document.getElementById('breadcrumb-inner').innerHTML =
    '<a class="bc-back" href="' + indexUrl + '"><i class="ri-arrow-left-line"></i>' + t('backBtn') + '</a>' +
    '<div class="bc-divider"></div>' +
    '<span class="bc-item" onclick="location.href=\'' + indexUrl + '\'">' + t('productCenter') + '</span>' +
    '<i class="ri-arrow-right-s-line bc-sep"></i>' +
    '<span class="bc-current">' + subName + '</span>';
}

function setBanner(cat, sub) {
  var en = isEn();
  var enCat = getEnCat(cat.id);
  var enSub = getEnSub(sub.id);
  var catName = en ? (enCat.name || cat.name) : cat.name;
  var subName = en ? (enSub.name || sub.name) : sub.name;
  var bannerImg = getSubImg(sub);
  var productCount = sub.products && sub.products.length > 0
    ? t('productCount')(sub.products.length)
    : (en ? 'Details in preparation' : '产品详情整理中');

  document.getElementById('l2-banner').innerHTML =
    '<div class="l2-banner-bg">' +
      '<img src="' + bannerImg + '" alt="">' +
      '<div class="l2-banner-color" style="background:linear-gradient(135deg,' + cat.color + 'BB 0%,' + cat.color + '33 55%,transparent 80%)"></div>' +
      '<div class="l2-banner-overlay"></div>' +
    '</div>' +
    '<div class="container l2-banner-content">' +
      '<span class="l2-banner-tag" style="background:' + cat.color + '"><i class="' + cat.icon + '"></i> ' + catName + '</span>' +
      '<h1 class="l2-banner-title">' + subName + '</h1>' +
      '<p class="l2-banner-sub">' + productCount + '</p>' +
    '</div>';
}

function renderProducts(cat, sub) {
  var app   = document.getElementById('app');
  var prods = sub.products || [];
  var en    = isEn();

  if (!prods.length) {
    app.innerHTML =
      '<div class="page-view">' +
        '<div class="placeholder-state">' +
          '<i class="ri-inbox-line"></i>' +
          '<p>' + t('empty') + '</p>' +
        '</div>' +
      '</div>';
    return;
  }

  var cards = prods.map(function(prod) {
    var enProd  = getEnProd(prod.id);
    var prodName = en ? (enProd.name || prod.name) : prod.name;
    var url = 'product.html?cat=' + cat.id + '&sub=' + sub.id + '&id=' + prod.id + (en ? '&lang=en' : '');
    return (
      '<div class="prd-card" style="--card-accent:' + cat.color + '" onclick="goTo(\'' + url + '\')">' +
        '<div class="prd-img"><img src="' + getImg(prod) + '" alt="' + prodName + '" loading="lazy"></div>' +
        '<div class="prd-body">' +
          '<div class="prd-name">' + prodName + '</div>' +
          '<div class="prd-arrow" style="color:' + cat.color + '">' + t('viewDetail') + '<i class="ri-arrow-right-line"></i></div>' +
        '</div>' +
      '</div>'
    );
  }).join('');

  app.innerHTML = '<div class="page-view"><div class="product-grid">' + cards + '</div></div>';
}
