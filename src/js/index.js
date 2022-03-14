/* quando clicar no pokemon listagem é necessário esconder o cartão do pokemon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem

pra isso é preciso trabalhar com 2 elementos:

1: listagem
2: cartão do pokemon

é necessario criar 2 variaveis JS para trabalhar com os elementos da tela

é necessario trabalhar com o evento do click feito pelo usuario na  listagem de pokemon

quando clicar:

-  remover a classe aberto só do cartão que estiver aberto

- ao clicar em um pokemon da listagem pegue o id desse pokemon pra saber qual cartao mostrar

- depois remover a classe ativa e marca o pokemon selecionado

- no pokemon selecionado marcar como ativo

*/

const listaSelecaoPokemon = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemon.forEach(pokemon => {
  pokemon.addEventListener('click',()=>{

    const cartaoPokemonAberto = document.querySelector('.aberto')
    cartaoPokemonAberto.classList.remove('aberto')

    const idSelecionado = pokemon.attributes.id.value

    const idDoCartaoPokemonParaAbrir = 'cartao-' + idSelecionado
    const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
    cartaoPokemonParaAbrir.classList.add('aberto')

    const pokemonAtivoNaListagem = document.querySelector('.ativa')
    pokemonAtivoNaListagem.classList.remove('ativa')

    const cartaoPokemonParaAtivar = document.getElementById(idSelecionado)
    cartaoPokemonParaAtivar.classList.add('ativa')

  })
})





