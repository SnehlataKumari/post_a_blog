import {BrowserRouter as Router , Route, useHistory} from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignInPage from "../pages/SignInPage/SignInPage";
function Routes() {
  
  return(
  <Router history={useHistory}>
    <Route path="/" exact>
      <Dashboard/>
    </Route>
    <Route path="/login">
      <LoginPage/>
    </Route>
    <Route path="/sign-in">
      <SignInPage/>
    </Route>
  </Router>
  )
}
export default Routes;