nomes = ['Laércio', 'Laiane', 'Larissa', 'Leandro', 'Leonardo', 'Leônidas', 'Leticia', 'Lincoln', 'Lourenço',
'Luana', 'Lucas', 'Luciano', 'Lúcio', 'Luiz'];
const postContainer = document.querySelector('.forum_discussoes');
const addTopicoBtn = document.querySelector('.topicos');
let prototipoElemento = document.createElement('div');

if (!("posts" in localStorage)){
	primeiroPost = {'usuario': 'Admin',
				  'titulo' : 'Bem vindo ao update donate',
				  'categoria' : 'Boas Vindas',
				  'conteudo' : 'Aproveite para fazer um tour usando nosso guia',
	}
	localStorage.setItem('posts', JSON.stringify({'conteudo'  : [primeiroPost]}))
	posts = JSON.parse(localStorage.getItem('posts'))
}
else {
	posts = JSON.parse(localStorage.getItem('posts'))
	console.log(posts['conteudo'])
}


addTopicoPrototipo = function() {
	console.log('OK')
	prototipoElemento.style.visibility = 'visible';
}

enviarTopico = function() {
	prototipoElemento.style.visibility = 'hidden';
	const post = {'usuario': 'Guest',
				  'titulo' : inputTitulo.value,
				  'categoria' : inputCategoria.value,
				  'conteudo' : inputConteudo.value,
				}
	console.log(post)
	posts['conteudo'].push(post)
	localStorage.setItem('posts', JSON.stringify({'conteudo': posts['conteudo']}))
	atualizarConteudo()
}

prototipoElemento.classList.add('prototipo-panel');
prototipoElemento.innerHTML =
`
<h1 style ='color: white'> Adicionar tópico ao forum </h1>
<input class="perfil_entrada-discusao-titulo" type="text" placeholder="Titulo" id="tituloForum">
 <select class="forum_select" id="selectForum">
	<option value="Hardware e Software">Hardware e Software</option>
	<option value="Hardware">Hardware</option>
	<option value="Software">Software</option>
 </select>
 <textarea class="perfil_entrada-discusao-texto" name="duvida" id="txtForum" cols="30" rows="10"> </textarea>
 <button class="enviar-topico">Enviar</button>    
 <style>
 	.prototipo-panel {
 		position: absolute;
 		z-index: 5;
 		background-color: #0A071A;
 		padding: 0 0.6rem;
 		display: flex;
 		flex-direction: column;
 		align-items = 'center';
 		visibility : hidden;
 	}
 </style>
 `


document.querySelector('.conteudo_principal').appendChild(prototipoElemento);
const enviarTopicoBtn = document.querySelector('.enviar-topico');
const inputTitulo = document.querySelector('#tituloForum');
const inputCategoria = document.querySelector('#selectForum');
const inputConteudo = document.querySelector('#txtForum');
addTopicoBtn.addEventListener('click', addTopicoPrototipo);
enviarTopicoBtn.addEventListener('click', enviarTopico);

function atualizarConteudo() {
	postContainer.innerHTML = ''
	for (let i = 0; i < posts['conteudo'].length; i++) {
		postModel = `<article class="forum_discussao">
		<a class="forum_card" href="../pages/discussao.html"> <div class="forum_conteudo-texto">
		<div class="forum_texto-parteUm">
		<h2 class="forum_texto-titulo"> ${posts['conteudo'][i]['titulo']}</h2>
		<div class="forum_texto-categoria">${posts['conteudo'][i]['categoria']}</div>
		<h5 class="forum_texto-dia">Atualizado à 15 min.</h5>
		</div>
		<div class="forum_texto-parteDois">
		<h5 class="forum_texto-resposta">Respostas:</h5>
		<h5 class="forum_texto-quantidade">0</h5>
		</div>
		</div>
		<div class="forum_conteudo-usuario">
		<div class="forum_img"></div>
		<h3 class="forum_usuario">${posts['conteudo'][i]['usuario']}</h3>
		</div> 
		</a>
		</article>`
		postContainer.innerHTML += postModel;
	}
}


atualizarConteudo()
