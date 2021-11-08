const usuarioEstaLogado = JSON.parse(window.localStorage.getItem("logado")) || [false]
const usuarios = JSON.parse(window.localStorage.getItem("usuarios"))
const todosOsCards = JSON.parse(window.localStorage.getItem("todosOsCards"))

const doacoesContainer = document.querySelector('.componentes');





const atualizarPosts = function() {
	const doacoes = []
	todosOsCards.forEach(doacao => {
		const dados = []
		for(let i=0; i < doacao[1].length; i++){
			dados.push(doacao[1][i])
		}
		usuarios.forEach(usuario => {
			if(doacao[0] == usuario[6]){
				dados.push(usuario[0])
			}
		})

		doacoes.push(dados)

	});
	for (let contr = 0; contr < doacoes.length; contr++){
		doacoesContainer.innerHTML += `<article class="componente">
		<div class="componente_conteudo">
		<div class="componente_conteudo-usuario">
		<div class="componente_usuario">
		<div class="componente_usuario-img-fundo"><img class="componente_usuario-img" src="../assets/img/usuarioPadrao.png" alt=""></div>
		<h3 class="componente_usuario-nome">${doacoes[contr][5]}</h3>
		</div>
		<h3 class="componente_texto">${doacoes[contr][0]}</h3>
		<div class="componente_conteudo-data">
		<h5 class="componente_data">Data de publicação</h5><h5 class="componente_data-dia">${doacoes[contr][2]+"/"+doacoes[contr][3]+"/"+doacoes[contr][4]}</h5>
		</div>
		</div>
		<div class="componente_conteudo-img">
		<img class="componente_img" src=${doacoes[contr][1]} alt="">
		</div>
		</div>
		<button class="doacaoes_btn" onclick="addInterrese()">Solicitar doação</button>
		</article>`
	}
}

const forum_btn = document.querySelector('.forum_btn')



const addInterrese = () => {
	if(usuarioEstaLogado[0] == true){
		const alerta = document.getElementById('alerta-solicitacaoEnviada');
    	alerta.classList.toggle('alerta_backgrand-ativo');
    	const body = document.getElementById('body');
    	body.classList.toggle('body-ativo')
		const confirmar = document.getElementById('confirmar')
		confirmar.addEventListener('click', addInterrese)
		
		

	}else{
		const alerta = document.getElementById('alerta-demonstrarInterresse');
    	alerta.classList.toggle('alerta_backgrand-ativo');
    	const body = document.getElementById('body');
    	body.classList.toggle('body-ativo')
		const cadastro = document.getElementById('botaoToCadastro')
		const login = document.getElementById('botaoToLogin')
		const botaoCancelar = document.getElementById('botaoCancelar')
		botaoCancelar.addEventListener('click', addInterrese)

		cadastro.addEventListener('click', () => {
			window.location.href = '../pages/cadastro.html'
			addInterrese()
		})
		login.addEventListener('click', () => {

			window.location.href = '../pages/login.html'
			addInterrese()
		})
	}
}





atualizarPosts();