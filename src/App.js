import "./App.css";
import ResponsiveAppBar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";
import Middle from "./components/Middle";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Header />
      <Body />
      <Middle />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
