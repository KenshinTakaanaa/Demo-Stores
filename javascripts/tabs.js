function showGallery(id, element) {
    document.querySelectorAll('.gallery').forEach(gallery => {
        gallery.classList.remove('show');
    });
    document.getElementById(id).classList.add('show');
    
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    element.classList.add('active');
}



function animateNumber(element, start, end, duration, callback) {
    let range = end - start;
    let current = start;
    let increment = range / (duration / 20); // 20ms per frame
    let interval = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(interval);
            element.style.textShadow = "none"; // Remove glow after animation
            if (callback) callback();
        }
        element.innerText = Math.floor(current);
    }, 20);
}

document.addEventListener("DOMContentLoaded", () => {
    const elements = [
        { selector: ".number150M span", end: 150 },
        { selector: ".number6 span", end: 6 },
        { selector: ".number456 span", end: 456 }
    ];

    elements.forEach(({ selector, end }) => {
        const el = document.querySelector(selector);
        animateNumber(el, 0, end, 1500);
    });
});