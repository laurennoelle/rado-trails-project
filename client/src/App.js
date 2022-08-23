import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Paper } from "@mui/material"; 
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Trails from "./Components/Trails";
import Reviews from "./Components/Reviews";
import LandingPage from "./Components/LandingPage";

function App() {
  const [page, setPage] = useState("/")

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // // }, []);

  // const styles = {
  //   paperContainer: {
  //     backgroundImage: `url("https://i.imgur.com/ehETORR.png")`,
  //     // background-size: cover;
  //     // background-repeat: no-repeat;
  //   },
  // };

  return (
    // <Paper style={styles.paperContainer}>
    // <BrowserRouter>
    <div className="App">
        <NavBar />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/trails">
            <Trails />
          </Route>
          <Route path="/reviews">
            <Reviews />
          </Route>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="*">
            <h1>404 Not Found</h1>
          </Route>
        </Switch>
      </div>
  );
}

export default App;