var React = require('react')
var ReactDOM = require('react-dom')
var slate = require('slate')

var initialState = slate.Raw.deserialize(
  { nodes: [{
      kind: 'block', 
      type: 'paragraph',
      nodes: [{ kind: 'text', text:'a line of text' }]
    }]}
  , {terse: true})

// turn on Slate's built-in debugging
localStorage.debug = 'slate:*'

function onInput(...args) {
  console.log('Slate.onInput:', args)
}

var root = React.createElement(slate.Editor, { state: initialState, onInput: onInput })

ReactDOM.render(root, document.getElementById('app'))
