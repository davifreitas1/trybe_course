const piece = 'CAIXA-ALTA';

const pieceConverter = piece.toLowerCase();

switch (pieceConverter) {
  case 'pawn':
    console.log('Peão: pode se mover um quadrado para frente, mas pode ser mover 2 no primeiro movimento cada. Além disso, pode eliminar peças adversárias nas diagonais');
    break;
  
  case 'bishop':
    console.log('Bispo: pode se mover qualquer número de quadrados nas diagonais');
    break;

  case 'knight':
    console.log('Cavalo: pode se mover em L (3 quadrados para frente e um para o lado)');
    break;

  case 'rook':
    console.log('Torre: pode se mover horizontalmente ou verticalmente qualquer número de quadrados');
    break;

  case 'queen':
    console.log('Rainha: pode se mover horizontalmente, verticalmente ou diagonalmente qualquer número de quadrados');
    break;
  
  case 'king':
    console.log('Rei: pode se mover apenas um quadrado em qualquer direção');
    break;

  default:
    console.log('Erro: peça não encontrada');
    break;
}
