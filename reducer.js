const clone = require('clone')
const generateBoard = require('./algorithms/generateBoard')
const addChars = require('./algorithms/characters').addChars
const removeChars = require('./algorithms/characters').removeChars

module.exports = reducer


function reducer (state, action) {
  var newState = clone(state)

  switch (action.type) {
    case 'GENERATE_BOARD':

      newState.board = generateBoard(newState.charArray)
      return newState
    case 'ADD_CHARACTER':
    console.log("helloo")
      newState.charArray = addChars(newState.charArray, action.payload)
      newState.board = generateBoard(newState.charArray)
      return newState
    case 'REMOVE_CHARACTER':
      newState.charArray = removeChars(newState.charArray, action.payload)
      newState.board = generateBoard(newState.charArray)
      return newState
    default:
      return newState
  }
}
