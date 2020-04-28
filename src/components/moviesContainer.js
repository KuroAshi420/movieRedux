import React, {useState} from "react";
import StarRatingComponent from 'react-star-rating-component';
import Modall from "./modal";
import {connect} from 'react-redux';
import {searchMovie,searchRating} from "../action/action"
function Container(props) {
    const [rating2, setRating2] = useState(0);
    const [recherche,setRecherche]= useState("")
    function onStarClick(nextValue, prevValue, name) {
        setRating2(nextValue);
      }
      
  return (
    <div className="main">
      <div className="search-bar">
        <input
          className="input"
          type="text"
          placeholder="Enter movie name to search"
          value={recherche} 
          onChange={(e)=>setRecherche(e.target.value)}
        />
        <button className="search-btn" onClick={()=>props.searchMovie(recherche)}>Search</button>
        
      </div>
      <div className="min-rating">
         <StarRatingComponent 
         className="search-rating"
         name="search-rating"
         value={rating2}
         onStarClick={onStarClick}
         />
         <button className="search-btn" onClick={()=>props.searchRating(rating2)}>R.Search</button>
        </div>
      <div className="modl">
          <Modall/>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
    return {
      searchMovie:(payload) => dispatch(searchMovie(payload)),
      searchRating:(payload) => dispatch (searchRating(payload))
    }
}

export default connect(null,mapDispatchToProps)(Container);
