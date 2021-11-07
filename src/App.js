import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';



function App() {
  return (
    <React.Fragment>
    <Navbar />
    {/* Switch will start after Navbar because Navbar is present on all pages */}
    <Switch>
      <Route exact path="/" component={ProductList} />
      <Route path="/details" component={Details} />
      <Route path="/cart" component={Cart} />
      <Route component={Default} />
    </Switch>
    {/* we won't do any routing to the modal, we will display it as an overlay */}
    <Modal />
    </React.Fragment>
  );
}

export default App;
