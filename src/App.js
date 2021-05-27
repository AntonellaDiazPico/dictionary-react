import SearchEngine from "./SearchEngine";
import "./App.css";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          {/* <img src={dictionaryArtClip} className="header-img" alt="logo"/> */}
        </header>
        <SearchEngine defaultQuery="beer" />
        <Footer />
      </div>
    </div>
  );
}
