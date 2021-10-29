const postContainer = document.querySelector('.forum_discussoes');
let postModel = '';



for (let i = 0; i < posts.length; i++) {
	postModel = `<article class="forum_discussao">
	<a class="forum_card" href="../pages/discussao.html"> <div class="forum_conteudo-texto">
	<div class="forum_texto-parteUm">
	<h2 class="forum_texto-titulo"> ${posts[i][0]}</h2>
	<div class="forum_texto-categoria">Software</div>
	<h5 class="forum_texto-dia">Atualizado à ${posts[i][3]} min.</h5>
	</div>
	<div class="forum_texto-parteDois">
	<h5 class="forum_texto-resposta">Respostas:</h5>
	<h5 class="forum_texto-quantidade">${posts[i][2]}</h5>
	</div>
	</div>
	<div class="forum_conteudo-usuario">
	<div class="forum_img"></div>
	<h3 class="forum_usuario">${posts[i][1]}</h3>
	</div> 
	</a>
	</article>`


	postContainer.innerHTML += postModel;

}


