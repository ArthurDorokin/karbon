import React from 'react';
import './App.css';
import MainPage from "./component/content/main-page/MainPage";
import EditPage from "./component/content/edit-page/EditPage";
import {Switch, Route} from "react-router-dom";

const App = () => {
  return (
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route path="/edit/" component={EditPage}/>
      </Switch>
  );
}

export default App;