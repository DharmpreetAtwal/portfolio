// Configure your PDF images here
const galleryImages = [
    '../assets/visuals-1.pdf',
];

let currentIndex = 0;

const galleryImage = document.getElementById('galleryImage');
const imageCounter = document.getElementById('imageCounter');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateGallery() {
    if (galleryImages.length === 0) return;
    
    galleryImage.src = galleryImages[currentIndex];
    imageCounter.textContent = `${currentIndex + 1} / ${galleryImages.length}`;

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === galleryImages.length - 1;
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
    currentIndex--;
    updateGallery();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < galleryImages.length - 1) {
    currentIndex++;
    updateGallery();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevBtn.click();
    if (e.key === 'ArrowRight') nextBtn.click();
});

// Initialize gallery
updateGallery();