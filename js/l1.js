// ============================================================
// L1 — 产品总览页渲染
// ============================================================

document.addEventListener('DOMContentLoaded', renderL1);

function renderL1() {
  var app = document.getElementById('app');
  var en = isEn();

  var sections = DATA.map(function(cat) {
    var enCat = getEnCat(cat.id);
    var catName  = en ? (enCat.name  || cat.name)  : cat.name;
    var catLabel = en ? (enCat.label || cat.label) : cat.label;

    var subCards = cat.subcategories.map(function(sub) {
      var enSub   = getEnSub(sub.id);
      var subName = en ? (enSub.name || sub.name) : sub.name;
      var hasProducts = sub.products && sub.products.length > 0;

      if (hasProducts) {
        if (sub.products.length === 1) {
          var prod    = sub.products[0];
          var enProd  = getEnProd(prod.id);
          var prodName = en ? (enProd.name || prod.name) : prod.name;
          var url = 'product.html?cat=' + cat.id + '&sub=' + sub.id + '&id=' + prod.id + (en ? '&lang=en' : '');
          return (
            '<div class="prd-card" style="--card-accent:' + cat.color + '" onclick="goTo(\'' + url + '\')">' +
              '<div class="prd-img"><img src="' + getImg(prod) + '" alt="' + prodName + '" loading="lazy"></div>' +
              '<div class="prd-body">' +
                '<div class="prd-name">' + subName + '</div>' +
                '<div class="prd-count">' + prodName + '</div>' +
                '<div class="prd-arrow" style="color:' + cat.color + '">' + t('viewProduct') + '<i class="ri-arrow-right-line"></i></div>' +
              '</div>' +
            '</div>'
          );
        }
        var countText = t('productCount')(sub.products.length);
        var url = 'subcategory.html?cat=' + cat.id + '&sub=' + sub.id + (en ? '&lang=en' : '');
        return (
          '<div class="prd-card" style="--card-accent:' + cat.color + '" onclick="goTo(\'' + url + '\')">' +
            '<div class="prd-img"><img src="' + getSubImg(sub) + '" alt="' + subName + '" loading="lazy"></div>' +
            '<div class="prd-body">' +
              '<div class="prd-name">' + subName + '</div>' +
              '<div class="prd-count">' + countText + '</div>' +
              '<div class="prd-arrow" style="color:' + cat.color + '">' + t('viewDetail') + '<i class="ri-arrow-right-line"></i></div>' +
            '</div>' +
          '</div>'
        );
      } else {
        var borrowedProd = findFirstProductInCat(cat, sub.id);
        if (borrowedProd) {
          var bp    = borrowedProd.product;
          var enBp  = getEnProd(bp.id);
          var bpName = en ? (enBp.name || bp.name) : bp.name;
          var url = 'product.html?cat=' + cat.id + '&sub=' + borrowedProd.subId + '&id=' + bp.id + (en ? '&lang=en' : '');
          return (
            '<div class="prd-card" style="--card-accent:' + cat.color + '" onclick="goTo(\'' + url + '\')">' +
              '<div class="prd-img"><img src="' + getImg(bp) + '" alt="' + bpName + '" loading="lazy"></div>' +
              '<div class="prd-body">' +
                '<div class="prd-name">' + bpName + '</div>' +
                '<div class="prd-count">' + subName + '</div>' +
                '<div class="prd-arrow" style="color:' + cat.color + '">' + t('viewProduct') + '<i class="ri-arrow-right-line"></i></div>' +
              '</div>' +
            '</div>'
          );
        } else {
          return (
            '<div class="prd-card" style="--card-accent:' + cat.color + '">' +
              '<div class="prd-img"><img src="' + FALLBACK_IMG + '" alt="' + subName + '" loading="lazy"></div>' +
              '<div class="prd-body">' +
                '<div class="prd-name">' + subName + '</div>' +
                '<div class="prd-count">' + t('noProduct') + '</div>' +
              '</div>' +
            '</div>'
          );
        }
      }
    }).join('');

    return (
      '<section class="cat-section" id="category-' + cat.id + '">' +
        '<div class="cat-header">' +
          '<div class="cat-icon-pill" style="color:' + cat.color + ';background:' + cat.colorBg + ';border-color:' + cat.colorBorder + '">' +
            '<i class="' + cat.icon + '"></i>' + catName +
          '</div>' +
          '<div class="cat-title-group">' +
            '<div class="cat-name">' + catLabel + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="sub-grid">' + subCards + '</div>' +
      '</section>'
    );
  }).join('');

  app.innerHTML = '<div class="page-view">' + sections + '</div>';
}

function findFirstProductInCat(cat, excludeSubId) {
  for (var i = 0; i < cat.subcategories.length; i++) {
    var sub = cat.subcategories[i];
    if (sub.id === excludeSubId) continue;
    if (sub.products && sub.products.length > 0) {
      return { subId: sub.id, product: sub.products[0] };
    }
  }
  return null;
}
