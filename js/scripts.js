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

const statusDoador = [false]

const torneseDoador = () => {
    statusDoador.splice(0,1,true)
    const conteudoDoador1 = document.getElementById('conteudoDoador1')
    const conteudoDoador2 = document.getElementById('conteudoDoador2')
    console.log(statusDoador)
    conteudoDoador1.classList.toggle('conteudo_desativado')
    conteudoDoador2.classList.toggle('conteudo_desativado')
}