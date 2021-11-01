import "./App.css";
import Header from "./header/Header";
import NavigationMenu from "./navigationMenu/NavigationMenu";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header className="header" />
      <NavigationMenu className="menu" />
      <Content className="content" />
      <Footer
        className="footer"
        name="Mathieu"
        framework="React"
        where="Le Reacteur"
      />
    </div>
  );
}

export default App;
