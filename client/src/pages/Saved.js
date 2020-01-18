import React from "react";
import ResultsDiv from "../components/ResultsDiv"
import LibrosGuardados from "../components/LibrosGuardados"
import JumbotronDos from "../components/JumbotronDos"
import API from "../utils/API";

class Saved extends React.Component
{
    state =
        {
            savedBooks: []
        }

    componentDidMount = () =>
    {
        API.getBooks()
        .then(res =>
        {
            console.log(res.data);
            this.setState({ savedBooks: res.data });
        })
        .catch(err => console.log(err));
    }

    clickDelete = (index) =>
    {
        API.deleteBook(this.state.savedBooks[index]._id)
        .then(() => { return API.getBooks(); })
        .then(res => { this.setState({ savedBooks: res.data }); })
        .catch(err => console.log(err));
    }

    searchBooks = (event) =>
    {
        window.location.href = "/";
    }

    render = () => {
        return (
            <div>
                <div className="htmlBody">
                    <div className="jumbotron jumbo text-center">
                        <JumbotronDos
                            searchBooks={this.searchBooks}
                        />
                    </div>
                </div>
                <div className="container-fluid containerDiv">
                    <div>
                        {this.state.savedBooks.length ? (
                            <ResultsDiv>
                                {this.state.savedBooks.map((books, i) => (
                                    <LibrosGuardados
                                        id={i}
                                        key={i}
                                        delete={this.clickDelete}
                                        infoLink={books.link}
                                        title={books.title}
                                        image={books.image}
                                        description={books.description}
                                        authors={books.authors}
                                    />
                                ))}
                            </ResultsDiv>
                            )  :  (
                                <h3>No Results to Display</h3>
                            )}
                        <br />
                    </div>
                </div>
            </div>
        );
    }
}

export default Saved;