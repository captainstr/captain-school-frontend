import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//import "./App.scss";
import Home from "./pages/Home";
import FAQs from "./pages/FAQs";
import PrivateClasses from "./pages/PrivateClasses";
import About from "./pages/About";
import Classes from "./pages/Classes";
import Captain from "./pages/Captain";
import Terms from "./pages/Terms";
import Registered from "./pages/Registered";
import Downloads from "./pages/Downloads";
import ThankYou from "./pages/ThankYou";
import Registrations from "./pages/Admin/Registrations";
// TODO REMOVE BEFORE PRODUCTION - just for testing
import RegForm from "./components/RegistrationForm";
import { OUPV, Masters, Assistance, Online } from "./pages/Syllabi";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/faqs" exact component={FAQs} />
        <Route path="/privateclasses" exact component={PrivateClasses} />
        <Route path="/resources" exact component={About} />
        <Route path="/classes" exact component={Classes} />
        <Route path="/oupv" exact component={OUPV} />
        <Route path="/masters" exact component={Masters} />
        <Route path="/assistance" exact component={Assistance} />
        <Route path="/online" exact component={Online} />
        <Route path="/captain/:slug" exact component={Captain} />
        <Route path="/terms" exact component={Terms} />
        <Route path="/registered" exact component={Registered} />
        <Route path="/downloads" exact component={Downloads} />
        <Route path="/admin/registrations" exact component={Registrations} />
        <Route path="/regform" exact component={RegForm} />
        <Route path="/csregistration/:registrationId" component={ThankYou} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
