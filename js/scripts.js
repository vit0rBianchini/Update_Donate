const home = document.getElementById('icon-home');

const storage = window.localStorage

const toCadastro = () => {
    window.location.href = '../pages/cadastro.html'
}



const lookAlert = () =>{
    const alerta = document.getElementById('alerta');
    alerta.classList.toggle('alerta_backgrand-ativo');
    const body = document.getElementById('body');
    body.classList.toggle('body-ativo')
}

const cadastraDados = () => {
    const dadosDoStorage = JSON.parse(storage.getItem("usuarios")) || []
    const usuarioDados = []
    
    const inputs = document.querySelectorAll("input")
    
    inputs.forEach((input) => {
        const dado = input.value
        usuarioDados.push(dado)
    })
    usuarioDados.push(dadosDoStorage.length)
    usuarioDados.push(false)
    
    const atualizadoUsuarios = [... dadosDoStorage, usuarioDados]
    
    storage.setItem("usuarios", JSON.stringify(atualizadoUsuarios))
}


const usuarioValidaLogin = () => {
    const storage = window.localStorage
    const dadosDoStorage = JSON.parse(storage.getItem("usuarios"))
    const dados = []
    const inputs = document.querySelectorAll('input')
    inputs.forEach((input) => {
        if(input.validity.valid){
            input.parentElement.classList.remove('valorLoginInvalido')
        }else {
            input.parentElement.classList.add('valorLoginInvalido')
        }
        dados.push(input.value)
    })
    if(dadosDoStorage != null){
        for(let i = 0; i < dadosDoStorage.length; i++){
            if(dadosDoStorage[i][2] == dados[0]){
                
                if(dadosDoStorage[i][4] == dados[1]){
                    inputs[0].parentElement.classList.remove('valorLoginInvalido')
                    inputs[0].setCustomValidity('')
                    inputs[1].setCustomValidity('')
                    const usuarioLogado = [true, dadosDoStorage[i][6]]
                    storage.setItem("logado", JSON.stringify(usuarioLogado))
                    break  
                }else{
                    inputs[1].setCustomValidity('Senha inválida')
                    inputs[0].parentElement.classList.add('valorLoginInvalido')
                    break
                }
    
            }else{
                inputs[0].setCustomValidity('E-mail inválido')
                inputs[1].setCustomValidity('Senha inválido')
                inputs[0].parentElement.classList.add('valorLoginInvalido')
    
            }
        }

    }else{
        inputs[0].setCustomValidity('E-mail inválido')
        inputs[1].setCustomValidity('Senha inválido')
        inputs[0].parentElement.classList.add('valorLoginInvalido')
    }
}


const logout = () => {
    storage.setItem("logado", JSON.stringify([false]))
    window.location.href = '../../'
}

const mostraAlertaLogout = () => {
    const alerta = document.getElementById('alerta-logout');
    alerta.classList.toggle('alerta_backgrand-ativo');
    const body = document.getElementById('body');
    body.classList.toggle('body-ativo')

    const botoes = alerta.querySelectorAll('button')
    botoes[0].addEventListener('click', logout)
    botoes[0].addEventListener('click', mostraAlertaLogout)
    botoes[1].addEventListener('click', mostraAlertaLogout)

}

const atualizaCabecalho = () => {

    const usuarioLogado = JSON.parse(storage.getItem("logado")) || [false]
    
    const usuario_link = document.querySelector(".usuario_link-cadastro")
    const dadosDoStorage = JSON.parse(storage.getItem("usuarios"))
    const cabecalho_item_sair = document.querySelectorAll('.cabecalho_item')
 
    if(usuarioLogado[0] == true){
        dadosDoStorage.forEach((usuario) => {
            
            if(usuario[6] == usuarioLogado[1]){ 
                usuario_link.innerHTML =  usuario[0]
                usuario_link.setAttribute('href', '../pages/perfil.html')
                cabecalho_item_sair[1].innerHTML = 'Sair'
                cabecalho_item_sair[1].setAttribute('href', '#')
                cabecalho_item_sair[1].addEventListener('click', mostraAlertaLogout)
            }
        })
        
    }else{

        usuario_link.innerHTML =  'Cadastra-se'
        usuario_link.setAttribute('href', '../pages/cadastro.html')
        window.location.href
        cabecalho_item_sair[1].innerHTML = 'Login'
        cabecalho_item_sair[1].setAttribute('href', '../pages/login.html')
    }
}

