import axios from "axios";

const baseurl = "https://www.googleapis.com/books/v1/volumes?q=";
const api_KEY = "";

// TODO
  // partial response to retrieve only relevant data
  // revise functions to allow pagination of results(take in current page# and set new startIndex and maxResults)

export const searchByAuthor = (query) => {
  console.log("searching by author")
  axios({
    method: "GET",
    url: `${baseurl}inauthor:${query}&maxResults=20&key=${api_KEY}`
  }).then(
    result => { console.log("author search", result) })
};

export const searchByTitle = (query) => {
  axios({
    method: "GET",
    url: `${baseurl}intitle:${query}&maxResults=20&key=${api_KEY}`
  }).then(result => { console.log("title search", result) })
};

