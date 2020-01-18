import axios from "axios";

export default
    {
        getBooks: () => 
        {
            return axios.get("/api/books/");
        },

        getBook: title => 
        {
            return axios.get("/api/books/" + title);
        },

        deleteBook: id => 
        {
            return axios.delete("/api/books/" + id);
        },

        saveBook: bookData => 
        {
            return axios.post("/api/books/", bookData);
        },

        searchBooks: param =>
        {
            return axios.get("/api/search/" + param)
        }
    }