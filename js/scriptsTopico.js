const discussoesForumUsuario = [["Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo", "Text Text Text Text Text Text Text", "Software",[["RespostaTitulo", "RespostaTxt RespostaTxt RespostaTxt RespostaTxt RespostaTxt RespostaTxt RespostaTxt"]]],["Titulo", "Text Text Text Text Text Text Text", "Hardware",[["RespostaTitulo", "RespostaTxt RespostaTxt RespostaTxt RespostaTxt RespostaTxt RespostaTxt RespostaTxt"],[],[]]]]
const enviarDiscussao = document.querySelector('[data-enviarDiscussao]')

const itemParaDeletar = []

const deleta = () => {
    let i = 0

    discussoesForumUsuario.forEach((index) => {
        if(index[0] == itemParaDeletar[0]){
            discussoesForumUsuario.splice(i, 1)
            itemParaDeletar.splice(0,1)
        }
        i+=1
   })
   atualizaDiscussoes()
   mostraAlertaDeletarPostForum()
}

const deletarPost = (event) => {

    mostraAlertaDeletarPostForum()
    const itemDeletar = event.target.parentElement.parentElement.parentElement.children[0].children[0].children[0].children[0].innerText

    itemParaDeletar.push(itemDeletar)
   
    
}

const mostraAlertaDeletarPostForum = () => {
    const alerta = document.getElementById('alerta-deletarPostForum');
    alerta.classList.toggle('alerta_backgrand-ativo');
    const body = document.getElementById('body');
    body.classList.toggle('body-ativo')

    const cancelarDeletarForum = document.getElementById('cancelarDeletarForum')

    const deletarPostForum = document.getElementById('deletarPostForum')

    deletarPostForum.addEventListener('click', deleta)

    cancelarDeletarForum.addEventListener('click', cancelar)
    cancelarDeletarForum.addEventListener('click', mostraAlertaDeletarPostForum)
}
const Deletar = () => {
    const imgEditar = document.createElement('img')
    imgEditar.setAttribute('src', '../assets/img/lixeira.png')

    imgEditar.addEventListener('click', deletarPost)
    return imgEditar
}


const itemParaEditar = []

const alterarCard = () => {
    const selectForumAlert = document.getElementById('selectForumAlert').value
    const inputForumAlert = document.getElementById('inputForumAlert').value
    const alertaTxt = document.getElementById('alertaTxt').value
    discussoesForumUsuario.forEach((index) => {
        if(index[0].trim() == itemParaEditar[0].innerText){
            
            index.splice(0, 3, inputForumAlert, alertaTxt, selectForumAlert)
            itemParaEditar.splice(0,1)
            atualizaDiscussoes()
        }
        
    })
}

const cancelar = () => {
    itemParaEditar.splice(0,1)
    itemParaDeletar.splice(0,1)
    console.log(itemParaDeletar) 
    
}
const mostraAlertaEditForum = (event) => {
    itemParaEditar.splice(0,1)
    const alerta = document.getElementById('alerta-editarPostForum');
    alerta.classList.toggle('alerta_backgrand-ativo');
    const body = document.getElementById('body');
    body.classList.toggle('body-ativo')
    const titulo = event.target.parentElement.parentElement.children[0].children[0].children[0]
    
    
    const inputForumAlert = document.getElementById('inputForumAlert')
    inputForumAlert.value = event.target.parentElement.parentElement.children[0].children[0].children[0].innerText
    const selectForumAlert = document.getElementById('selectForumAlert')
    selectForumAlert.value = event.target.parentElement.parentElement.children[0].children[0].children[1].innerText

    const alertaTxt = document.getElementById('alertaTxt')
    discussoesForumUsuario.forEach((i) => {
        if(i[0] == inputForumAlert.value){

            alertaTxt.value = i[1]
        }
    })
    itemParaEditar.push(titulo)
    
    const cancelarEdicaoForum = document.getElementById('cancelarEdicaoForum')
    const enviarEdicaoForum = document.getElementById('enviarEdicaoForum')
    enviarEdicaoForum.addEventListener('click', alterarCard)
    enviarEdicaoForum.addEventListener('click', mostraAlertaEditForum)
    cancelarEdicaoForum.addEventListener('click', cancelar)
    cancelarEdicaoForum.addEventListener('click', mostraAlertaEditForum)

}

const Editar = () => {
    const imgEditar = document.createElement('img')
    imgEditar.setAttribute('src', '../assets/img/edicao.png')

    imgEditar.addEventListener('click', mostraAlertaEditForum)

    return imgEditar
}

const enviar = () => {
    const tituloForum = document.getElementById('tituloForum').value
    const txtForum = document.getElementById('txtForum').value
    const selectForum = document.getElementById('selectForum')
    const dados = []
    dados.push(tituloForum)
    dados.push(txtForum)
    dados.push(selectForum.value)
    dados.push([])
    discussoesForumUsuario.push(dados)
    
   
    atualizaDiscussoes()
    mostraAlertaAddForum()
    const limpaTitulo = document.getElementById('tituloForum')
    limpaTitulo.value = ''
    const limpaTxt =document.getElementById('txtForum')
    limpaTxt.value = ''
}

const mostraAlertaAddForum = () => {
    const alerta = document.getElementById('alerta-confirmarEnvioAoForum');
    alerta.classList.toggle('alerta_backgrand-ativo');
    const body = document.getElementById('body');
    body.classList.toggle('body-ativo')

    const enviarDiscussao = document.getElementById('enviarDiscussao')
    const cancelarDiscussao = document.getElementById('cancelarDiscussao')

    enviarDiscussao.addEventListener('click', enviar)
    cancelarDiscussao.addEventListener('click', mostraAlertaAddForum)

    
}

const addDiscusao = () => {
    mostraAlertaAddForum()
    
}
enviarDiscussao.addEventListener('click', addDiscusao)

const atualizaDiscussoes = () => {
    const pai = document.getElementById('perfil_discusoes')
    pai.innerHTML = ''
    
    
    discussoesForumUsuario.forEach((index) => {
        const article = document.createElement('article')
        article.classList.add('forum_discussao')
        const aLink = document.createElement('a')
        aLink.classList.add('forum_card')
        const conteudo = `
            <div class="forum_conteudo-texto">
                <div class="forum_texto-parteUm">
                    <h2 class="forum_texto-titulo">${index[0]}</h2>
                    <div class="forum_texto-categoria">${index[2]}</div>
                    <h5 class="forum_texto-dia">Atualizado à 2 min.</h5>
                </div>
                <div class="forum_texto-parteDois">
                    <h5 class="forum_texto-resposta">Respostas:</h5>
                    <h5 class="forum_texto-quantidade">${index[3].length}</h5>
                </div>
            </div>
            <div class="forum_conteudo-usuario">
                <div class="forum_img-fundo"><img class="forum_img" src="../assets/img/usuarioPadrao.png"></div>
                <h3 class="forum_usuario">Usuário</h3>
            </div>
        `
        aLink.innerHTML = conteudo
        const div = document.createElement('div')
        div.classList.add('perfil_gerenciar-forum')
        
        const linkTo = document.createElement('button')
        linkTo.classList.add('perfil_btn')
        linkTo.innerText = 'Acesse postagem'
        div.appendChild(Editar())
        div.appendChild(Deletar())
        
        
        aLink.appendChild(div)
        article.appendChild(aLink)
        article.appendChild(linkTo)
        pai.appendChild(article)

    })
}

atualizaDiscussoes()