nomes = ['Laércio', 'Laiane', 'Larissa', 'Leandro', 'Leonardo', 'Leônidas', 'Leticia', 'Lincoln', 'Lourenço',
'Luana', 'Lucas', 'Luciano', 'Lúcio', 'Luiz'];

nomeTxt = document.querySelector('.main-heading');
nomeTxt.textContent = 'Bem vindo de volta ' + nomes[Math.floor(Math.random() * nomes.length)];
