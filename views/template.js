const html = require('yo-yo')

module.exports= template


function template(state, dispatch) {

  return html
    `
    <div class="display">
    ${displayBoard(state, dispatch)}
    ${createForms(state, dispatch)}
    </div>
    `
}


function displayBoard(state, dispatch) {
  return html
    `
    <div class="Board">
      ${state.board.map(function(firstArray) {
          return html`<p class="row">${firstArray.join('')}</p>`
      }) }
    </div>
    `
}

function createForms(state, dispatch) {


  return html
    `
    <form>
      <input type="text" id="characterInput" placeholder="Enter a Character"/>
      <button
        type="submit"
        onclick=${addCharacter}
        >
      Add Character
      </button>

      <button
        type="submit"
        onclick=${removeCharacter}
        >
      Remove Character
      </button>

      <button
        type="submit"
        onclick=${regenerate}
        >
      Regenerate
      </button>
    </form>
    `

    function addCharacter(e) {
      e.preventDefault()

      var newCharacter = document.getElementById('characterInput').value
      newCharacter = newCharacter.toString()
      dispatch({type: 'ADD_CHARACTER', payload: newCharacter})
    }

    function removeCharacter(e) {
        e.preventDefault()
        var newCharacter = document.getElementById('characterInput').value
        newCharacter = newCharacter.toString()
        dispatch({type: 'REMOVE_CHARACTER', payload: newCharacter})
    }

    function regenerate(e){
        e.preventDefault()
        dispatch({type: 'GENERATE_BOARD'})
    }
}
