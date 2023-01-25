import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import "./main.css";
import { Router } from "./router";
import i18n from "./i18n";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
