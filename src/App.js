import './App.css';
import InquiryForm from "./pages/InquiryForm";
import logo from './logo.svg'

function App() {
  return (
      <div className="App">
          <nav>
              <img className="activnet" src={logo} alt="ActivNet"/>
              <a href="#about">Back to main menu</a>
              <a href="#features">FAQ</a>
          </nav>
          <InquiryForm/>
      </div>
  );
}

export default App;
