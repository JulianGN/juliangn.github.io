// Animar pela posição do scroll

export default function startAnimaScroll(){

    const blocosAnimados = document.querySelectorAll('[data-scroll="anima"]');
    const blocosSubindo = document.querySelectorAll('[data-scroll="anima-up"]')
    const totalAnimados = [...blocosAnimados, ...blocosSubindo];
    
    function animaScroll(){
        totalAnimados.forEach(bloco => {
            const topo = bloco.getBoundingClientRect().top;
            const calculoDistancia = window.innerHeight * 0.8;

            if(topo < calculoDistancia){
                bloco.classList.add('active');
            }

        });
        
    }
    
    animaScroll();

    window.addEventListener('scroll',animaScroll)

}