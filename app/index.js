var inferno = require('inferno')
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

var root = inferno.createVNode(16, slate.Editor, {
  state: initialState, onInput: onInput })

inferno.render(root, document.getElementById('app'))
