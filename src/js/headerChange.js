export function headerChange() {
    const homeSection = document.getElementById('home');
    const nav = document.querySelector('header');
    const navlinks = document.querySelectorAll('.navLink');
    const logoText = document.querySelector('.logoTextHeader')

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                nav.classList.add('whiteBackground');
                navlinks.forEach(link => link.classList.add('darkText'));
                logoText.classList.add('darkText');
            } else {
                nav.classList.remove('whiteBackground')
                navlinks.forEach(link => link.classList.remove('darkText'));
                logoText.classList.remove('darkText');
            }
        }, {
        root: null,
        rootMargin: '0px 0px -670px 0px',
        threshold: 0
    }
    );
    observer.observe(homeSection);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            nav.classList.add('headerShadow');
        } else {
            nav.classList.remove('headerShadow');
        }
    });
}