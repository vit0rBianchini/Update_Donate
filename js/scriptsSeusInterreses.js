const interresesDoUsuario = [["Natan", "titulo titulo titulo titulo titulo titulo titulo","http://s.glbimg.com/po/tt/f/original/2012/01/30/hd.jpg", "dd/mm/yyyy", false],["Natan", "titulo titulo titulo titulo titulo titulo titulo","http://s.glbimg.com/po/tt/f/original/2012/01/30/hd.jpg", "dd/mm/yyyy", true]]

const btnChatAtivo = (index) => {
    const btnSeusInterreses = document.createElement('button')
    btnSeusInterreses.classList.add('doacaoes_btn')    
    if(index[4] == true){
        btnSeusInterreses.innerText = 'Chat'
        
    }
    if(index[4] == false){
        btnSeusInterreses.innerText = 'Aguardando resposta'
        btnSeusInterreses.classList.add('doacaoes_btn-desativo')
         
    }
    return btnSeusInterreses
}

const atualizaInterreses = () => {
    const seus_interreses = document.getElementById('seus_interreses')
    seus_interreses.innerHTML =''
    interresesDoUsuario.forEach((index)=>{
        const article = document.createElement('article')
        article.classList.add('componente')
        const conteudo = `
        <div class="componente_conteudo">
        <div class="componente_conteudo-usuario">
        <div class="componente_usuario">
        <div class="componente_usuario-img-fundo"><img class="componente_usuario-img" src="../assets/img/usuarioPadrao.png" alt=""></div>
        <h3 class="componente_usuario-nome">${index[0]}</h3>
        </div>
        <h3 class="componente_texto">${index[1]}</h3>
        <div class="componente_conteudo-data">
        <h5 class="componente_data">Data de publicação</h5><h5 class="componente_data-dia">${index[3]}</h5>
        </div>
        </div>
        <div class="componente_conteudo-img">
        <img class="componente_img" src="
        ${index[2]}" alt="">
        </div>
        </div>
        `     
        article.innerHTML = conteudo
        article.append(btnChatAtivo(index))
        seus_interreses.appendChild(article)
    })
}

window.addEventListener('load', atualizaInterreses)
