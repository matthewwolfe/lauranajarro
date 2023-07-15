const detailView = document.getElementById('detail-view');
const detailViewImageContainer = document.getElementById('image-container');

const projectDetailButtons = document.querySelectorAll(
  '.project-detail-button'
);

projectDetailButtons.forEach((projectDetailButton) => {
  projectDetailButton.addEventListener('click', (e) => {
    detailViewImageContainer.innerHTML = '';
    const imageSrc = `./images/${e.target.getAttribute('data-image')}.png`;

    const imageElement = document.createElement('img');
    imageElement.src = imageSrc;

    detailViewImageContainer.append(imageElement);
    document.body.style.overflow = 'hidden';
    detailView.style.display = 'flex';
  });
});

document.addEventListener('keydown', (e) => {
  console.log('here');
  if (e.key === 'Escape') {
    detailViewImageContainer.innerHTML = '';
    detailView.style.display = 'none';
    document.body.style.overflow = 'initial';
  }
});
