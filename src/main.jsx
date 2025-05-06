import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import "./layout/Mainlayout";
import { Mainlayout } from "./layout/Mainlayout";
import { Provider } from "react-redux";
// import { store } from "./redux";
import { store } from "./store";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Mainlayout />
  </Provider>
);
