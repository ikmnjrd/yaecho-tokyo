import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {SubComponent} from './sub-component';

const App: React.FC = () => {
  return (
      <div>
        <h1>Hello React, Typescript and Webpack!</h1>
        <SubComponent name="and... new.css framework"/>
      </div>
  );
}

ReactDOM.render(<App/>, document.querySelector('#app'));