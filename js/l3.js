// ============================================================
// L3 — 产品详情页渲染
// ============================================================

document.addEventListener('DOMContentLoaded', init);

function init() {
  var p    = getParams();
  var cat  = findCat(p.get('cat'));
  var sub  = findSub(cat, p.get('sub'));
  var prod = findProd(sub, p.get('id'));
  var indexUrl = isEn() ? 'index.html?lang=en' : 'index.html';
  if (!cat || !sub || !prod) { location.href = indexUrl; return; }

  setBreadcrumb(cat, sub, prod);
  renderDetail(cat, sub, prod);
}

function setBreadcrumb(cat, sub, prod) {
  var en = isEn();
  var enSub  = getEnSub(sub.id);
  var enProd = getEnProd(prod.id);
  var subName  = en ? (enSub.name  || sub.name)  : sub.name;
  var prodName = en ? (enProd.name || prod.name) : prod.name;
  var langParam = en ? '&lang=en' : '';
  var indexUrl  = en ? 'index.html?lang=en' : 'index.html';
  var backUrl   = 'subcategory.html?cat=' + cat.id + '&sub=' + sub.id + langParam;
  document.getElementById('breadcrumb-inner').innerHTML =
    '<a class="bc-back" href="' + backUrl + '"><i class="ri-arrow-left-line"></i>' + t('backBtn') + '</a>' +
    '<div class="bc-divider"></div>' +
    '<span class="bc-item" onclick="location.href=\'' + indexUrl + '\'">' + t('productCenter') + '</span>' +
    '<i class="ri-arrow-right-s-line bc-sep"></i>' +
    '<span class="bc-item" onclick="location.href=\'' + backUrl + '\'">' + subName + '</span>' +
    '<i class="ri-arrow-right-s-line bc-sep"></i>' +
    '<span class="bc-current">' + prodName + '</span>';
}

function renderDetail(cat, sub, prod) {
  var app    = document.getElementById('app');
  var en     = isEn();
  var enSub  = getEnSub(sub.id);
  var enProd = getEnProd(prod.id);
  var subName  = en ? (enSub.name  || sub.name)  : sub.name;
  var prodName = en ? (enProd.name || prod.name) : prod.name;
  var desc     = en ? (enProd.description || prod.description || '') : (prod.description || '');
  var feats    = en ? (enProd.features    || prod.features    || []) : (prod.features    || []);

  // Description block
  var descBlock = '';
  if (desc) {
    descBlock =
      '<div class="l3-section">' +
        '<div class="l3-section-label">' + t('sectionDesc') + '</div>' +
        '<p class="l3-description">' + desc + '</p>' +
      '</div>';
  }

  // Features block
  var featsBlock = '';
  if (feats.length) {
    var items = feats.map(function(f, i) {
      return (
        '<li class="l3-feat">' +
          '<span class="l3-feat-num" style="color:' + cat.color + ';background:' + cat.colorBg + '">' +
            (i + 1 < 10 ? '0' + (i + 1) : '' + (i + 1)) +
          '</span>' +
          '<span class="l3-feat-text">' + f + '</span>' +
        '</li>'
      );
    }).join('');
    featsBlock =
      '<div class="l3-section">' +
        '<div class="l3-section-label">' + t('sectionFeats') + '</div>' +
        '<ul class="l3-features">' + items + '</ul>' +
      '</div>';
  }

  // Empty state
  var emptyBlock = '';
  if (!desc && !feats.length) {
    emptyBlock =
      '<div class="placeholder-state">' +
        '<i class="ri-file-list-3-line"></i>' +
        '<p>' + t('emptyDetail') + '</p>' +
      '</div>';
  }

  var asideHtml = buildAsideHtml(prod, cat, sub);

  app.innerHTML =
    '<div class="page-view">' +
      '<div class="l3-hero">' +
        '<img src="' + getImg(prod) + '" alt="' + prodName + '">' +
        '<div class="l3-hero-label">' +
          '<div class="l3-hero-cat" style="background:' + cat.color + '"><i class="' + cat.icon + '"></i> ' + subName + '</div>' +
          '<h1 class="l3-hero-name">' + prodName + '</h1>' +
        '</div>' +
      '</div>' +
      '<div class="l3-body">' +
        '<div class="l3-main">' +
          descBlock +
          featsBlock +
          emptyBlock +
        '</div>' +
        '<aside class="l3-aside">' + asideHtml + '</aside>' +
      '</div>' +
    '</div>';
}

function buildAsideHtml(prod, cat, sub) {
  var prods = (sub && sub.products) || [];
  if (!prods.length) return '';
  var en = isEn();
  var langParam = en ? '&lang=en' : '';

  var items = prods.map(function(p) {
    var enP = getEnProd(p.id);
    var pName = en ? (enP.name || p.name) : p.name;
    var isActive = p.id === prod.id;
    if (isActive) {
      return '<div class="l3-sibling-item l3-sibling-active">' +
        '<span>' + pName + '</span>' +
        '<span class="l3-sibling-badge" style="color:' + cat.color + ';background:' + cat.colorBg + '">' + t('currentTag') + '</span>' +
      '</div>';
    }
    var url = 'product.html?cat=' + cat.id + '&sub=' + sub.id + '&id=' + p.id + langParam;
    return '<div class="l3-sibling-item" onclick="goTo(\'' + url + '\')">' +
      '<span>' + pName + '</span>' +
      '<i class="ri-arrow-right-line"></i>' +
    '</div>';
  }).join('');

  return '<div class="l3-aside-card">' +
    '<div class="l3-aside-title"><i class="' + cat.icon + '" style="color:' + cat.color + '"></i>' + t('seriesProducts') + '</div>' +
    items +
  '</div>';
}
