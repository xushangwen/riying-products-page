// ============================================================
// L3 — 产品详情页渲染
// ============================================================

document.addEventListener('DOMContentLoaded', init);

function init() {
  const p    = getParams();
  const cat  = findCat(p.get('cat'));
  const sub  = findSub(cat, p.get('sub'));
  const prod = findProd(sub, p.get('id'));
  if (!cat || !sub || !prod) { location.href = 'index.html'; return; }

  setBreadcrumb(cat, sub, prod);
  renderDetail(cat, sub, prod);
}

function setBreadcrumb(cat, sub, prod) {
  const backUrl = 'subcategory.html?cat=' + cat.id + '&sub=' + sub.id;
  document.getElementById('breadcrumb-inner').innerHTML =
    '<a class="bc-back" href="' + backUrl + '"><i class="ri-arrow-left-line"></i>返回</a>' +
    '<div class="bc-divider"></div>' +
    '<span class="bc-item" onclick="location.href=\'index.html\'">产品中心</span>' +
    '<i class="ri-arrow-right-s-line bc-sep"></i>' +
    '<span class="bc-item" onclick="location.href=\'' + backUrl + '\'">' + sub.name + '</span>' +
    '<i class="ri-arrow-right-s-line bc-sep"></i>' +
    '<span class="bc-current">' + prod.name + '</span>';
}

function renderDetail(cat, sub, prod) {
  const app = document.getElementById('app');

  // Description block
  var descBlock = '';
  if (prod.description) {
    descBlock =
      '<div class="l3-section">' +
        '<div class="l3-section-label">产品描述</div>' +
        '<p class="l3-description">' + prod.description + '</p>' +
      '</div>';
  }

  // Features block
  var featsBlock = '';
  if (prod.features && prod.features.length) {
    var items = prod.features.map(function(f, i) {
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
        '<div class="l3-section-label">产品特点</div>' +
        '<ul class="l3-features">' + items + '</ul>' +
      '</div>';
  }

  // Empty state
  var emptyBlock = '';
  if (!prod.description && (!prod.features || !prod.features.length)) {
    emptyBlock =
      '<div class="placeholder-state">' +
        '<i class="ri-file-list-3-line"></i>' +
        '<p>产品详细规格整理中，欢迎联系我们获取技术参数</p>' +
      '</div>';
  }

  var asideHtml = buildAsideHtml(prod, cat, sub);

  app.innerHTML =
    '<div class="page-view">' +
      '<div class="l3-hero">' +
        '<img src="' + getImg(prod) + '" alt="' + prod.name + '">' +
        '<div class="l3-hero-label">' +
          '<div class="l3-hero-cat" style="background:' + cat.color + '"><i class="' + cat.icon + '"></i> ' + sub.name + '</div>' +
          '<h1 class="l3-hero-name">' + prod.name + '</h1>' +
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

  var items = prods.map(function(p) {
    var isActive = p.id === prod.id;
    if (isActive) {
      return '<div class="l3-sibling-item l3-sibling-active">' +
        '<span>' + p.name + '</span>' +
        '<span class="l3-sibling-badge" style="color:' + cat.color + ';background:' + cat.colorBg + '">当前</span>' +
      '</div>';
    }
    var url = 'product.html?cat=' + cat.id + '&sub=' + sub.id + '&id=' + p.id;
    return '<div class="l3-sibling-item" onclick="goTo(\'' + url + '\')">' +
      '<span>' + p.name + '</span>' +
      '<i class="ri-arrow-right-line"></i>' +
    '</div>';
  }).join('');

  return '<div class="l3-aside-card">' +
    '<div class="l3-aside-title"><i class="' + cat.icon + '" style="color:' + cat.color + '"></i>同系列产品</div>' +
    items +
  '</div>';
}
