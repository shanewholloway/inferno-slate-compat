# Toward SlateJS compatibility with InfernoJS

We love using InfernoJS for the speed and simplicity it offers beyond React. We also love
the thought-filled composable architecture offered by SlateJS. We'd love it even more if
we could get these two packages working together in the same system!

Currently, Slate appears to be very close to working in Inferno via the
[`inferno-compat@1.3.0-rc.8`](https://www.npmjs.com/package/inferno-compat) package.
After turning on Slate's built-in logging via `localStorage.debug = 'slate:*'`, you
can see console output in the target `slate-with-inferno` subproject:

  ```javascript
  slate:transform normalize +0ms Object {args: Array[1]}
  slate:transform normalizeDocument +3ms Object {args: Array[1]}
  slate:transform normalizeNodeByKey +1ms Object {args: Array[2]}
  slate:transform normalizeSelection +6ms Object {args: Array[1]}
  slate:transform normalizeSelection +2ms Object {args: Array[0]}
  slate:stack onBeforeChange +5ms
  slate:transform normalize +1ms Object {args: Array[1]}
  slate:transform normalizeDocument +1ms Object {args: Array[1]}
  slate:transform normalizeNodeByKey +1ms Object {args: Array[2]}
  slate:transform normalizeSelection +0ms Object {args: Array[1]}
  slate:transform normalizeSelection +1ms Object {args: Array[0]}
  slate:core onBeforeChange +2ms
  slate:stack render +1ms
  slate:editor render +1ms Object {props: Object, state: Object}
  slate:content render +3ms Object {props: Object}
  slate:node render +3ms 1 (paragraph) Object {props: Object}
  slate:node render +3ms 0 (text) Object {props: Object}
  ```

Comparing with the baseline `slate-with-react` subproject, you can console
output ordering is identical except for the missing last `slate:leaf render`
entry:

  ```javascript
  slate:transform normalize +0ms Object {args: Array[1]}
  slate:transform normalizeDocument +4ms Object {args: Array[1]}
  slate:transform normalizeNodeByKey +1ms Object {args: Array[2]}
  slate:transform normalizeSelection +5ms Object {args: Array[1]}
  slate:transform normalizeSelection +2ms Object {args: Array[0]}
  slate:stack onBeforeChange +10ms
  slate:transform normalize +1ms Object {args: Array[1]}
  slate:transform normalizeDocument +1ms Object {args: Array[1]}
  slate:transform normalizeNodeByKey +0ms Object {args: Array[2]}
  slate:transform normalizeSelection +2ms Object {args: Array[1]}
  slate:transform normalizeSelection +1ms Object {args: Array[0]}
  slate:core onBeforeChange +1ms
  slate:stack render +2ms
  slate:editor render +1ms Object {props: Object, state: Object}
  slate:content render +3ms Object {props: Object}
  slate:node render +9ms 1 (paragraph) Object {props: Object}
  slate:node render +4ms 0 (text) Object {props: Object}
  slate:leaf render +5ms 0-0 Object {props: Object}
  ```

We have stepped through much of the SlateJS code in Chrome DevTools, seeking to
identify the how and why of the missing last line:

  ```javascript
  slate:leaf render +5ms 0-0 Object {props: Object}
  ```

Unfortunately, we have not identified the missing control flow difference
between React and Inferno-Compat. Insight and suggestions on where to
investigate next would unblock our attempts to get these projects working
together, hopefully enriching both communities a little.

 [Slate JS]: http://slatejs.org/
 [Inferno JS]: https://infernojs.org/
