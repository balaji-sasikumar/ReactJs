import React, { Component } from 'react';
import Menu from './MenuComponentwithCard';
import Hello from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null,
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {
    return (
      <div>
        <Header />
        {/* here the dishes updated */}
        {/* <Hello dishes={this.state.dishes}/> */}
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} /> 
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        <Footer />
      </div>
    );
  }
}

export default Main;