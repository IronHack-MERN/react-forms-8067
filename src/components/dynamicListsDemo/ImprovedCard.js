import React from 'react';

const improvedCard = (props) => {
  const { title, director, clickToDelete, hasOscars, IMDbRating } = props;

  let awardText;
    if(props.hasOscars){
        if(props.IMDbRating >= 9){
            awardText = <p> WOW! Oscar Award and IMDb rating {props.IMDbRating}! </p>
        } else if(props.IMDbRating >= 7){
            awardText = <p> Got the Oscar Award and has IMDb rating {props.IMDbRating}, not bad at all! </p>
        }
    } else {
        awardText = <p> Great movie but no Oscars! Has IMDb rating {props.IMDbRating}. </p>
    }


  return (
    <div className="movies-list-item">
      <h2>{title}</h2>
      <p>Director: {director}</p>
      {
        hasOscars ?
          <p>Got the Oscar Award!! 😉 </p>
          :
          <p>Great movie but no Oscar!  😔 </p>
      }

      {props.hasOscars && <p>2da forma: True -> Got the Oscar Award! 😉 </p>}
      {!props.hasOscars && <p>2da forma: False -> Great movie but no Oscars! 😔 </p>}

      {awardText}
      <button onClick={clickToDelete}>Delete</button>
    </div>
  )
};

export default improvedCard;