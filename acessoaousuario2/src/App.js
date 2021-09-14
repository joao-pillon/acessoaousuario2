import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Customer from "./pages/Customer/Customer";
import Company from "./pages/Company/Company";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/customer/:id"><Customer /></Route>
          <Route exact path="/company/:id"><Company /></Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
