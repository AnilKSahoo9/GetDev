import React from 'react';
//import '../Pages/Search/Search.css';
export default (props) => {
    const {loading,showPrevLink,showNextLink,handlePrevClick,handleNextClick} = props;
return (<div className="nav-link-container">
<a href="#" className={`nv-link ${showPrevLink ? 'show' : 'hide'}`} onClick={handlePrevClick}>Prev</a>
<a href="#" className={`nv-link ${showNextLink ? 'show' : 'hide'}`} onClick={handleNextClick}>Next</a>
</div>);
}