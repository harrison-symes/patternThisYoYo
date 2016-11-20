const characters = require('./characters')

var size = 100

function generateBoard(charArray) {
  var board = new Array(15)

  for (var i = 0; i < board.length; i++) {
    var newArray = []
    board[i] = newArray
    for (var j = 0; j < size; j++) {
      var random = parseInt(Math.random() * charArray.length)
       board[i].push(charArray[random])
    }
  }

  return board
}

module.exports = generateBoard
