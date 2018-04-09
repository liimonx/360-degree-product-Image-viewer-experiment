

const [viewer, images] = [document.getElementById('view_img'), document.querySelectorAll('.hover_area ul li')];

images.forEach(img => img.addEventListener('mouseover', e => {viewer.src = e.target.dataset.src}));
