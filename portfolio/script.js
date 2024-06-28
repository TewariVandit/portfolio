const myDiv = document.getElementsByClassName('wrapper');
window.addEventListener('scroll', () => {
    var w = window.innerWidth;
    let currentSection = 0;
    const sections = document.querySelectorAll('.section');
    const indicatorItems = document.querySelectorAll('.indicator div');
    const contentWrapper = document.querySelector('.content-wrapper');
    let isScrolling = false;

    function updateSection(index) {
        currentSection = index;
        contentWrapper.style.transform = `translateX(-${index * 100}%)`;
        indicatorItems.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    function handleScroll(e) {
        if (isScrolling) return;
        isScrolling = true;

        if (e.deltaY > 0 && currentSection < sections.length - 1) {
            updateSection(currentSection + 1);
        } else if (e.deltaY < 0 && currentSection > 0) {
            updateSection(currentSection - 1);
        }

        setTimeout(() => {
            isScrolling = false;
        }, 700); // duration of transition + some buffer
    }

    if (w > 615) {
        window.addEventListener('wheel', handleScroll);
    }

    indicatorItems.forEach((item, index) => {
        item.addEventListener('click', () => updateSection(index));
    });

    updateSection(0);


});