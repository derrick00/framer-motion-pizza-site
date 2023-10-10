import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';


const Container = () => {

const [pizza, setPizza] = useState({ base: "", toppings: [] });

const addBase = (base) => {
    setPizza({ ...pizza, base })
}

const addTopping = (topping) => {
    let newToppings;
    if(!pizza.toppings.includes(topping)){
    newToppings = [...pizza.toppings, topping];
    } else {
    newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
}

  return (
    <div className="home container">
        <Header />
        <Home />
    </div>
  )
}

export default Container;