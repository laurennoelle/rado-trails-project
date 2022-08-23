import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";

function App() {
  

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  return (
    <BrowserRouter>
    {/* <NavBar/> */}
      <div className="App">
        <Switch>
          <Route path="/testing">
            
          </Route>
          <Route path="/">
            
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;