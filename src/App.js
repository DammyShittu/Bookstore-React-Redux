import React from 'react';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import BookInput from './components/BookInput';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
          <Books />
          <BookInput />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
        </Switch>
      </div>
  );
}

export default App;
