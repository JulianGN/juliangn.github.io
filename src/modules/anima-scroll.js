// Animar pela posição do scroll

export default function startAnimaScroll(){

    const blocosAnimados = document.querySelectorAll('[data-scroll]');
    
    function animaScroll(){
        blocosAnimados.forEach(bloco => {
            const topo = bloco.getBoundingClientRect().top;
            const calculoDistancia = window.innerHeight * 0.95;

            if(topo < calculoDistancia){
                bloco.classList.add('active');
            }

        });
        
    }
    
    animaScroll();

    window.addEventListener('scroll',animaScroll)

}