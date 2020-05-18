import React, { Component } from 'react';
import Menu from './MenuComponentwithCard';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import DishDetail from './DishdetailComponent';
import Home from './HomeComponent'
import { DISHES } from '../shared/dishes';
import {Switch,Route,Redirect} from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
    };
  }

  render() {
    return (  
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={()=> <Home />} />
          <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes} />} />   
          <Redirect to="/home" /> 
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;