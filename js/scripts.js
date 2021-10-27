const home = document.getElementById('icon-home');

const toCadastro = () => {
    window.location.href = '../pages/cadastro.html'
}

const toggleClassHome = ()=>{
    const homeBg = document.getElementById('home-bg');
    homeBg.classList.toggle('backgrand-ativo')
    const cabNav = document.getElementById('cabNav')
    cabNav.classList.toggle('cabecalho_navegacao-ativo')
    const body = document.getElementById('body');
    body.classList.toggle('body-ativo')
}

const lookAlert = () =>{
    const alerta = document.getElementById('alerta');
    alerta.classList.toggle('alerta_backgrand-ativo');
    const body = document.getElementById('body');
    body.classList.toggle('body-ativo')
}



