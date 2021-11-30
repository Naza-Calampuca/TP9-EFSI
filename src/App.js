import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import ListadoPosts from './ListadoPosts';
import DetallePosts from './DetallePosts';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/posts" component={ListadoPosts} />
      <Route exact path="/posts/:id" component={DetallePosts} />
    </Router>
  );
}
