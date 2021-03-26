import React, { Component } from "react";
import Header from "./Components/Header";
import SearchBar from "./Components/SeachBar";
import BookList from "./Components/BookList";
import Shelf from "./Components/Shelf";
import data from "./Components/data";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: data,
      shelf: [],
    };

    this.addToShelf = this.addToShelf.bind(this);
    this.clearShelf = this.clearShelf.bind(this);
    this.filterBooks = this.filterBooks.bind(this);
    this.reset = this.reset.bind(this);
  }

  addToShelf(book) {
    this.setState({ shelf: [book, ...this.state.shelf] });
  }

  clearShelf() {
    this.setState({ shelf: [] });
  }

  filterBooks(input) {
    let filteredBooks = this.state.books.filter((book) =>
      book.title.toLowerCase().includes(input)
    );
    this.setState({
      books: filteredBooks,
    });
  }

  reset() {
    this.setState({ books: data });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar filterBooks={this.filterBooks} reset={this.reset} />
        <div className="container">
          <BookList
            bookList={this.state.books}
            addToShelf={this.addToShelf}
            filterBooks={this.filterBooks}
          />
          <Shelf shelf={this.state.shelf} clearShelf={this.clearShelf} />
        </div>
      </div>
    );
  }
}

export default App;
