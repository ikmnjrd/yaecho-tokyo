import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react"
import {Home} from './home';
import {Works} from './works';
import {About} from './about';
import {PrivacyPolicy} from './privacy-policy';
import { Box, Heading, Container } from "@chakra-ui/react";


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Container>
        <Box m={2}>
          <Heading 
            as="h1" 
            size="4xl" 
            isTruncated
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
          >
            yaecho
          </Heading>
          <Link to="/">Home</Link>
          {` / `}
          <Link to="/about">About</Link>
          {` / `}
          <Link to="/works">Works</Link>
        </Box>
              
        
        <Box m={2}>
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

        </Box>
      </Container>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <ChakraProvider >
    <App />
  </ChakraProvider >
  ,document.querySelector('#app')
);
