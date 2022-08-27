import "./styles.css";
import ListOfGifs from "./components/ListOfGifs";
import { useState } from "react";
import { Route, Link, useLocation } from "wouter";
import { handleChange, handleSubmit } from "./services/searchGif";
import Spinner from "./components/spinner/spinner";
export default function App() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useLocation();
  const [loading, setLoading] = useState("false");
  // error lens
  return (
    <div className="App">
      <h1
        onClick={() => {
          if (location != "/") {
            setLocation("../../");
            setKeyword("");
          } else {
            return false;
          }
        }}
      >
        App
      </h1>
      <form onSubmit={(event) => handleSubmit(event, keyword, setLocation)}>
        <input
          type="text"
          value={keyword}
          onChange={(event) => handleChange(event, setKeyword)}
          placeholder="search a gif here"
        />
        <button>search</button>
      </form>
      <Link to="gif/Paraguay">Paraguay</Link>
      <Link to="gif/videogames">video Games</Link>

      <section>
        {loading == true ? (
          <p>cargando...</p>
        ) : (
          <Route component={ListOfGifs} path="/gif/:keyword" keyword={keyword} />
        )}
      </section>
    </div>
  );
}
