const usuarioEstaLogado = JSON.parse(window.localStorage.getItem("logado")) || [false]
const postContainer = document.querySelector('.forum_discussoes');
let postModel = [['Vitor','Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo','Software', 'Texto Texto Texto Texto Texto Texto Texto Texto Texto ', '8/11/2021', [[],[],[]]],['Pedro','Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo','Hardware e Software', 'Texto Texto Texto Texto Texto Texto Texto Texto Texto ', '7/11/2021', [[]]], ['Natan','Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo','Hardware', 'Texto Texto Texto Texto Texto Texto Texto Texto Texto ', '9/11/2021', []]];

postContainer.innerHTML = '' 


for (let i = 0; i < postModel.length; i++) {
	postContainer.innerHTML += `<article class="forum_discussao" >
	<a class="forum_card" href="../pages/discussao.html">
	<div class="forum_conteudo-texto">
		<div class="forum_texto-parteUm">
			<h2 class="forum_texto-titulo">${postModel[i][1]}</h2>
			<div class="forum_texto-categoria">${postModel[i][2]}</div>
			<h5 class="forum_texto-dia">Data de publicação: ${postModel[i][4]}</h5>
		</div>
		<div class="forum_texto-parteDois">
			<h5 class="forum_texto-resposta">Respostas:</h5>
			<h5 class="forum_texto-quantidade">${postModel[i][5].length}</h5>
		</div>
	</div>
	<div class="forum_conteudo-usuario">
		<div class="forum_img-fundo"><img class="forum_img" src="../assets/img/usuarioPadrao.png"></div>
		<h3 class="forum_usuario">${postModel[i][0]}</h3>
	</div>
	</a>
</article>`

}

const atualizaForumItens = () => {
	const selectForum = document.getElementById('selectForum')
	postContainer.innerHTML = ''
	postModel.forEach(discussao => {
		if(discussao[2] == selectForum.value){
			postContainer.innerHTML += `
			<article class="forum_discussao" >
			<a class="forum_card" href="../pages/discussao.html">
			<div class="forum_conteudo-texto">
			<div class="forum_texto-parteUm">
			<h2 class="forum_texto-titulo">${discussao[1]}</h2>
			<div class="forum_texto-categoria">${discussao[2]}</div>
			<h5 class="forum_texto-dia">Data de publicação: ${discussao[4]}</h5>
			</div>
			<div class="forum_texto-parteDois">
			<h5 class="forum_texto-resposta">Respostas:</h5>
			<h5 class="forum_texto-quantidade">${discussao[5].length}</h5>
			</div>
			</div>
			<div class="forum_conteudo-usuario">
			<div class="forum_img-fundo"><img class="forum_img" src="../assets/img/usuarioPadrao.png"></div>
			<h3 class="forum_usuario">${discussao[0]}</h3>
			</div>
			</a>
			</article>
			`

		}if (selectForum.value == "Todas as categorias") {
			postContainer.innerHTML += `
			<article class="forum_discussao" >
			<a class="forum_card" href="../pages/discussao.html">
			<div class="forum_conteudo-texto">
			<div class="forum_texto-parteUm">
			<h2 class="forum_texto-titulo">${discussao[1]}</h2>
			<div class="forum_texto-categoria">${discussao[2]}</div>
			<h5 class="forum_texto-dia">Data de publicação: ${discussao[4]}</h5>
			</div>
			<div class="forum_texto-parteDois">
			<h5 class="forum_texto-resposta">Respostas:</h5>
			<h5 class="forum_texto-quantidade">${discussao[5].length}</h5>
			</div>
			</div>
			<div class="forum_conteudo-usuario">
			<div class="forum_img-fundo"><img class="forum_img" src="../assets/img/usuarioPadrao.png"></div>
			<h3 class="forum_usuario">${discussao[0]}</h3>
			</div>
			</a>
			</article>
			`
		}
	});
	
	
}

const selectForum = document.getElementById('selectForum')
selectForum.addEventListener('change', atualizaForumItens)

const forum_btn = document.querySelector('.forum_btn')

const toCadastrobyForum = () => {
	window.location.href = '../pages/cadastro.html'
	mostraAlerta()
}

const toLoginbyForum = () => {
	window.location.href = '../pages/login.html'
	mostraAlerta()
}

const mostraAlerta = () => {
	if(usuarioEstaLogado[0] == true){
		window.location.href = '../pages/perfil.html#btnAddPostagem'
	}else{
		const alerta = document.getElementById('alerta-cadastre');
    	alerta.classList.toggle('alerta_backgrand-ativo');
    	const body = document.getElementById('body');
    	body.classList.toggle('body-ativo')
		const cadastro = document.getElementById('botaoToCadastro')
		const login = document.getElementById('botaoToLogin')
		const botaoCancelar = document.getElementById('botaoCancelar')
		botaoCancelar.addEventListener('click', mostraAlerta)
		cadastro.addEventListener('click', toCadastrobyForum)
		login.addEventListener('click', toLoginbyForum)
	}
}
forum_btn.addEventListener('click', mostraAlerta)



