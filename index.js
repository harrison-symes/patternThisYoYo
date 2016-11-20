const redux = require('redux')
const morph = require('morphdom')
const reducer = require('./reducer')
const template = require('./views/template')
const generateBoard = require('./algorithms/generateBoard')

const firstCharArray = ['0', '1']

const intialState = {
    charArray: firstCharArray,
    board: generateBoard(firstCharArray)
}

const store = redux.createStore(reducer, intialState)
const dispatch = store.dispatch

const updateView = () => {
    const currentState = store.getState()
    const newView = template(currentState, dispatch)
    morph(currentView, newView)
}

store.subscribe(updateView)

var currentView = template(intialState, dispatch)
document.body.appendChild(currentView)
