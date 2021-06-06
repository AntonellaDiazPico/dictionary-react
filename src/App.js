import SearchEngine from "./SearchEngine";
import "./App.css";
import Footer from "./Footer";


export default function App() {
  return (
    <div className="App">

      <div className="container">
        <SearchEngine defaultQuery="chef" />
        <Footer />
      </div>
    </div>
  );
}
