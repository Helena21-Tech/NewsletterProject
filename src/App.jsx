import React, { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import SuccessPage from "./components/SuccessPage";

function App() {
  const [submit, setSubmit] = useState(false);
  const [email, setEmail] = useState("");
  const dismissHandler = () => {
    setSubmit(false);
  };
  const submitEmailHandler = (email) => {
    setSubmit(true);
    setEmail(email);
  };
  return (
    <React.Fragment>
      {!submit && <Main onSubmit={submitEmailHandler} />}
      {submit && <SuccessPage onDismiss={dismissHandler} email={email} />}
    </React.Fragment>
  );
}

export default App;
