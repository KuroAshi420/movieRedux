import React, {useState} from "react";
import StarRatingComponent from 'react-star-rating-component';
import {connect} from 'react-redux';
import {deleteMovie, saveMovie,editMovie} from "../action/action"
import { Link, useHistory } from "react-router-dom";

 function Card(props) {
  const [newImage,setNewImage] = useState("")
  const [newName,setNewName] = useState("")
  const [newDate,setNewDate] = useState("")
  const [newDescrp,setNewDescrp] = useState("")
  const [newRating,setNewRating] = useState(0)
  function onStarClick(nextValue, prevValue, name) {
    setNewRating(nextValue);
  }
  let history = useHistory()

  

  return (
    <div className="afiich">
    
        {props.film.map((el)=>( 
          <div className="card-aff">
            {el.isEditable ?
           <div className="card-edit">
            <input  placeholder="Link of image" 
            type="text" 
            className='inpt-edit'
            value={newImage} 
            onChange={(e)=>setNewImage(e.target.value)}
            />
            <input  placeholder="Movie name"
            type="text" 
            className='inpt-edit'
            value={newName} 
            onChange={(e)=>setNewName(e.target.value)}/>
            <input  placeholder="Movie date"
            type="text" 
            className='inpt-edit'
            value={newDate} 
            onChange={(e)=>setNewDate(e.target.value)}/>
            <input  placeholder="Movie description"
            type="text" 
            className='inpt-edit'
            value={newDescrp} 
            onChange={(e)=>setNewDescrp(e.target.value)}/>
            <StarRatingComponent
            className="card-rating"
            name="new-rating"
            value={newRating}
            onStarClick={onStarClick}
            />
            <button className="btn" onClick={()=>props.saveMovie({id:el.id,lien:newImage,name:newName,date:newDate,descrp:newDescrp,rating:newRating})}>Save</button>
            </div>
       :<div className="card">
      <div className="card-img">
        <img className="movie-img" src={el.lien} alt="" />
      </div>
      <div className="card-name">
        <h3>{el.name}</h3>
      </div>
      <div className="card-date">
        <h4>{el.date}</h4>
      </div>
      <div className="card-rating">
          <StarRatingComponent 
          className="card-rating"
          name="card-rating"
          value={el.rating}/>
     </div>
      <div className="card-description">
        <button className="description-button" onClick={() => history.push(`/${el.id}`)}>Movie description</button>
      </div>
      <div className="card-button">
        <button className="btn" onClick={()=>{props.editMovie(el.id); setNewImage(el.lien);setNewName(el.name);setNewDate(el.date);setNewDescrp(el.descrp);setNewRating(el.rating)}}>Edit</button>
        <button className="btn" onClick={()=>props.deleteMovie(el.id)}>Remove</button>
      </div>
      </div>}
      </div>
        ))}

    </div>
    
    
  );
}
const mapDispatchToProps = (dispatch) => {
    return {
      deleteMovie:(payload) => dispatch(deleteMovie(payload)),
      saveMovie:(payload) => dispatch(saveMovie(payload)),
      editMovie:(payload) => dispatch(editMovie(payload))
    }
}
const mapStateToProps = (state) => ({
    film : state.item
})
export default connect(mapStateToProps,mapDispatchToProps)(Card);
