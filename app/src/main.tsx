import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import {SubComponent} from './sub-component';
import {Works} from './works';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/works">Works</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact={true} path="/" component={SubComponent} />
          <Route path="/works" component={Works} />
          <Route path="/about" component={Works} />
          {/* Not Found */}
          <Route component={() => <Redirect to="/" />} />
        </Switch>

      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(<App/>, document.querySelector('#app'));