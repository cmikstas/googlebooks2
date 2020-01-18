import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron"
import BookSearch from "../components/BookSearch"
import ResultsDiv from "../components/ResultsDiv"
import TarjetaDeLibro from "../components/TarjetaDeLibro"
import "./search.css";
import API from "../utils/API";

class Search extends Component
{
  state =
  {
    books: [],
    bookName: "",
    saveStatus: []
  };

  clickSave = (index) =>
  {
    let saveStatus = [...this.state.saveStatus];
    let bookData = {};

    bookData =
    {
      authors: this.state.books[index].volumeInfo.authors ?
        this.state.books[index].volumeInfo.authors : "N/A",
      description: this.state.books[index].volumeInfo.description ?
        this.state.books[index].volumeInfo.description : "N/A",
      image: this.state.books[index].volumeInfo.imageLinks.smallThumbnail ?
        this.state.books[index].volumeInfo.imageLinks.smallThumbnail : "#",
      link: this.state.books[index].volumeInfo.infoLink ?
        this.state.books[index].volumeInfo.infoLink : "N/A",
      title: this.state.books[index].volumeInfo.title ?
        this.state.books[index].volumeInfo.title : "N/A"
    }

    API.getBook(bookData.title)
    .then(res =>
    {
      if(res.data.length)
      {
        saveStatus[index] = "Already saved";
        this.setState({ saveStatus: saveStatus });
      }
      else
      {
        API.saveBook(bookData)
        .then(res =>
        {
          saveStatus[index] = "Saved";
          this.setState({ saveStatus: saveStatus });
        })
        .catch(err => console.log(err));
      }
    })
    .catch(err => console.log(err));
  }

  searchBooks = (event) =>
  {
    event.preventDefault();

    let bookName = this.state.bookName;
    this.setState({ bookName: "" });

    //console.log(bookName);

    API.searchBooks(bookName)
    .then(res =>
    {
      if(res.data.items)
      {
        let saveStatus = [];

        for(let i = 0; i < res.data.items.length; i++)
        {
          saveStatus.push(" ");
        }

        this.setState(
        {
          books: res.data.items,
          saveStatus: saveStatus
        });
      }
      else
      {
        this.setState(
        {
          books: [],
          saveStatus: []
        });
      }
    })
    .catch(err => console.log(err));
  };

  handleInputChange = event =>
  {
    //console.log(event);
    //const bookName = event.target.value;
    this.setState({ bookName: event.target.value });
  };

  savedBooks = (event) =>
  {
      window.location.href = "/saved";
  }

  render()
  {
    return (
      <div className="htmlBody">
        <div className="jumbotron jumbo text-center">
          <Jumbotron
            savedBooks={this.savedBooks}
          />
        </div>
        <div className="container-fluid containerDiv">
          <BookSearch
            searchBooks={this.searchBooks}
            handleInputChange={this.handleInputChange}
          />
          {this.state.books.length ? (
            <ResultsDiv>
              {this.state.books.map((books, i) => (
                <TarjetaDeLibro
                  image={books.volumeInfo.imageLinks ? books.volumeInfo.imageLinks.smallThumbnail : "N/A"}
                  title={books.volumeInfo.title ? books.volumeInfo.title : "N/A"}
                  authors={books.volumeInfo.authors ? books.volumeInfo.authors : "N/A"}
                  description={books.volumeInfo.description ? books.volumeInfo.description : "N/A"}
                  infoLink={books.volumeInfo.infoLink ? books.volumeInfo.infoLink : "#"}
                  id={i}
                  key={i}
                  status={this.state.saveStatus[i]}
                  save={this.clickSave}
                />
              ))}
            </ResultsDiv>
          ) : (
              <h3>No Results to Display</h3>
            )}
          <br />
        </div>
      </div>
    )
  }
}

export default Search;