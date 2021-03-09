import React from "react";
import ReactDOM from "react-dom";
import AppLayout from "./Components/AppLayout";
import App from "./Components/App";
import Form from "./Components/Form";

ReactDOM.render(
  <React.StrictMode>
    <AppLayout>
      <App>
        <Form />
      </App>
    </AppLayout>
  </React.StrictMode>,
  document.getElementById("root")
);
