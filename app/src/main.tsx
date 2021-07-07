import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import {Home} from './home';
import {Works} from './works';
import {About} from './about';
import {PrivacyPolicy} from './privacy-policy';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <nav>
            <Link to="/">Home</Link>
            {` / `}
            <Link to="/about">About</Link>
            {` / `}
            <Link to="/works">Works</Link>
      </nav>
      
      <div>
        <Switch>
          <Route exact path="/" >
            <Home name="HOME"/>
          </Route>
          <Route exact path="/works">
            <Works name="Works" />
          </Route>
          <Route exact path="/about">
            <About name="About" />
          </Route>
          <Route path="/privacy_policy" component={PrivacyPolicy} />
          {/* Not Found */}
          <Route component={() => <Redirect to="/" />} />
        </Switch>

      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(<App/>, document.querySelector('#app'));