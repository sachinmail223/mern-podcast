import { BrowserRouter,Switch,Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/shared/Navigation/Navigation";
import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/register' exact component={Register}></Route>
        <Route path='/login' exact component={Login}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
