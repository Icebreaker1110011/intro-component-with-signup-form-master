import "./css/App.css";
import HeadLine from "./HeadLine.js";
import SignUp from "./SignUp.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="container">
      <div className="app-container">
        <HeadLine />
        <SignUp />
      </div>
    </div>
  );
}

export default App;
