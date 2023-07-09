const hamburger = document.querySelector('.hamburger'),
mobileMenu = document.querySelector('.mobile-menu'),
content = document.querySelector('#content');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    content.classList.toggle('hidden');
});

function checkWidth() {
    var maxWidth = 768;

    if (window.innerWidth <= maxWidth) {
        if(hamburger.classList.contains('active')){
            content.classList.add('hidden');
        }else {
            content.classList.remove('hidden');
        }
    } else {
        content.classList.remove("hidden");
    }
}
checkWidth();

window.addEventListener("resize", checkWidth);