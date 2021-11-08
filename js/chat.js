"use strict"

const chat = document.querySelector('.chat_mensagens')
const inputChat = document.querySelector('#imp_chat');
const labelDestinatario = document.querySelector('.chat_usuario-txt');
//245833
let conversa;
let usrId = 245833

labelDestinatario.textContent = 'Donatário 1'
if (!('conversa' in localStorage)) {
	conversa = []
	localStorage.setItem('conversa', JSON.stringify(conversa));
} 
else {
	conversa = JSON.parse(localStorage.getItem('conversa'));
}

const atualizarChat = (tipo, mensagem = undefined) => {
	if (tipo === 'simples'){
		chat.innerHTML += `<div class="mensagem chat_campo-mensagem-remetente id="teste">
		<p class="chat_campo-mensagem-texto">${mensagem.texto}</p></div>`
		
	}
	else if (tipo === 'completo') {

		for (let i = 0; i < conversa.length; i++) {
			chat.innerHTML += conversa[i].id_usuario === usrId ? `<div class="mensagem chat_campo-mensagem-remetente">
			<p class="chat_campo-mensagem-texto">${conversa[i].texto}</p></div>` :
			`<div class="mensagem chat_campo-mensagem-destinatario">
			<p class="chat_campo-mensagem-texto">${conversa[i].texto}</p></div>`
		}
	}
	const ultima = chat.lastChild
	ultima.setAttribute('id', "mensagem_final")
	location.href = '#mensagem_final'
	ultima.setAttribute('id', "")
}

const enviarMensagem = () => {
	const mensagem = { 'texto' :  inputChat.value,
					 'horario' : Date.now(),
					 'id_usuario' : usrId
	}
	conversa.push(mensagem)
	localStorage.setItem('conversa', JSON.stringify(conversa));
	atualizarChat('simples', mensagem)
	inputChat.value = ''
}

inputChat.addEventListener('keydown', function(event) {
	if (event.key == "Enter" && inputChat.value.trim().length > 0) {
		enviarMensagem();
	}
}
)

atualizarChat('completo')



