const images = [
    { src: 'window.png', background: 'window.png', link: 'https://tewarivandit.github.io/portfolio/windows11/' },
    { src: 'bank.png', background: 'bank.png', link: 'https://tewarivandit.github.io/portfolio/Bank-Management/' },
    { src: 'netflix.png', background: 'netflix.png', link: 'https://tewarivandit.github.io/portfolio/clones/Netflix/' },
    { src: 'amazon.png', background: 'amazon.png', link: 'https://tewarivandit.github.io/portfolio/clones/Amazon%20Clone/' },
    { src: 'w3.png', background: 'w3.png', link: 'https://tewarivandit.github.io/portfolio/clones/w3 school/main.html' }
];

let currentIndex = 0;

function updateImage() {
    const container = document.querySelector('.prj_cont');
    container.style.backgroundImage = `url(${images[currentIndex].background})`;

    const circles = document.querySelectorAll('.circle img');
    circles.forEach((img, index) => {
        const parentCircle = img.parentElement;
        if (index === currentIndex) {
            parentCircle.classList.add('highlighted');
        } else {
            parentCircle.classList.remove('highlighted');
        }
    });

    // Scroll the circle container to keep the highlighted circle in view
    const circleContainer = document.getElementById('circleContainer');
    const highlightedCircle = document.querySelector('.highlighted');
    const circleHeight = highlightedCircle.clientHeight + 20; // Circle height + margin
    const containerHeight = circleContainer.clientHeight;
    const totalHeight = images.length * circleHeight;

    if (highlightedCircle.offsetTop < circleContainer.scrollTop) {
        circleContainer.scrollTop = highlightedCircle.offsetTop;
    } else if (highlightedCircle.offsetTop + circleHeight > circleContainer.scrollTop + containerHeight) {
        circleContainer.scrollTop = highlightedCircle.offsetTop + circleHeight - containerHeight;
    }
}

function prevImage(event) {
    event.stopPropagation();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

function nextImage(event) {
    event.stopPropagation();
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function redirectToLink() {
    window.open(images[currentIndex].link, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
    const circleContainer = document.getElementById('circleContainer');
    images.forEach((image, index) => {
        const circleDiv = document.createElement('div');
        circleDiv.classList.add('circle');
        if (index === currentIndex) {
            circleDiv.classList.add('highlighted');
        }
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.addEventListener('click', (event) => {
            event.stopPropagation();
            currentIndex = index;
            updateImage();
        });
        circleDiv.appendChild(imgElement);
        circleContainer.appendChild(circleDiv);
    });
    updateImage();
});
