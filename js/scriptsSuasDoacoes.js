// import Editar from "./components/editar"
const listaDeDoacoesUsuario = []



const btnAdd = document.querySelector('[data-add]')

const lookAlert = () =>{
    const alerta = document.getElementById('alerta');
    alerta.classList.toggle('alerta_backgrand-ativo');
    const body = document.getElementById('body');
    body.classList.toggle('body-ativo')
}

const Deletar = () => {
    const imgEditar = document.createElement('img')
    imgEditar.setAttribute('src', '../assets/img/lixeira.png')

    imgEditar.addEventListener('click', excluir)
    return imgEditar
}
const excluir = (event) => {
    let articleConteudo = event.target.parentElement.parentElement
    articleConteudo = articleConteudo.children[0].children[0].children[1]
    for(let i = 0; i < listaDeDoacoesUsuario.length; i++){
        if(articleConteudo.innerText == listaDeDoacoesUsuario[i][1])
        listaDeDoacoesUsuario.splice(i,1)
    }
    atualizaDoacoes()
}


const Editar = () => {
    const imgEditar = document.createElement('img')
    imgEditar.setAttribute('src', '../assets/img/edicao.png')

    imgEditar.addEventListener('click', editarElemento)
    return imgEditar
}

const textoEditar = []

const editarElemento = (event) => {
    lookAlert()
    const articleConteudo = event.target.parentElement.parentElement
    
    textoEditar.push(articleConteudo.children[0].children[0].children[1].innerText)

    const btnEditar = document.querySelector('[data-btneditar]')
    const btnCancelar = document.querySelector('[data-btncancelar]')
    btnEditar.addEventListener('click', editarComponente)
    btnCancelar.addEventListener('click', lookAlert)

}

const editarComponente = () => {
    const listaDoacoes = document.getElementById('suasDoacoes').children
    const tituloEditado = document.getElementById('tituloEditado').value
    const img = document.getElementById('imgEditado').value
    for(let i = 0; i < listaDoacoes.length; i++){
        if(listaDeDoacoesUsuario[i][1] == textoEditar[0]){

            listaDeDoacoesUsuario[i].splice(0,2, img, tituloEditado)
        }
    }
    textoEditar.splice(0,1)
    atualizaDoacoes()
    lookAlert()
}


const addDoacao = () => {
    
    const dados = []
    const titulo = document.getElementById('tituloDoacao').value
    const img = document.getElementById('imgDoacao').value
    dados.push(img)
    console.log(img)
    dados.push(titulo)
    listaDeDoacoesUsuario.push(dados)
    console.log(listaDeDoacoesUsuario)
    atualizaDoacoes()
}

btnAdd.addEventListener('click', addDoacao)

const atualizaDoacoes = () => {
    const suasDoacoes = document.getElementById('suasDoacoes')
    suasDoacoes.innerHTML = ''
    listaDeDoacoesUsuario.forEach((index) =>{

    const article = document.createElement('article')
    article.classList.add('componente')
    const conteudo = `
<div class="componente_conteudo">
    <div class="componente_conteudo-usuario">
        <div class="componente_usuario">
            <div class="componente_usuario-img-fundo"><img class="componente_usuario-img" src="../assets/img/usuarioPadrao.png" alt=""></div>
            <h3 class="componente_usuario-nome">Usuário</h3>
        </div>
        <h3 class="componente_texto">${index[1]}</h3>
        <div class="componente_conteudo-data">
            <h5 class="componente_data">Data de publicação</h5><h5 class="componente_data-dia">dd/mm/yyyy</h5>
        </div>
    </div>
    <div class="componente_conteudo-img">
        <img class="componente_img" src="${index[0]}" alt="">
    </div>
</div>
    `


    article.innerHTML = conteudo
    
    const div = document.createElement('div')
    div.classList.add('perfil_gerenciar-doacao')
    
    
    div.appendChild(Editar())
    div.appendChild(Deletar())

    article.appendChild(div)


    
    suasDoacoes.appendChild(article)
    })

}

atualizaDoacoes()