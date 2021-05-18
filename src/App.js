import SearchEngine from "./SearchEngine";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          {/* <img src={dictionaryArtClip} className="header-img" alt="logo"/> */}
        </header>
        <SearchEngine />
      </div>
    </div>
  );
}
