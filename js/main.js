'use strict';
var MINE = '💣';
var EMPTY = '';

var gBoard = {
    minesAroundCount: 0,
    isShown: true,
    isMine: false,
    isMarked: true,
};

var gLvl = {
    SIZE: 4,
    MINE: 2
};

function init() {
    gBoard = createBoard();
    renderBoard(gBoard);
}

function createBoard() {
    var board = [];
    for (var i = 0; i < gLvl.SIZE; i++) {
        board.push([]); // ***
        for (var j = 0; j < gLvl.SIZE; j++) {
            var cell = '';
            board[i][j] = cell;
        }
    }
    board[0][2] = MINE;
    board[2][1] = MINE;
    board[1][1] = MINE;
    console.table(board);
    return board;
}

function renderBoard(board) {
    var strHtml = '<table><tbody>';
    for (var i = 0; i < board.length; i++) {
        strHtml += '<tr>';
        for (var j = 0; j < board[i].length; j++) {
            debugger
            var minesCount = setMinesCount(i, j);
            var cell = board[i][j];
            var className = 'cell cell' + i + '-' + j;
            strHtml += '<td class="' + className + '" onclick="cellClicked(this)"> ' + cell + ' </td>'
        }
        strHtml += '<tr>';
    }
    strHtml += '</tbody></table>';
    var elContainer = document.querySelector('.board-container');
    elContainer.innerHTML = strHtml;
}

function cellClicked(elCell) {
    console.log(elCell);

}

function setMinesCount(iIdx, jIdx) {
    var count = 0;
    for (var i = iIdx - 1; i <= iIdx + 1; i++) {
        if (i < 0 || i >= gBoard.length) continue;
        for (var j = jIdx - 1; j <= jIdx + 1; j++) {
            if (j < 0 || j >= gBoard[0].length) continue;
            if (i === iIdx && j === jIdx) continue;
            if (gBoard[i][j] === MINE) count++;
        }
    }
    console.log(count)
    return count;
}



