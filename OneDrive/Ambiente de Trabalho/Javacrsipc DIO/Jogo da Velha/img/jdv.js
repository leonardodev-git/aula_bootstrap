const player1 = 'X';
const player2 = 'O';
let playTime = player1;
let gameOver = false;

atualiza();

function atualiza () {
    if (gameOver) {return};
    if (playTime === player1) {
        var player = document.querySelectorAll('dvi#painel img')[0];
        player.setAttribute("src", "Imagens/x.jpg");
    } else {
        var player = document.querySelectorAll('dvi#painel img')[0];
        player.setAttribute("src", "Imagens/0.jpg");
    }

}