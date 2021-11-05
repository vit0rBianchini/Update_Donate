const doacoesContainer = document.querySelector('.componentes');
let doacoes = ['', '', '', '', '', '']

const atualizarPosts = function() {
	console.log('criador chamado');
	for (let contr = 0; contr < doacoes.length; contr++){
		doacoesContainer.innerHTML += `<article class="componente">
		<div class="componente_conteudo">
		<div class="componente_conteudo-usuario">
		<div class="componente_usuario">
		<div class="componente_usuario-img-fundo"><img class="componente_usuario-img" src="../assets/img/usuarioPadrao.png" alt=""></div>
		<h3 class="componente_usuario-nome">Usuário</h3>
		</div>
		<h3 class="componente_texto">Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo</h3>
		<div class="componente_conteudo-data">
		<h5 class="componente_data">Data de publicação</h5><h5 class="componente_data-dia">dd/mm/yyyy</h5>
		</div>
		</div>
		<div class="componente_conteudo-img">
		<img class="componente_img" src="http://s.glbimg.com/po/tt/f/original/2012/01/30/hd.jpg" alt="">
		</div>
		</div>
		<button class="doacaoes_btn" onclick="lookAlert()">Demonstrar interesse</button>
		</article>`
	}
}


atualizarPosts();