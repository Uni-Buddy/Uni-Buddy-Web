import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store/rootReducer";
import Total from "./components/Total";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Total />
      </Provider>
    </Router>
  );
}

export default App;
