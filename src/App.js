import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Doctors from "./component/Doctors/Doctors";
import Header from "./component/Header/Header";
import Footer from "./component/Home/Footer/Footer";
import Home from "./component/Home/Home";
import Services from "./component/Services/Services";

function App() {
  return (
    <div className="App">
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
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
