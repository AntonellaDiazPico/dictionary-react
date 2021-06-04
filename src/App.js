import SearchEngine from "./SearchEngine";
import "./App.css";
import Footer from "./Footer";
// import infinitySymbol from "./infinitySymbol.jpeg";

export default function App() {
  return (
    <div className="App">
      <header>
        {/* <img src={infinitySymbol} className="header-img" alt="logo" /> */}
        <h1>Antonella's Dictionary</h1>
      </header>
      <div className="container">
        <SearchEngine defaultQuery="chef" />
        <Footer />
      </div>
    </div>
  );
}
