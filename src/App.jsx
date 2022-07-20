import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Repositories from "./components/Repositories/Repositories";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Repositories />
      <Footer />
    </div>
  );
}

export default App;
