import React from "react";
import Header from "./components/header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Menu from "./components/menu";
import DishDetails from "./components/dish-details";
import './app.css'
import './video/bg-video.mp4'

function App() {
  return (
      <Router>
          <Header />
          <video autoPlay loop muted
          style={{
              position:"absolute",
              width: "100%",
              left: "50%",
              top: "50%",
              height: "100%",
              objectFit: "cover",
              transform: "translate(-50%, 50%)",
              zIndex: "-1"
          }}>
              <source src='./video/bg-video.mp4' type='video.mp4' />
          </video>
          <Switch>
              <Route exact path="/" component={()=> <Home /> } />
              <Route exact path="/menu" component={()=> <Menu /> } />
              <Route exact path="/menu/:id" component={()=> <DishDetails /> } />
          </Switch>
      </Router>
  );
}

export default App;
