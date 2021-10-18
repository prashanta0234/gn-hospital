import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import Footer from "./component/Home/Footer/Footer";
import Home from "./component/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
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
