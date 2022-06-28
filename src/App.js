import "./App.css";
import RegistrationForm from "./components/RegistrationForm";
import greatVibes from "./assets/greatVibesLogo.png";

function App() {
  return (
    <div className="container">
      <img src={greatVibes} alt="logo" id="logo" />
      <RegistrationForm />
      <div id="rightBox"></div>
    </div>
  );
}

export default App;
