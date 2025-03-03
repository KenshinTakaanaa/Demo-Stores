function scrollToSection() {
    document.getElementById("idForSecondPage").scrollIntoView({ behavior: "smooth" });
}



// FAQS LOGIC
function toggleFaq(faq) {
    let content = faq.querySelector('.faq-content');
    let symbol = faq.querySelector('span');

    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.style.paddingTop = "0";
        content.style.paddingBottom = "0";
        symbol.textContent = "+";
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.paddingTop = "24px";
        content.style.paddingBottom = "24px";
        symbol.textContent = "-";
    }
}