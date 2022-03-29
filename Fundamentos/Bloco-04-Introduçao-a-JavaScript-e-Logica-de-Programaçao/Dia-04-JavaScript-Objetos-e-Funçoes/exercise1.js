let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// Imprimir mensagem de boas-vindas

console.log('Bem vindo(a), ' + info.personagem);

// Inserir nova chave

info.recorrente = 'Sim';

console.log(info);

// For/in que mostre todas as chaves do objeto

for (const key in info) {
	console.log(key);
}

// For/in que mostre todas os valores das chaves do objeto

for (const key in info) {
	console.log(info[key]);
}

// Define um segundo objeto com a mesma estrutura (as mesmas chaves) do
// primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain,
// Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprime
// os valores de cada objeto juntos de acordo com cada uma das chaves.

let info2 = {
	personagem: 'Tio Patinhas',
	origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
	nota: 'O último MacPatinhas',
	recorrente: 'Sim',
};

for (const key in info) {
	if (key === 'recorrente') {
		console.log('Ambos recorrentes');
	} else {
		console.log(info[key] + ' e ' + info2[key]);
	}
}

// Acessa as chaves nome , sobrenome e titulo , que está dentro da chave
// livrosFavoritos , e faz um console.log no seguinte formato: "O livro favorito
// de Julia Pessoa se chama 'O Pior Dia de Todos'".

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo);

// Adiciona um novo livro favorito na chave livrosFavoritos , que é um array .

let novoLivro = {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
};

leitor.livrosFavoritos.push(novoLivro);

console.log(leitor);

// Acessa as chaves nome e livrosFavoritos e faça um console.log no seguinte
// formato: "Julia tem 2 livros favoritos".

let totalDeLivros = leitor.livrosFavoritos.length;

console.log(leitor.nome + ' tem ' + totalDeLivros + ' livros favoritos');
