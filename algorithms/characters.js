const clone = require('clone')


function addChars(currentArray, string){
  var chars = string.split('')
  var arrCopy = clone(currentArray)
  chars.forEach(function(char){
    if (!arrCopy.includes(char)) arrCopy.push(char)
  })
  currentArray = arrCopy
  return currentArray
}

function removeChars(currentArray, string){
  var chars = string.split('')
  var arrCopy = clone(currentArray)
  var arr = arrCopy.filter(function(char){
    if(!chars.includes(char)) return char
  })
  currentArray = arr
  return currentArray
}

function outputChars(){
  return charArray
}

module.exports = {
  addChars,
  removeChars,
  outputChars
}
