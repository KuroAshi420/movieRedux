import React  from "react";
import {connect} from 'react-redux';
import StarRatingComponent from 'react-star-rating-component';
import { Redirect } from "react-router-dom";

class Description extends React.Component {
  state = {
    id: this.props.match.params.id,
  };

  render() {
    const targetMovie = this.props.film.find(
        (el) => el.id == this.state.id
      );
     
      const { id, lien, name, date, rating, descrp } = targetMovie;
      
    return (
      <div >
        
        {targetMovie ? (
          <div className="dsc" key={id}>
            <img src={lien} />
            <h1>{name}</h1>
            <h2>{date}</h2>
            <StarRatingComponent name="rat" value={rating} />
            <span>
              {descrp}
            </span>
          </div>
        ) : (
          <Redirect to="/" />
        )}
        
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    film : state.item
})
    export default connect(mapStateToProps) (Description);