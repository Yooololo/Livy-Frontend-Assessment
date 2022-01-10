import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Landing from "./Components/Landing";
import Home from "./Components/Home";
import GnomeDetail from "./Components/GnomeDetail";
import About from "./Components/About";
import "./Sass/Styles/App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="apptodo">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/home" component={Home} />
          <Route exact path="/gnome/:id" component={GnomeDetail} />
          <Route path="/about" component={About} />
          <Redirect from="*" to="/home" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
