import { Header, Footer } from "./containers";
import { Card, Navbar, Brand, SwiperController, CTA } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Login, Profile, Register } from "./pages";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Header />
            <CTA />

            {/* <SwiperController /> */}

            {/* <Mentions /> */}
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/contact">
            <Card />
          </Route>
          {/* <Route exact path="/market"></Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
