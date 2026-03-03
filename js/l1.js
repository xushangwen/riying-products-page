// ============================================================
// L1 — 产品总览页渲染
// ============================================================

document.addEventListener('DOMContentLoaded', renderL1);

function renderL1() {
  const app = document.getElementById('app');

  const sections = DATA.map(cat => {
    const subCards = cat.subcategories.map(sub => {
      const hasProducts = sub.products && sub.products.length > 0;
      
      if (hasProducts) {
        // 有产品：显示数量，跳转子类列表（单款直达详情）
        if (sub.products.length === 1) {
          const prod = sub.products[0];
          return (
            '<div class="prd-card" style="--card-accent:' + cat.color + '" onclick="goTo(\'product.html?cat=' + cat.id + '&sub=' + sub.id + '&id=' + prod.id + '\')">' +
              '<div class="prd-img"><img src="' + getImg(prod) + '" alt="' + prod.name + '" loading="lazy"></div>' +
              '<div class="prd-body">' +
                '<div class="prd-name">' + sub.name + '</div>' +
                '<div class="prd-count">' + prod.name + '</div>' +
                '<div class="prd-arrow" style="color:' + cat.color + '">查看产品<i class="ri-arrow-right-line"></i></div>' +
              '</div>' +
            '</div>'
          );
        }
        const countText = sub.products.length + ' 款产品';
        return (
          '<div class="prd-card" style="--card-accent:' + cat.color + '" onclick="goTo(\'subcategory.html?cat=' + cat.id + '&sub=' + sub.id + '\')">' +
            '<div class="prd-img"><img src="' + getSubImg(sub) + '" alt="' + sub.name + '" loading="lazy"></div>' +
            '<div class="prd-body">' +
              '<div class="prd-name">' + sub.name + '</div>' +
              '<div class="prd-count">' + countText + '</div>' +
              '<div class="prd-arrow" style="color:' + cat.color + '">查看详情<i class="ri-arrow-right-line"></i></div>' +
            '</div>' +
          '</div>'
        );
      } else {
        // 无产品：从同大类其他子类借一款产品展示
        const borrowedProd = findFirstProductInCat(cat, sub.id);
        if (borrowedProd) {
          return (
            '<div class="prd-card" style="--card-accent:' + cat.color + '" onclick="goTo(\'product.html?cat=' + cat.id + '&sub=' + borrowedProd.subId + '&id=' + borrowedProd.product.id + '\')">' +
              '<div class="prd-img"><img src="' + getImg(borrowedProd.product) + '" alt="' + borrowedProd.product.name + '" loading="lazy"></div>' +
              '<div class="prd-body">' +
                '<div class="prd-name">' + borrowedProd.product.name + '</div>' +
                '<div class="prd-count">' + sub.name + '</div>' +
                '<div class="prd-arrow" style="color:' + cat.color + '">查看产品<i class="ri-arrow-right-line"></i></div>' +
              '</div>' +
            '</div>'
          );
        } else {
          return (
            '<div class="prd-card" style="--card-accent:' + cat.color + '">' +
              '<div class="prd-img"><img src="' + FALLBACK_IMG + '" alt="' + sub.name + '" loading="lazy"></div>' +
              '<div class="prd-body">' +
                '<div class="prd-name">' + sub.name + '</div>' +
                '<div class="prd-count">暂无产品</div>' +
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
            '<i class="' + cat.icon + '"></i>' + cat.name +
          '</div>' +
          '<div class="cat-title-group">' +
            '<div class="cat-name">' + cat.label + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="sub-grid">' + subCards + '</div>' +
      '</section>'
    );
  }).join('');

  app.innerHTML = '<div class="page-view">' + sections + '</div>';
}

// 从同大类其他子类找第一款产品
function findFirstProductInCat(cat, excludeSubId) {
  for (const sub of cat.subcategories) {
    if (sub.id === excludeSubId) continue;
    if (sub.products && sub.products.length > 0) {
      return { subId: sub.id, product: sub.products[0] };
    }
  }
  return null;
}
