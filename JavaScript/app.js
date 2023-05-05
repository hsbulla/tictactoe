var game_name = "<h1>Tic Tac Toe<h1/>"
$(".tictactoe").append(game_name);

var gameBoard = $("<div>").addClass("game-board");
for (var i = 1; i <= 3; i++) {
  var row = $("<div>").addClass("row");
  for (var j = 1; j <= 3; j++) {
    var cell = $("<div>").addClass("cell").attr("data-row", i).attr("data-column", j);
    row.append(cell);
  }
  gameBoard.append(row);
  $(".tictactoe").append(gameBoard);
}

$(document).ready(function() {
    var player = "❌";
    var board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];

    $(".cell").on("click", function() {
        var row = $(this).data("row");
        var column = $(this).data("column");

        if (board[row-1][column-1] == "") {
            board[row-1][column-1] = player;
            $(this).text(player);

            if (hasWinner()) {
                var h1 = document.getElementsByTagName('h1')[0];
                h1.innerHTML = 'Выиграл: ' + player;
                resetGame();
            } else if (boardIsFull()) {
                var h1 = document.getElementsByTagName('h1')[0];
                h1.innerHTML = 'Ничья';
                resetGame();
            } else {
                player = (player == "❌") ? "⭕️" : "❌";
            }
        }
    });

    function hasWinner() {
        for (var i = 0; i < 3; i++) {
            if ((board[i][0] == player) && (board[i][1] == player) && (board[i][2] == player)) {
                return true;
            }
            if ((board[0][i] == player) && (board[1][i] == player) && (board[2][i] == player)) {
                return true;
            }
        }
        if ((board[0][0] == player) && (board[1][1] == player) && (board[2][2] == player)) {
            return true;
        }
        if ((board[0][2] == player) && (board[1][1] == player) && (board[2][0] == player)) {
            return true;
        }
        return false;
    }

    function boardIsFull() {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (board[i][j] == "") {
                    return false;
                }
            }
        }
        return true;
    }

    function resetGame() {
        player = "❌";
        board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];
        $(".cell").text("");
    }
});

document.addEventListener('keydown', (event) => { //кнопочка enter
    if (event.keyCode === 13) {
        window.location.reload()
    }
  });