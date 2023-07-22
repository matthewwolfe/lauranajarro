const detailView = document.getElementById('detail-view');
const detailViewImageContainer = document.getElementById('image-container');
const resumeLink = document.getElementById('resume');

const projectDetailButtons = document.querySelectorAll(
  '.project-detail-button'
);

let isOpen = false;

function closeDetailView() {
  detailViewImageContainer.innerHTML = '';
  detailView.style.display = 'none';
  document.body.style.overflow = 'initial';
  isOpen = false;
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeDetailView();
  }
});

document.addEventListener('click', () => {
  if (isOpen) {
    closeDetailView();
  }
});

projectDetailButtons.forEach((projectDetailButton) => {
  projectDetailButton.addEventListener('click', (e) => {
    e.stopPropagation();

    detailViewImageContainer.innerHTML = '';
    const imageSrc = `./images/${e.target.getAttribute('data-image')}.png`;

    const imageElement = document.createElement('img');
    imageElement.src = imageSrc;

    detailViewImageContainer.append(imageElement);
    document.body.style.overflow = 'hidden';
    detailView.style.display = 'flex';

    isOpen = true;
  });
});

resumeLink.addEventListener('click', () => {
  window.open('./static/LauraNajarro-Resume.pdf', '_blank');
});
