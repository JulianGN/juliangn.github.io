// Scroll suave para navegação por ids

export default function startSmoothScroll(){

    const linksInternos = document.querySelectorAll('a[href^="#"]');
    const backTopBtn = document.querySelector('#back-top');
    const root = document.querySelector('#root');

    const scrollFunction = () => {
        if (root.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backTopBtn.classList.add('active');
        } else {
            backTopBtn.classList.remove('active');
        }
    }

    window.onscroll = () => scrollFunction();

    function scrollToId(e){
        e.preventDefault();
        const destino = e.target.getAttribute('href');
        const id = document.querySelector(destino);

        const distancia = id.offsetTop;

        window.scrollTo({
            top: distancia,
            behavior: 'smooth',
        })
    }

    linksInternos.forEach(link => {
        link.addEventListener('click',scrollToId);
    })

}