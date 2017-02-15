import Inferno from 'inferno'
import {Editor, Raw} from 'slate'


const initialState = Raw.deserialize( {
  nodes: [
    {
      kind: 'block', 
      type: 'paragraph',
      nodes: [
        {
          kind: 'text', 
          text:'a line of text'
        }
      ]
    }
  ]
}, {terse: true})

const onChange = (...args) => console.log({args})
Inferno.render(<Editor state={initialState} onInput={onChange}/>, document.getElementById("app"))
