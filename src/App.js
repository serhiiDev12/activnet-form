import './App.css';
import InquiryForm from "./pages/InquiryForm";
import logo from './logo.svg'
import {Provider} from "react-redux";
import {store} from './store'
import {Link, RouterProvider} from "react-router-dom";
import {router} from "./router";

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <RouterProvider router={router} />
          </div>
      </Provider>
  );
}

export default App;
