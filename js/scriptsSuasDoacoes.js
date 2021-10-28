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

const alertaDeletaDoacao = () => {
    const alerta = document.getElementById('alerta-excluirDoacao');
    alerta.classList.toggle('alerta_backgrand-ativo');
    const body = document.getElementById('body');
    body.classList.toggle('body-ativo')
}

const excluir = (event) => {
    alertaDeletaDoacao()
    
    const excluirDoacao = document.getElementById('excluirDoacao')
    const cancelarDoacao = document.getElementById('cancelarExcluir')

    excluirDoacao.addEventListener('click', () => {
        let articleConteudo1 = event.target.parentElement.parentElement
        const articleConteudo = articleConteudo1.children[0].children[0].children[1]

        for(let i = 0; i < listaDeDoacoesUsuario.length; i++){
            if(articleConteudo.innerText == listaDeDoacoesUsuario[i][1]){
                
                listaDeDoacoesUsuario.splice(i,1)
            }
        }
        atualizaDoacoes()
        
    })
    excluirDoacao.addEventListener('click', alertaDeletaDoacao)
    cancelarDoacao.addEventListener('click', alertaDeletaDoacao)
    
    
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
    const limpaTitulo = document.getElementById('tituloEditado')
    const limpaImg = document.getElementById('imgEditado')

    limpaTitulo.value = ''
    limpaImg.value = ''

}

const alertaAddDoacao = () => {
    const alerta = document.getElementById('alerta-doador');
    alerta.classList.toggle('alerta_backgrand-ativo');
    const body = document.getElementById('body');
    body.classList.toggle('body-ativo')

    const conteudo = `
    <div class="alerta_conteudo" id="alerta_conteudo">
    <h1 class="alerta_texto">Doação postada com sucesso</h1>
    <h3 class="alerta_texto alerta_texto-segundo">Sua postagem foi postada, aguarde um interrese de um donatário</h3>
    <button id="concluidoDoacao">Concluido</button>
    </div>
    `

    alerta.innerHTML = conteudo

    const concluidoDoacao = document.getElementById('concluidoDoacao')
    concluidoDoacao.addEventListener('click', alertaAddDoacao)
}

const addDoacao = () => {
    
    const dados = []
    const titulo = document.getElementById('tituloDoacao').value
    const img = document.getElementById('imgDoacao').value
    dados.push(img)

    dados.push(titulo)
    listaDeDoacoesUsuario.push(dados)

    const limpaTitulo = document.getElementById('tituloDoacao')
    const limpaImg = document.getElementById('imgDoacao')

    limpaTitulo.value = ''
    limpaImg.value = ''
    
    alertaAddDoacao()
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