# react-resize-to-aspect-ratio

A react component that triggers an event when an element changes size. It also can automatically keep a given aspect ratio when the element resizes.

This react component is based on [element-resize-event](https://github.com/KyleAMathews/element-resize-event "element-resize-event")


Example Use:

```shell
npm i react-resize-to-aspect-ratio -S
```

```jsx
import Resize from 'react-resize-to-aspect-ratio';

<Resize aspectRatio="16:9">
  <div style={{ width: '100%' }}>
    Hello World
  </div>
</Resize>
```
