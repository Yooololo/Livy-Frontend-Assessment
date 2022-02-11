import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Components/Landing";
import Home from "./Components/Home";
import GnomeDetail from "./Components/GnomeDetail";
import About from "./Components/About";
import E404 from "./Components/E404";
import "./Sass/Styles/App.scss";

function App() {
  return (
    <BrowserRouter>
      <div id="apptodo" className="apptodo">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/home" component={Home} />
          <Route exact path="/gnome/:id" component={GnomeDetail} />
          <Route path="/about" component={About} />
          <Route component={E404} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
