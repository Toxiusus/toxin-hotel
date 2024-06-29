import Footer from "./components/modules/Footer/Footer.jsx";
import Header from "./components/modules/Header/Header.jsx";
import Landing from "./components/templates/Landing/Landing.jsx";
import "./globalStyles/globals.scss";
import "./globalStyles/normalize.scss";

function App() {
  return (
    <div>
      <Header />
      <div>
        <Landing />
      </div>
      <Footer />
    </div>
  );
}

export default App;
