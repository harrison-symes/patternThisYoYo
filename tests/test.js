var test = require('tape')
var freeze = require('deep-freeze')

var reducer = require('../reducer')
var generateBoard = require('../algorithms/generateBoard')


test ('add a character', function(t) {
  var initialChars = ['0']
  var initialState = {
    charArray: initialChars,
    board: generateBoard(initialChars)
  }

  freeze(initialState)
  var newState = reducer(initialState, {type: 'ADD_CHARACTER', payload: '1'})

  t.plan(2)

  t.deepEqual(newState.charArray, ['0', '1'])
  const board = newState.board


  t.true(board[0].includes('1'))
  t.end()

})

test ('remove a character', function(t) {
  var initialChars = ['0', '1']
  var initialState = {
    charArray: initialChars,
    board: generateBoard(initialChars)
  }
  freeze(initialState)

  var newState = reducer(initialState, {type: 'REMOVE_CHARACTER', payload: '1'})

  t.deepEqual(newState.charArray, ['0'])

  const board = newState.board


  t.false(board[0].includes('1'))
  t.end()

})

test('regenerate the board', function(t) {
  var initialChars = ['0', '1']
  var initialState = {
    charArray: initialChars,
    board: generateBoard(initialChars)
  }

  freeze(initialState)
  var newState = reducer(initialState, {type: 'GENERATE_BOARD'})

  t.notDeepEqual(newState.board, initialState.board)
  t.end()

})
