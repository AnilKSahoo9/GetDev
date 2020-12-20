import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import { Button, Card, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import PageNavigation from '../../components/PageNavigation';
import { Form } from 'semantic-ui-react';
import Swal from "sweetalert2";
const Search = () => {
  const [query,setQuery] = useState('');
  const [apiData,setApiData] = useState([]);
  const [results,setResults] = useState({});
  const [loading,setLoading] = useState(false);
  const [msg,setMsg] = useState('');
  const [totalResults,setTotalResults] = useState(0);
  const [totalPages,setTotalPages] = useState(0);
  const [currentPageNo,setCurrentPageNo] = useState(0);
const [Total,setTotal] = useState(0);
const handleChange = (e) => {
setQuery(e.target.value);
}

//console.log(query);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(query){
    retrieveDataFromServer(1,query);}
    else{
      alert('plz input a skill');
    }
  }
  //console.log(apiData)
  const retrieveDataFromServer = (updatedPageNo = '',query) => {
    setLoading(true);
    const pageNumber = updatedPageNo ? `?page=${updatedPageNo}&limit=3` : '';
    axios.get(`http://localhost:4000/api/users/search/skill/${query}${pageNumber}`).then(responseData => {console.log(responseData);
    const resultNotFoundMsg = ! responseData.data.user.length ? 'there re no more search results.plz try a new search' : '';
    setApiData(responseData.data.user);
    setTotal(responseData.data.user.length);
    const totalPagesCount = getPageCount(Total,5);
    //setResults(responseData.data.user);
    //setMsg(resultNotFoundMsg);
    setTotalResults(Total);
    setTotalPages(totalPagesCount);
    setCurrentPageNo(updatedPageNo);
    setLoading(false);
  })
  }

  const getPageCount = (total,denominator) => {
    const divisible = 0 === total % denominator;
    const valueToBeAdded = divisible ? 0 : 1;
    return Math.floor(total / denominator) + valueToBeAdded;
  }

  const handlePageClick = (type,Event) => {
      //Event.preventDefault();
      const updatePageNo = 'prev' === type ? currentPageNo - 1 : currentPageNo + 1;
      if(!loading){
        setLoading(true);
        retrieveDataFromServer(updatePageNo,query);
      }

  }

  const showPrevLink = 1 < currentPageNo;
  const showNextLink = totalPages > currentPageNo;
//  const renderSearchResults = () => {
//   if(Object.keys(results).length && results.length){
//     return(
//       <div className="results-container">
//         {results.map((item) => {
//           return(
//             <a key={item.id} href={item.github} className="result-item">
//               <h6 className="image-username">{item.name}</h6>
//               <div className="image-wrapper">
//                 <img className="image" src={item.image} alt={`${item.name} image`}/>
//               </div>
//             </a>
//           )
//         })}
//       </div>
//     );
//   }
//  };

console.log(apiData);
//console.log(apiData.length);
//console.log(results);

const giveAlert = () => {
  return(
    <div>
      {Swal.fire({
            icon: "success",
            title: "",
            text: "User requested successfully",
            showConfirmButton: false,
            timer: 2000,
          })}
    </div>
  );
}
return(
  <div>
  {/* <div className="searchForm">
    <form onSubmit={handleSubmit}>
      <input type="text" id="filter" placeholder="Search for..." onChange={handleChange} />
      <input type="submit" value="Submit"/>
    </form>
  </div> */}
  <div className="searchForm">
  <Form onSubmit={handleSubmit}>
    <Form.Group>
          <Form.Input
            placeholder='Search....'
            name="name"
            onChange={handleChange}
          />
          <Form.Button content='Search' />
    </Form.Group>
      </Form>
  </div>
  
  <div className="cards2">
    {apiData.length >= 1  ? (
      //<div><h1>success</h1></div>
      <div>

      <div className="cards">
        {apiData.map((item) => (<ol key={item.id}>
        <Card.Group>
    <Card>
      <Card.Content>
        <Card.Header>{item.name}</Card.Header>
        <Card.Meta>{item.email}</Card.Meta>
        <Card.Description>
          <strong>{item.skill.join(",")}</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={giveAlert}>
            request
          </Button>
        </div>
      </Card.Content>
    </Card>
    </Card.Group>
      </ol>))}
     </div>

     <div className="linkcontainer">
      <PageNavigation 
      loading={loading}
      showPrevLink={showPrevLink}
      showNextLink={showNextLink}
      handlePrevClick={() => handlePageClick('prev',Event)}
      handleNextClick={() => handlePageClick('next',Event)}
      />

      </div>

      </div>
    ) : console.log("failed")}

    </div>

  </div>
  //{renderSearchResults}
);
}
export default Search;

