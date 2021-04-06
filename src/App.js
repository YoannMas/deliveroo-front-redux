import "./App.scss";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

// REDUCER IMPORT
import cartRecucer from "./reducers/cartReducer.js"

// COMPONENTS IMPORT
import Header from "./components/Header";
import Content from "./containers/Content";

library.add(faStar, faPlus, faMinus);

const store = createStore(
  cartRecucer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Content />
      </div>
    </Provider>
  );
}

export default App;
