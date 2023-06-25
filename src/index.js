import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Squad from './pages/Squad';
import FansZone from './pages/fans-zone';
import Live from './pages/Live';
import Sign from './components/Sign';
import LogIN from './components/LogIn';


const router = createBrowserRouter([
  {
    path: "/Syrian-football-team",
    element: <App />,
    children : [
      {
      path:"/Syrian-football-team",
      element:<Home />
      },
      {
      path:"/Syrian-football-team/about",
      element:<About />
      },
      {
      path:"/Syrian-football-team/squad",
      element:<Squad />
      },
      {
      path:"/Syrian-football-team/fans-zone",
      element:<FansZone />
      },
      {
      path:"/Syrian-football-team/live",
      element:<Live />
      },
      {
        path:"/Syrian-football-team/sign-up",
        element:<Sign/>
      },{
        path :"/Syrian-football-team/log-in",
        element : <LogIN/>
      }
      ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} basename={'/trippy'} />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
