import React, { useState, useEffect } from "react";
import axios from "axios";
const Search = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((res) => {
        setCountries(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setFilteredCountries(
      countries.filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, countries]);

  if (loading) {
    return <p>Loading countries...</p>;
  }

  return (
    <div className="App">
      <h1>Countries Lists</h1>
      <p>
        If you like my work, please support by subscribing{" "}
        <a
          style={{ color: "red" }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/channel/UCdItDI6oTgPW7l9WOJI7ItA/"
        >
          D'coders youtube channel
        </a>
      </p>
      <input
        type="text"
        placeholder="Search Countries"
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredCountries.map((country, idx) => (
        <CountryDetail key={idx} {...country} />
      ))}
    </div>
  );
};

const CountryDetail = (props) => {
  const { name, flag } = props;

  return (
    <>
      <p>
        <img src={flag} alt={name} style={{ width: "20px", height: "20px" }} />
      </p>
      <p>{name}</p>
    </>
  );
};
export default Search;

{
  /* <nav>
        <div class="nav-wrapper">
          <form>
            <div class="input-field">
              <input id="search" type="search" required />
              <label for="search">
                <i class="material-icons">search</i>
              </label>
              <i class="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav> */
  // <div className="search_container">
  //   <h2>live search here</h2>
  //   <label className="search-label" htmlFor="search-input">
  //     <input
  //       type="text"
  //       value=""
  //       name="query"
  //       id="search-input"
  //       placeholder="Search"
  //       onChange={handleChanges} //{(event) => setQuery(event.target.value)}
  //     />
  //   </label>
  // </div>
}
