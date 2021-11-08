

const storage = window.localStorage
const usuarios = JSON.parse(storage.getItem("usuarios"))
const logado = JSON.parse(storage.getItem("logado"))
const todosOsCards = JSON.parse(storage.getItem("todosOsCards")) || []

const userLogado = []

usuarios.forEach(usuario => {
    if(usuario[6] == logado[1]){
        userLogado.splice(0, 2, usuario[6], usuario[0])
        todosOsCards.forEach(cardsUsuario => {
            if(logado[1] == cardsUsuario[0]){
                for(let i = 1; i < cardsUsuario.length; i++){
                    for(let j = 0; j < cardsUsuario[i].length; j++){
                        
                    }
                }
            }
        })
    }
})

const atualiza = () => {
    window.location.reload(true)
}




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

        let c = 0
        todosOsCards.forEach(card => {
            if(userLogado[0] == card[0]){
                if(card[1][0] == articleConteudo.innerText){
                    todosOsCards.splice(c, 1)
                    
                    storage.setItem("todosOsCards", JSON.stringify([... todosOsCards]))
                    atualiza()
                    
                }
                
            }
            c++
        })
        
        
    })
    
    excluirDoacao.addEventListener('click', alertaDeletaDoacao)
    cancelarDoacao.addEventListener('click', alertaDeletaDoacao)
    
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
    const tituloEditado = document.getElementById('tituloEditado')
    const img = document.getElementById('imgEditado')
    tituloEditado.value = event.target.parentElement.parentElement.children[0].children[0].children[1].innerText
    img.value = event.target.parentElement.parentElement.children[0].children[1].children[0].currentSrc
    
    textoEditar.push(articleConteudo.children[0].children[0].children[1].innerText)

    const btnEditar = document.querySelector('[data-btneditar]')
    const btnCancelar = document.querySelector('[data-btncancelar]')
    btnEditar.addEventListener('click', editarComponente)
    btnCancelar.addEventListener('click', lookAlert)

}

const editarComponente = () => {
    const dadosAtualizados = []
    const dados = []
    const tituloEditado = document.getElementById('tituloEditado')
    const img = document.getElementById('imgEditado')
    
    
    const data = new Date()
    const dia = data.getUTCDate()
    const mes = data.getUTCMonth() + 1
    const ano = data.getFullYear()

    dados.push(tituloEditado.value, img.value, dia, mes, ano)
    dadosAtualizados.push(userLogado[0], dados)
    let c = 0
    todosOsCards.forEach(card => {
        
        if(userLogado[0] == card[0]){
            if(userLogado[0] == card[0] && (card[1][0] == textoEditar[0])){
                todosOsCards.splice(c, 1, dadosAtualizados)
                
                storage.setItem("todosOsCards", JSON.stringify([...todosOsCards]))
               
              
                
            }
            
        }
        c++
    })
    atualiza()
    
    textoEditar.splice(0,1)
    lookAlert()
    const limpaTitulo = document.getElementById('tituloEditado')
    const limpaImg = document.getElementById('imgEditado')
    
    limpaTitulo.value = ''
    limpaImg.value = ''
    
    atualizaDoacoes()
}

const alertaAddDoacao = () => {

   
    const titulo = document.getElementById('tituloDoacao')
    const img = document.getElementById('imgDoacao')

    if(titulo.value != '' && img.value != ''){
    
    const alerta = document.getElementById('alerta-doador');
    alerta.classList.toggle('alerta_backgrand-ativo');
    const body = document.getElementById('body');
    body.classList.toggle('body-ativo')

    const conteudo = `
    <div class="alerta_conteudo" id="alerta_conteudo">
    <h1 class="alerta_texto">Você deseja postar sua Doação?</h1>
    <h3 class="alerta_texto alerta_texto-segundo">Ao clicar em "confirmar" todos teram acesso a sua doação</h3>
    <button id="confirmarDoacao">Confirma</button>
    <button id="cancelarDoacao">Cancelar</button>
    </div>
    `

    alerta.innerHTML = conteudo

    const confirmarDoacao = document.getElementById('confirmarDoacao')
    const cancelarDoacao = document.getElementById('cancelarDoacao')
    cancelarDoacao.addEventListener('click', alertaAddDoacao)
    confirmarDoacao.addEventListener('click', addDoacao)
    }
}
const alertaConfirmacaoDoacao = () => {
    
        const alerta = document.getElementById('alerta-doador');
        alerta.classList.toggle('alerta_backgrand-ativo');
        const body = document.getElementById('body');
        body.classList.toggle('body-ativo')
    
        const conteudo = `
        <div class="alerta_conteudo" id="alerta_conteudo">
        <h1 class="alerta_texto">Operação realizada com sucesso</h1>
        <button id="confirmarDoacao">Concluido</button>
        </div>
        `
        alerta.innerHTML = conteudo
        const confirmarDoacao = document.getElementById('confirmarDoacao')
        confirmarDoacao.addEventListener('click', alertaConfirmacaoDoacao)
        confirmarDoacao.addEventListener('click', atualiza)


}

const addDoacao = () => {

    

    const todosOsCards = JSON.parse(window.localStorage.getItem('todosOsCards')) || []
    const dados = []
    const titulo = document.getElementById('tituloDoacao')
    const img = document.getElementById('imgDoacao')
    const data = new Date()
    const dia = data.getUTCDate()
    const mes = data.getUTCMonth() + 1
    const ano = data.getFullYear()

    
 
    dados.push(titulo.value)
    dados.push(img.value)
    dados.push(dia, mes, ano)

    storage.setItem("todosOsCards", JSON.stringify([... todosOsCards , [userLogado[0], dados]]))
    

    const limpaTitulo = document.getElementById('tituloDoacao')
    const limpaImg = document.getElementById('imgDoacao')

    
    alertaAddDoacao()
    alertaConfirmacaoDoacao()
    
    
    
    limpaTitulo.value = ''
    limpaImg.value = ''
    

}


btnAdd.addEventListener('click', alertaAddDoacao)

const atualizaDoacoes = () => {
    const suasDoacoes = document.getElementById('suasDoacoes')
    suasDoacoes.innerHTML = ''
    
    todosOsCards.forEach((card) =>{
        if(userLogado[0] == logado[1]){
            if(card[0] == logado[1]){

                const article = document.createElement('article')
                article.classList.add('componente')
                const conteudo = `
            <div class="componente_conteudo">
                <div class="componente_conteudo-usuario">
                    <div class="componente_usuario">
                        <div class="componente_usuario-img-fundo"><img class="componente_usuario-img" src="../assets/img/usuarioPadrao.png" alt=""></div>
                        <h3 class="componente_usuario-nome">${userLogado[1]}</h3>
                    </div>
                    <h3 class="componente_texto">${card[1][0]}</h3>
                    <div class="componente_conteudo-data">
                        <h5 class="componente_data">Data de publicação</h5><h5 class="componente_data-dia">${card[1][2]+"/"+card[1][3]+"/"+card[1][4]}
                    </div>
                </div>
                <div class="componente_conteudo-img">
                    <img class="componente_img" src="${card[1][1]}" alt="">
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
            }

        }

    })

}

atualizaDoacoes()