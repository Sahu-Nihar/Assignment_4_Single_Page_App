import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Blog from './pages/Blog/Blog';
import Home from './pages/Home/Home';

const App = () => (
    <div className="container">
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/blog/:id" component={Blog} />
        </Switch>
    </div>
);

export default App;
