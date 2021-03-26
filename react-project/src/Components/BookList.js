import React from "react";

function BookList(props) {
  const mappedBooks = props.bookList.map((element) => {
    return (
      <div onClick={() => props.addToShelf(element)} className="book">
        <img className="image" src={element.img} />
        <h4 className="title">
          {element.title} by {element.author}
        </h4>
      </div>
    );
  });
  return <div className="book-list">{mappedBooks}</div>;
}

export default BookList;
