'use strict';

var _ref = [document.getElementById('view_img'), document.querySelectorAll('.hover_area ul li')],
    viewer = _ref[0],
    images = _ref[1];


images.forEach(function (img) {
  return img.addEventListener('mouseover', function (e) {
    viewer.src = e.target.dataset.src;
  });
});
//# sourceMappingURL=main-dist.js.map