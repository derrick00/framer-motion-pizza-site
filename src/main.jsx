import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)





// import React, { useState } from 'react';
// import * as ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { AnimatePresence } from 'framer-motion';
// import App from './App';
// import './index.css';

// import ErrorPage from './error-page';
// import Header from './components/Header';
// import Home from './components/Home';
// import Base from './components/Base';
// import Toppings from './components/Toppings';
// import Order from './components/Order';


// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <App />
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// );






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
//     <React.StrictMode>
//       <Header />
//       <AnimatePresence>
//         <Router>
//           <Routes location={location} key={location.key}>
//             <Route path="/" element={<Home />} />
//             <Route
//               path="/base"
//               element={<Base addBase={addBase} pizza={pizza} />}
//             />
//             <Route
//               path="/toppings"
//               element={<Toppings addTopping={addTopping} pizza={pizza} />}
//             />
//             <Route path="/order" element={<Order pizza={pizza} />} />
//             <Route path="*" element={<ErrorPage />} />
//           </Routes>
//         </Router>
//       </AnimatePresence>
//     </React.StrictMode>
//   );
// }

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);












// import React, { useState } from 'react';
// import * as ReactDOM from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   useLocation
// } from "react-router-dom";
// import "./index.css";
// import { AnimatePresence } from 'framer-motion';
// import ErrorPage from "./error-page";
// import Header from './components/Header';
// import Home from './components/Home';
// import Base from './components/Base';
// import Toppings from './components/Toppings';
// import Order from './components/Order';


// function App() {
//   const location = useLocation();

//   const [pizza, setPizza] = useState({ base: "", toppings: [] });

//   const addBase = (base) => {
//     setPizza({ ...pizza, base });
//   }

//   const addTopping = (topping) => {
//     let newToppings;
//     if (!pizza.toppings.includes(topping)) {
//       newToppings = [...pizza.toppings, topping];
//     } else {
//       newToppings = pizza.toppings.filter(item => item !== topping);
//     }
//     setPizza({ ...pizza, toppings: newToppings });
//   }

// const router = createBrowserRouter([
//     const location = useLocation();

//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/base",
//     element: <Base addBase={addBase} pizza={pizza} />,
//   },
//   {
//     path: "/toppings",
//     element: <Toppings addTopping={addTopping} pizza={pizza} />,
//   },
//   {
//     path: "/order",
//     element: <Order pizza={pizza} />,
//   },
// ]);

//   return (
//     <React.StrictMode>
//       <Header/>
//       <AnimatePresence>
//       <RouterProvider router={router} />
//       </AnimatePresence>
//     </React.StrictMode>
//   );
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);








// import React, { useState, useLocation } from 'react';
// import * as ReactDOM from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider, 
//   useLocation,
// } from "react-router-dom";
// import "./index.css";
// import { AnimatePresence } from 'framer-motion';
// import ErrorPage from "./error-page";
// import Header from './components/Header';
// import Home from './components/Home';
// import Base from './components/Base';
// import Toppings from './components/Toppings';
// import Order from './components/Order';


// function App() {
//   const location = useLocation();

//   const [pizza, setPizza] = useState({ base: "", toppings: [] });

//   const addBase = (base) => {
//     setPizza({ ...pizza, base });
//   }

//   const addTopping = (topping) => {
//     let newToppings;
//     if (!pizza.toppings.includes(topping)) {
//       newToppings = [...pizza.toppings, topping];
//     } else {
//       newToppings = pizza.toppings.filter(item => item !== topping);
//     }
//     setPizza({ ...pizza, toppings: newToppings });
//   }

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Home />,
//         errorElement: <ErrorPage />,
//     },
//     {
//         path: "/base",
//         element: <Base addBase={addBase} pizza={pizza} location={location}  key={location} />,
//     },
//     {
//         path: "/toppings",
//         element: <Toppings addTopping={addTopping} pizza={pizza} location={location}  key={location} />,
//     },
//     {
//         path: "/order",
//         element: <Order pizza={pizza} location={location} key={location} />,
//     },
// ]);

//   return (
//     <React.StrictMode>
//       <Header/>
//       <AnimatePresence>
//       <RouterProvider router={router} />
//       </AnimatePresence>
//     </React.StrictMode>
//   );
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);
