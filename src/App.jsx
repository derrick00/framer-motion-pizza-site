import React, { useState } from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './index.css';
import ErrorPage from './error-page';
import Header from './components/Header';
import Home from './components/Home';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Order from './components/Order';
import Modal from './components/Modal';


function App() {
  const location = useLocation();
  const [pizza, setPizza] = useState({ base: '', toppings: [] });
  const [showModal, setShowModal] = useState(false);


  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <>
      <Header />
      <Modal  showModal={showModal} setShowModal={setShowModal} />
      <AnimatePresence mode='wait' onExitComplete={() => setShowModal(false)}>
          <Routes location={location} key={location.key}>
            <Route path="/" element={<Home />} />
            <Route
              path="/base"
              element={<Base addBase={addBase} pizza={pizza} />}
            />
            <Route
              path="/toppings"
              element={<Toppings addTopping={addTopping} pizza={pizza} />}
            />
            <Route path="/order" element={<Order pizza={pizza} setShowModal={setShowModal } />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;


 



















// function App() {
//   const location = useLocation();

//   const [pizza, setPizza] = useState({ base: '', toppings: [] });

//   const addBase = (base) => {
//     setPizza({ ...pizza, base });
//   };

//   const addTopping = (topping) => {
//     let newToppings;
//     if (!pizza.toppings.includes(topping)) {
//       newToppings = [...pizza.toppings, topping];
//     } else {
//       newToppings = pizza.toppings.filter((item) => item !== topping);
//     }
//     setPizza({ ...pizza, toppings: newToppings });
//   };

//   return (
//     <>
//       <Header />
//       <AnimatePresence>
//         <Switch>
//           <Route path='/base'>
//             <Base addBase={addBase} pizza={pizza} />
//           </Route>
//           <Route path='/toppings'>
//             <Toppings addTopping={addTopping} pizza={pizza} />
//           </Route>
//           <Route path='/order'>
//             <Order pizza={pizza} />
//           </Route>
//           <Route path='/'>
//             <Home />
//           </Route>
//         </Switch>
//       </AnimatePresence>
//     </>
//   );
// }
// export default App;

