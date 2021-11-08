const usuariosInteressados = [["Donatário", "img", "Text Item de interrese", true], ["Donatário2", "img", "Text Item de interrese", false], ["Donatário3", "img", "Text Item de interrese", false]]

const abrirChat = (dados_chamada) => {
    location.href = 'chat.html'
}

const aceitarPessoa = (event) => {
    mostrarAlertaSolicitacaoPessoa("aceitar")
    const aceitarSolicitacao = document.getElementById('aceitarSolicitacao')
    const cancelarSolicitacao = document.getElementById('cancelarSolicitacao')

    cancelarSolicitacao.addEventListener('click', mostrarAlertaSolicitacaoPessoa)
    aceitarSolicitacao.addEventListener('click', () => {
        const card = event.target.parentElement.parentElement.parentElement
        const cardUsario = card.children[0].children[1].children[0].innerText
        let cardItemDeInterrese = document.getElementById('itemDeInterrese').innerText
        cardItemDeInterrese = cardItemDeInterrese.replace("Item de interrese: ", '')
        usuariosInteressados.forEach((i) =>{
            if(i[0] == cardUsario && i[2] == cardItemDeInterrese){
                i.splice(3, 1, true)
                atualizaPessoasInterresadas()
                mostrarAlertaSolicitacaoPessoa()
            }
        })
        mostrarSolicitacaoConcluida()
    })
}

const Aceitar = () => {
    const aceitar = document.createElement('div')
    aceitar.classList.add('aceitar') 
    aceitar.innerHTML = `<img src="../assets/img/v.png" alt=""></div>`
    aceitar.addEventListener('click', aceitarPessoa)
    return aceitar
}

const recusarPessoa = (event) => {
    mostrarAlertaSolicitacaoPessoa()
    const recusarSolicitacao = document.getElementById('recusarSolicitacao')
    const cancelarSolicitacao = document.getElementById('cancelarSolicitacao')
    
    cancelarSolicitacao.addEventListener('click', mostrarAlertaSolicitacaoPessoa)
    recusarSolicitacao.addEventListener('click', () => {
        const card = event.target.parentElement.parentElement.parentElement.parentElement
        const cardUsarioRemover = card.children[0].children[1].children[0].innerHTML
        let cardItemDeInterreseRemover = card.children[0].children[1].children[1].innerText.replace("Item de interrese: ", '')
        let contador = 0
        usuariosInteressados.forEach((i) =>{
            if(i[0] == cardUsarioRemover && i[2] == cardItemDeInterreseRemover){
                usuariosInteressados.splice(contador, 1)
                atualizaPessoasInterresadas()
                mostrarAlertaSolicitacaoPessoa()
                mostrarSolicitacaoConcluida('recusado')
            }
            contador ++
        })
    })


}

const Recusar = () => {
    const recusar = document.createElement('div')
    recusar.classList.add('recusar') 
    recusar.innerHTML = `<div class="recusar"><img src="../assets/img/x.png" alt=""></div>`
    recusar.addEventListener('click', recusarPessoa)
    return recusar

}

const mostrarSolicitacaoConcluida = (recusar) => {
    const alerta = document.getElementById('alerta-doador');
    alerta.classList.toggle('alerta_backgrand-ativo');
    const body = document.getElementById('body');
    body.classList.toggle('body-ativo')
    if(recusar == "recusado"){
        const conteudo = `
        <div class="alerta_conteudo" id="alerta_conteudo">
        <h1 class="alerta_texto">Solicitação recusada</h1>
        <h3 class="alerta_texto alerta_texto-segundo">Enviaremos um e-mail notificando o donatário</h3>
        <button id="concluidoSolicitacao">Concluido</button>
        </div>
        `
        alerta.innerHTML = conteudo
        
    }else{
        const conteudo = `
        <div class="alerta_conteudo" id="alerta_conteudo">
        <h1 class="alerta_texto">Solicitação confirmada</h1>
        <h3 class="alerta_texto alerta_texto-segundo">Enviaremos um e-mail notificando o donatário</h3>
        <button id="concluidoSolicitacao">Concluido</button>
        </div>
        `
        alerta.innerHTML = conteudo
    }
    const concluidoSolicitacao = document.getElementById('concluidoSolicitacao')
    concluidoSolicitacao.addEventListener('click', mostrarSolicitacaoConcluida)
}

const mostrarAlertaSolicitacaoPessoa = (escolha) => {
    const alerta = document.getElementById('alerta-doador');
    alerta.classList.toggle('alerta_backgrand-ativo');
    const body = document.getElementById('body');
    body.classList.toggle('body-ativo')
    if(escolha == "aceitar"){
        const conteudo = `
        <div class="alerta_conteudo" id="alerta_conteudo">
        <h1 class="alerta_texto">Você deseja aceitar solicitação?</h1>
        <h3 class="alerta_texto alerta_texto-segundo">Você terá acesso as funcionalidades do chat</h3>
        <button id="aceitarSolicitacao">Aceitar</button>
        <button id="cancelarSolicitacao">Cancelar</button>
        </div>
        ` 
        alerta.innerHTML = conteudo
    }else{
        const conteudo = `
        <div class="alerta_conteudo" id="alerta_conteudo">
        <h1 class="alerta_texto">Você deseja recusar solicitação?</h1>
        <h3 class="alerta_texto alerta_texto-segundo">Você excluirá a solicitação do usário</h3>
        <button id="recusarSolicitacao">Recusar</button>
        <button id="cancelarSolicitacao">Cancelar</button>
        </div>
        ` 
        alerta.innerHTML = conteudo
    }
}

const atualizaPessoasInterresadas = () => {
    const perfil_interreses = document.getElementById('perfil_interreses')
    
    perfil_interreses.innerHTML = ''
    usuariosInteressados.forEach((i) => {
        
        const div = document.createElement('div')
        
        div.classList.add("card_usuario")
        const conteudo = `
        <div class="card_usuario-texto-img">
        <div class="card_perfil-fundo"><img class="card_perfil-img" src="../assets/img/usuarioPadrao.png" alt=""></div>
        <div class="card_perfil-conteudo">
        <h4 class="card_perfil-txt" id="card_perfil-donatario">${i[0]}</h4>
        <h4 id="itemDeInterrese" class="card_perfil-descricaoItem">Item de interrese: ${i[2]}</h4>
        </div>
        </div>
        `
        div.innerHTML = conteudo

        perfil_interreses.appendChild(div)
        if(i[3] == true){

            const btnChat = `
            <div class="card_habilitar-contato-habilitado">
            <div class="habilitado abre_chat"><span>Chat</span></div>
            </div>
            `
            div.innerHTML += btnChat
            perfil_interreses.appendChild(div)
            let chatsAbertos = document.querySelectorAll('.abre_chat');
            for (let i = 0; i < chatsAbertos.length; i++) {
                chatsAbertos[i].addEventListener('click', abrirChat);
            }

            
        }else{

            const btbEscolha = document.createElement('div')
            btbEscolha.classList.add("card_habilitar-contato")
            btbEscolha.appendChild(Aceitar())
            btbEscolha.appendChild(Recusar())
            div.appendChild(btbEscolha)

        }
        }
        )
        }

atualizaPessoasInterresadas()



