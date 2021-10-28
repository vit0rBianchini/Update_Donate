const statusDoador = [false]

const btn_torneseDoador = document.getElementById('torne-seDoador')


const mostraAlertarDoador = () => {
    const alerta = document.getElementById('alerta-doador');

    if(statusDoador[0] == false){
        

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
    alerta.classList.toggle('alerta_backgrand-ativo');
    const body = document.getElementById('body');
    body.classList.toggle('body-ativo')
    const cancelarPedidoDeDoacao = document.getElementById('cancelarPedidoDeDoacao')
    const aceitarPedidoDoacao = document.getElementById('aceitarPedidoDoacao')
    cancelarPedidoDeDoacao.addEventListener('click', mostraAlertarDoador)
    aceitarPedidoDoacao.addEventListener('click', trocarStatus)
    aceitarPedidoDoacao.addEventListener('click', mostraAlertarDoador)
    

}

const trocarStatus = () => {
    const conteudoDoador1 = document.getElementById('conteudoDoador1')
    const conteudoDoador2 = document.getElementById('conteudoDoador2')
    if(statusDoador[0] == true){
        statusDoador.splice(0,1,false)
        const btn_doador = document.getElementById('torne-seDoador')
        btn_doador.innerText = 'Torne-se um doador'
        conteudoDoador1.classList.toggle('conteudo_desativado')
        conteudoDoador2.classList.toggle('conteudo_desativado')
    }else{
        const btn_doador = document.getElementById('torne-seDoador')
        btn_doador.innerText = 'Deixar de doar'
        statusDoador.splice(0,1,true)
        conteudoDoador1.classList.toggle('conteudo_desativado')
        conteudoDoador2.classList.toggle('conteudo_desativado')
    }

}

const torneseDoador = () => {
    mostraAlertarDoador()
    


    
}
btn_torneseDoador.addEventListener('click', mostraAlertarDoador)