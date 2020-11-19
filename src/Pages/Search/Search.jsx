import React, { useState, useEffect } from "react";
import axios from "axios";
import './Search.css';
// const Search = () => {
//   const [countries, setCountries] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [search, setSearch] = useState("");
//   const [filteredCountries, setFilteredCountries] = useState([]);

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get("https://restcountries.eu/rest/v2/all")
//       .then((res) => {
//         setCountries(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   useEffect(() => {
//     setFilteredCountries(
//       countries.filter((country) =>
//         country.name.toLowerCase().includes(search.toLowerCase())
//       )
//     );
//   }, [search, countries]);

//   if (loading) {
//     return <p>Loading countries...</p>;
//   }

//   return (
//     <div className="search-container">
//       <h1>Countries Lists</h1>
//         <a
//           style={{ color: "red" }}
//           target="_blank"
//           rel="noopener noreferrer"
//           href="https://www.youtube.com/channel/UCdItDI6oTgPW7l9WOJI7ItA/"
//         >
//           D'coders youtube channel
//         </a>
      
//       <input
//         type="text"
//         placeholder="Search Countries"
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       {filteredCountries.map((country, idx) => (
//         <CountryDetail key={idx} {...country} />
//       ))}
//     </div>
//   );
// };

// const CountryDetail = (props) => {
//   const { name, flag } = props;

//   return (
//     <>
//       <p>
//         <img src={flag} alt={name} style={{ width: "20px", height: "20px" }} />
//       </p>
//       <p>{name}</p>
//     </>
//   );
// };
import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
import moment from 'moment';
import {
  ErrorBoundary,
  Facet,
  SearchProvider,
  SearchBox,
  Results,
  PagingInfo,
  ResultsPerPage,
  Paging,
  Sorting,
  WithSearch
} from "@elastic/react-search-ui";
import {
  BooleanFacet,
  Layout,
  SingleSelectFacet,
  SingleLinksFacet
} from "@elastic/react-search-ui-views";
import "@elastic/react-search-ui-views/lib/styles/styles.css";

const SORT_OPTIONS = [
  {
    name: "Relevance",
    value: "",
    direction: ""
  },
  {
    name: "Title",
    value: "title",
    direction: "asc"
  }
];

const connector = new AppSearchAPIConnector({
  searchKey: "search-371auk61r2bwqtdzocdgutmg",
  engineName: "search-ui-examples",
  hostIdentifier: "host-2376rb",
  endpointBase: ""
});

const config = {
  alwaysSearchOnInitialLoad: true,
  searchQuery: {
    result_fields: {
      title: {
        snippet: {
          size: 100,
          fallback: true
        }
      },
      nps_link: {
        raw: {}
      },
      description: {
        snippet: {
          size: 100,
          fallback: true
        }
      }
    },
    disjunctiveFacets: ["acres", "states"],
    facets: {
      //world_heritage_site: { type: "value" },
      states: { type: "value", size: 30 },
      acres: {
        type: "range",
        ranges: [
          { from: -1, name: "Any" },
          { from: 0, to: 1000, name: "Small" },
          { from: 1001, to: 100000, name: "Medium" },
          { from: 100001, name: "Large" }
        ]
      },
      // location: {
      //   // San Francisco. In the future, make this the user's current position
      //   center: "37.7749, -122.4194",
      //   type: "range",
      //   unit: "mi",
      //   ranges: [
      //     { from: 0, to: 100, name: "Nearby" },
      //     { from: 100, to: 500, name: "A longer drive" },
      //     { from: 500, name: "Perhaps fly?" }
      //   ]
      // },
      // date_established: {
      //   type: "range",

      //   ranges: [
      //     {
      //       from: moment().subtract(50, "years").toISOString(),
      //       name: "Within the last 50 years"
      //     },
      //     {
      //       from: moment().subtract(100, "years").toISOString(),
      //       to: moment().subtract(50, "years").toISOString(),
      //       name: "50 - 100 years ago"
      //     },
      //     {
      //       to: moment().subtract(100, "years").toISOString(),
      //       name: "More than 100 years ago"
      //     }
      //   ]
      // },
      // visitors: {
      //   type: "range",
      //   ranges: [
      //     { from: 0, to: 10000, name: "0 - 10000" },
      //     { from: 10001, to: 100000, name: "10001 - 100000" },
      //     { from: 100001, to: 500000, name: "100001 - 500000" },
      //     { from: 500001, to: 1000000, name: "500001 - 1000000" },
      //     { from: 1000001, to: 5000000, name: "1000001 - 5000000" },
      //     { from: 5000001, to: 10000000, name: "5000001 - 10000000" },
      //     { from: 10000001, name: "10000001+" }
      //   ]
      // }
    }
  },
  autocompleteQuery: {
    results: {
      resultsPerPage: 5,
      result_fields: {
        title: {
          snippet: {
            size: 100,
            fallback: true
          }
        },
        nps_link: {
          raw: {}
        }
      }
    },
    suggestions: {
      types: {
        documents: {
          fields: ["title", "description"]
        }
      },
      size: 4
    }
  },
  apiConnector: connector
};

export default function App() {
  return (
    <SearchProvider config={config}>
      <WithSearch mapContextToProps={({ wasSearched }) => ({ wasSearched })}>
        {({ wasSearched }) => {
          return (
            <div className="App">
              <ErrorBoundary>
                <Layout
                  header={
                    <SearchBox
                      autocompleteMinimumCharacters={3}
                      //searchAsYouType={true}
                      autocompleteResults={{
                        linkTarget: "_blank",
                        sectionTitle: "Results",
                        titleField: "title",
                        urlField: "nps_link",
                        shouldTrackClickThrough: true,
                        clickThroughTags: ["test"]
                      }}
                      autocompleteSuggestions={true}
                      debounceLength={0}
                    />
                  }
                  sideContent={
                    <div>
                      {wasSearched && (
                        <Sorting label={"Sort by"} sortOptions={SORT_OPTIONS} />
                      )}
                      <Facet
                        field="states"
                        label="States"
                        filterType="any"
                        isFilterable={true}
                      />
                      {/* <Facet
                        field="world_heritage_site"
                        label="World Heritage Site?"
                        view={BooleanFacet}
                      />
                      <Facet
                        field="visitors"
                        label="Visitors"
                        view={SingleLinksFacet}
                      />
                      <Facet
                        field="date_established"
                        label="Date Established"
                        filterType="any"
                      />
                      <Facet
                        field="location"
                        label="Distance"
                        filterType="any"
                      /> */}
                      <Facet
                        field="acres"
                        label="Acres"
                        view={SingleSelectFacet}
                      />
                    </div>
                  }
                  bodyContent={
                    <Results
                      titleField="title"
                      urlField="nps_link"
                      shouldTrackClickThrough={true}
                    />
                  }
                  bodyHeader={
                    <React.Fragment>
                      {wasSearched && <PagingInfo />}
                      {wasSearched && <ResultsPerPage />}
                    </React.Fragment>
                  }
                  bodyFooter={<Paging />}
                />
              </ErrorBoundary>
            </div>
          );
        }}
      </WithSearch>
    </SearchProvider>
  );
}

//export default Search;

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
