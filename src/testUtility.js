import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducer/reducer.js";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

export default function renderWithRedux(
  component,
  {
    initialState,
    store = createStore(rootReducer, applyMiddleware(thunk), initialState),
  } = {}
) {
  return {
    ...render(
      <BrowserRouter>
        <Provider store={store}>{component}</Provider>
      </BrowserRouter>
    ),
    store,
  };
}
