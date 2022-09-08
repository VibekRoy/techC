import React from "react";
function Loc(props){
    function hclick(e){

    }
    return (
        <div className="loc">
            <img src="logo.svg" alt="alt" />
            <h1>Shimla</h1>
            <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h3>
            <h2>12000-20000 <span>12 -15 days</span></h2>
            <button onClick={hclick}>Add to Cart</button>
        </div>
    );
}
export default Loc;