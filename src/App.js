import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Doctors from "./component/Doctors/Doctors";
import Header from "./component/Header/Header";
import Footer from "./component/Home/Footer/Footer";
import Home from "./component/Home/Home";
// import ServiceDetails from "./component/ServiceDetails/ServiceDetails";
import Services from "./component/Services/Services";
import Register from "./component/Login/Register";
import Login from "./component/Login/Login";
import initialize from "./component/Firebase/FIrebase.initialize";
import AuthProvider from "./component/context/AuthProvider";
import PrivateRoute from "./component/privateRoute/PrivateRoute";
import Book from "./component/Services/Book/Book";
import ServiceDetails from "./component/ServiceDetails/ServiceDetails";

initialize();
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/doctors">
              <Doctors></Doctors>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/book">
              <Book></Book>
            </PrivateRoute>
            <Route path="/servicedetail/:id">
              <ServiceDetails></ServiceDetails>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
