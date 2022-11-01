import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
// import { PrivateRoute } from "./components/private-route/PrivateRoute.comp";
import { DefaultLayout } from "./layout/defaultLayout";
// import { Dashboard } from "./pages/dashboard/dashboard.page";
// import { UserVerification } from "./pages/user-verification/UserVerification.page";
// import { Entry } from "./pages/entry/Entry.page";
// import { PasswordOtpForm } from "./pages/password-reset/PasswordOtpForm.page";
// import { Registration } from "./pages/registration/Registration.page";
import { AddTicket } from "./pages/new-ticket/addTicket.page";
// import { TicketLists } from "./pages/ticket-list/TicketLists.page";
// import { Ticket } from "./pages/ticket/Ticket.page";
// import {Button} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        <AddTicket />
      </DefaultLayout>
    </div>
  );
}

export default App;
