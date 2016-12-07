import React from 'react';
import ReactDOM from 'react-dom';
import {Observable} from 'rxjs'

let source = Observable.fromEvent(document, "mousemove")
  .map(e => {
    return{
      x:e.clientX,
      y:e.clientY
    }
  })
  .filter(value=> value.x < 500);

source.subscribe(
  value => console.log(value),
  e => console.log(`Error: ${e}`),
  () => console.log('Complete')
);

const App = () => {
  return(
  <div>
    <h1> Hello World!</h1>
  </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
