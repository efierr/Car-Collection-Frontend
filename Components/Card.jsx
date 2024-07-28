import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props){
    return(
        
      <div className="card">
        <div className="top">

        <p>{props.id}</p>
          <Avatar img={props.img}/>

          </div>

    <div className="bottom">
        <Detail
            detailInfo={props.make}
        />

        <Detail
            detailInfo={props.model}
        />

        <Detail
            detailInfo={props.year}
        />
        <Detail
            detailInfo={props.color}
        />
        <Detail
            detailInfo={props.price}
        />
        <Detail
            detailInfo={props.is_Favorite}
        />
      <p className="info">{props.make}</p>
      <p className="info">{props.model}</p>
      <p className="info">{props.year}</p>
      <p className="info">{props.color}</p>
      <p className="info">{props.price}</p>
      <p className="info">{props.is_Favorite}</p>
    </div>
    </div>
    );
}

export default Card;
