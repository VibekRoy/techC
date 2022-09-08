import React from "react";
function Loc(props){
    function hclick(e){

    }
    return (
        <div className="loc">
            <img src={props.img} />
            <h1>{props.title}</h1>
            <h3>{props.content}</h3>
            <h2>{props.price}<span>{props.cont}</span></h2>
            <button onClick={hclick}>Add to Cart</button>
        </div>
    );
}
export default Loc;