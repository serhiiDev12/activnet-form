import './App.css';
import InquiryForm from "./pages/InquiryForm";
import logo from './logo.svg'
import {Provider} from "react-redux";
import {store} from './store'

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <nav>
                  <img className="activnet" src={logo} alt="ActivNet"/>
                  <a href="#about">Back to main menu</a>
                  <a href="#features">FAQ</a>
              </nav>
              <InquiryForm/>
          </div>
      </Provider>
  );
}

export default App;