const atualizaPerfil = () => {
    const perfil = document.querySelector('.perfil_text-usuario')
    const usuarioLogado = JSON.parse(storage.getItem("logado"))
    const dadosDoStorage = JSON.parse(storage.getItem("usuarios")) || []

    dadosDoStorage.forEach((usuario) => {
        if(perfil == null){
            return
        }
        if(usuario[6] == usuarioLogado[1]){
            perfil.innerHTML = usuario[0]
        }
    })
}

const statusUsuarios = JSON.parse(window.localStorage.getItem('usuarios'))
const logado = JSON.parse(window.localStorage.getItem('logado'))



const mostraAlertarDoador = () => {
    const alerta = document.getElementById('alerta-doador');
    statusUsuarios.forEach(element => {
        if(element[6] == logado[1]){
            if(element[7] == false){
                
                alerta.innerHTML = `        <div class="alerta_conteudo">
                <h1 class="alerta_texto">Você deseja doar peças ou equipamentos?</h1>
                <p class="alerta_texto alerta_texto-segundo">Ao clicar no botão "confirmar" você terá acesso as funcionalidades do doador</p>
                <button id="aceitarPedidoDoacao">Confirmar</button>
                <button id="cancelarPedidoDeDoacao">Cancelar</button>
                </div>`
            }else{
                alerta.innerHTML = `        <div class="alerta_conteudo">
                <h1 class="alerta_texto">Você deseja parar de fazer as doações?</h1>
                <p class="alerta_texto alerta_texto-segundo">Ao clicar no botão "confirmar" você não terá acesso as funcionalidades do doador e excluiremos as suas doações</p>
                <button id="aceitarPedidoDoacao">Confirmar</button>
                <button id="cancelarPedidoDeDoacao">Cancelar</button>
                </div>`
            }
        }
    });
    
    alerta.classList.toggle('alerta_backgrand-ativo');
    const body = document.getElementById('body');
    body.classList.toggle('body-ativo')
    const cancelarPedidoDeDoacao = document.getElementById('cancelarPedidoDeDoacao')
    const aceitarPedidoDoacao = document.getElementById('aceitarPedidoDoacao')
    cancelarPedidoDeDoacao.addEventListener('click', mostraAlertarDoador)
    aceitarPedidoDoacao.addEventListener('click', trocarStatus)
    aceitarPedidoDoacao.addEventListener('click', mostraAlertarDoador)
    atualizaTornaseDoador()
    
    
}

const trocarStatus = () => {
    
    statusUsuarios.forEach(element => {
        if(element[6] == logado[1]){
            if(element[7] == true){
                element[7] = false


            }else{
                element[7] = true
            }   
        }
        
        window.localStorage.setItem("usuarios", JSON.stringify([ ... statusUsuarios]))
    })
    
    
}


const atualizaTornaseDoador = () => {
    
    statusUsuarios.forEach(element => {
        if(element[6] == logado[1]){
            if(element[7] == false){
                
                const btn_doador = document.getElementById('torne-seDoador')
                btn_doador.innerHTML = 'Torne-se doador'
                conteudoDoador1.classList.add('conteudo_desativado')
                conteudoDoador2.classList.add('conteudo_desativado')
            }else{
                
                const btn_doador = document.getElementById('torne-seDoador')
                btn_doador.innerHTML = 'Deixar de doar'
                conteudoDoador1.classList.remove('conteudo_desativado')
                conteudoDoador2.classList.remove('conteudo_desativado')
            } 
            
        }
    })
    
}

const toggleClassHome = ()=>{
    const homeBg = document.getElementById('home-bg');
    homeBg.classList.toggle('backgrand-ativo')
    const cabNav = document.getElementById('cabNav')
    cabNav.classList.toggle('cabecalho_navegacao-ativo')
    const body = document.getElementById('body');
    body.classList.toggle('body-ativo')
}

window.onload = () => {

    const btn_torneseDoador = document.getElementById('torne-seDoador')
    if(btn_torneseDoador != null){

        btn_torneseDoador.addEventListener('click', mostraAlertarDoador)
        atualizaTornaseDoador()
    }

    const cabecalho_img = document.querySelector('.cabecalho_img--icon')
    const backgrand = document.querySelector('.backgrand')

    cabecalho_img.addEventListener('click', toggleClassHome)
    backgrand.addEventListener('click', toggleClassHome)
    


    atualizaPerfil()
    atualizaCabecalho()
}




