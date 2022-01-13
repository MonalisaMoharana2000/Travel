import React from "react"
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import Home from "./Home"
import HomeNav from "./HomeNav";
import PlanTrip from "./PlanTrip";
import Things from "./Things";
import Event from "./Event";
import Footer from "./Footer"
import Contact from "./Contact"
import Login from "./Login";
import Register from "./Register";
import About from "./About";
import Term from "./Term";
import LogoNav from "./mona/LogoNav";


function App() {
  return (
    <div>
      <Router>
        <HomeNav />
      <Switch>
        {/* <Route exact path = "/">
          <HomeNav />
        </Route> */}

<Route exact path = "/">
          <Home/>
        </Route>

        <Route exact path = "/plantrip">
          <PlanTrip/>
        </Route>

        <Route exact path = "/event">
          <Event />
        </Route>

        <Route exact path = "/things">
          <Things />
        </Route>

        <Route exact path = "/contact">
          <Contact />
          </Route>
          <Route exact path = "/login">
          <Login />
        </Route>
        <Route exact path = "/register">
          <Register />
        </Route>
        <Route exact path = "/about">
          < About/>
        </Route>
        <Route exact path = "/term">
          < Term/>
        </Route>
        <Route exact path = "/logonav">
          < LogoNav/>
        </Route>
      </Switch>
      {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
