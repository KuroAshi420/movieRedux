import React, {useState} from 'react';
import Modal from 'react-modal';
import StarRatingComponent from 'react-star-rating-component';
import {connect} from "react-redux";
import {addMovie} from "../action/action"
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    height                : '500px'
  }
};
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById("root"))
 
function Modall(props){
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }
 
  function closeModal(){
    setIsOpen(false);
  }
  function onStarClick(nextValue, prevValue, name) {
    setRating(nextValue);
  }
  const [inputLien,setInputLien]= useState("")
  const [inputName,setInputName]= useState("")
  const [inputDate,setInputDate]= useState("")
  const [inputDescrp,setInputDescrp]= useState("")
  const [rating, setRating] = useState(0);
    const addNewMovie = () =>{
     props.addMovie({
       id : Date.now(),
       lien : inputLien,
       name : inputName ,
       date : inputDate,
       rating : rating,
       descrp :inputDescrp,
       isEditable : false
     })
     setInputLien("")
     setInputDate("")
     setInputName("")
     setInputDescrp("")
     setRating(0)
    }
 
    return (
      <div>
        <button onClick={openModal} className="modal">Ajouter un film</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 ref={_subtitle => (subtitle = _subtitle)}>MOVIE INFORMATIONS</h2>
        
          <form className="form">
            <input  placeholder="Link of image" 
            className="inpt-form"
            type="text" 
            value={inputLien} 
            onChange={(e)=>setInputLien(e.target.value)}
            />
            <input  placeholder="Movie name"
            type="text" 
            className="inpt-form"
            value={inputName} 
            onChange={(e)=>setInputName(e.target.value)}/>
            <input  placeholder="Movie date"
            type="text" 
            className="inpt-form"
            value={inputDate} 
            onChange={(e)=>setInputDate(e.target.value)}/>
            <input  placeholder="Movie description"
            type="text" 
            className="inpt-form"
            value={inputDescrp} 
            onChange={(e)=>setInputDescrp(e.target.value)}/>
            <StarRatingComponent name="movie-rating" className="ratingt-form" value={rating} onStarClick={onStarClick}/>
            </form>
            <button className="btn" onClick={addNewMovie}>Add</button>
            <button className="btn" onClick={closeModal}>close</button>
          
        </Modal>
      </div>
    );
}

         
         
         
const mapDispatchToProps = (dispatch) => {
    return {
        addMovie:(payload) => dispatch(addMovie(payload))
    }
}
 
export default connect(null,mapDispatchToProps)(Modall)