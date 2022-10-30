import React from "react";
import './App.css';
import { DefaultLayout } from "./layout/DefaultLayout";
import { Dashboard } from "./page/Dashboard/Dashboard.page";
// import {Button} from 'react-bootstrap';
// import { Entry } from "./page/entry/Entry.page";
import { AddTicket } from "./page/new-ticket/AddTicket.page";

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        <Dashboard />
        {/* <AddTicket /> */}
      </DefaultLayout>
    </div>
  );
}

export default App;
