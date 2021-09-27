import React from 'react';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import Books from './redux/Books/Books';
import Categories from './redux/Categories/Categories';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Books />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
        </Switch>
      </div>
  );
}

export default App;
