import { BrowserRouter,Route, Switch,Link } from "react-router-dom";
import './App.css';
import SignUp from "./Pages/register";
import Login from './Pages/Login';
import Home from "./Pages/Home";
import ForgotPassword from "./Pages/forgotpassword";
import CreateProject from "./Pages/CreateProject";
import CustomLogin from "./Pages/CustomLoginPage";

function App() {
  return (
    <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"} component={Login} />
            <Route exact path={"/home"} component={Home} />
            <Route exact path={"/createproject"} component={CreateProject}/>
            <Route exact path={"/forgotpassword"} component={ForgotPassword}/>
            <Route exact path={"/customlogin"} component={CustomLogin}/>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
