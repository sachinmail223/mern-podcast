import { BrowserRouter,Switch,Route,Redirect } from "react-router-dom";
import "./App.css";
import Navigation from "./components/shared/Navigation/Navigation";
import Activate from "./pages/Activate/Activate";
import Authenticate from "./pages/Authenticate/Authenticate";
import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Rooms from "./pages/Rooms/Rooms";
const isAuth = false
const user = {
  activated:false
}

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
      <Switch>
        <GuestRoute path='/' exact >
          <Home/>
        </GuestRoute>
        <Route path='/register' exact component={Register}></Route>
        <Route path='/login' exact component={Login}></Route>
        <GuestRoute path='/authenticate'>
        <Authenticate/>
        </GuestRoute>
        <SemiprotectedRoute path='/activate'>
          <Activate/>
        </SemiprotectedRoute>
        <ProtectedRoute path='/rooms'>
          <Rooms/>
        </ProtectedRoute>


      </Switch>
    </BrowserRouter>
  );
}

const GuestRoute =({children,...rest})=>{
  return (
    <Route {...rest}
    render={({location})=>{
      return isAuth ? (
        <Redirect to={
          {
            pathname:'/rooms',
            state:{from:location},
          }
          }/>
          )
          : (
            children
          )

    }}>

    </Route>
  )
}

const SemiprotectedRoute =({children,...rest})=>{
  return (
    <Route {...rest}
    render={({location})=>{
      return !isAuth ? (
        <Redirect to={
          {
            pathname:'/',
            state:{from:location},
          }
          }/>
          )
          : isAuth && !user.activated ?
          (
            children
          ) :(
            <Redirect to={
              {
                pathname:'/rooms',
                state:{from:location},
              }
              }/>)

    }}>

    </Route>
  )
}

const ProtectedRoute =({children,...rest})=>{
  return (
    <Route {...rest}
    render={({location})=>{
      return !isAuth ? (
        <Redirect to={
          {
            pathname:'/',
            state:{from:location},
          }
          }/>
          )
          : isAuth && !user.activated ?
          (
            <Redirect to={
              {
                pathname:'/activate',
                state:{from:location},
              }
              }/>) :(
                  children
                )

    }}>

    </Route>
  )
}
export default App;
