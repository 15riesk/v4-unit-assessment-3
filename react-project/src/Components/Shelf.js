import React from "react";

function Shelf(props) {
  const titles = props.shelf.map((element) => {
    return (
      <div>
        <p>{element.title}</p>
      </div>
    );
  });

  return (
    <div className="shelf">
      <h2>Your Shelf</h2>
      <button onClick={props.clearShelf}>Clear Shelf</button>
      <div className="list">
        <p>{titles}</p>
      </div>
    </div>
  );
}

export default Shelf;
