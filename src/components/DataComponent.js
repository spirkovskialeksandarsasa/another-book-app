import React , {useState} from "react";
import data from '../listofbooks.json';
import './DataComponent.css';
import '../App.css';
import Search from './Search'

function DataComponent(){
    const Book = ({ author, title, genre }) => (
        <div className="books">
          <div className="book-props">
            <div className="title"><h2>{title}</h2></div>
            <div className="description">
            <p className="author">Written by <strong>{author}</strong></p>
            </div>
            <p className="genre">{genre}</p>
            </div>
          </div>
      );
      const [query,setQuery] = useState('');
      const sortedData = [...data].sort((a, b) => a.author.localeCompare(b.author));
      const filteredData = sortedData.filter((book) => {
        const titleMatches = book.title.toLowerCase().includes(query.toLowerCase());
        const authorMatches = book.author.toLowerCase().includes(query.toLowerCase());
        const genreMatches = book.genre.toLowerCase().includes(query.toLowerCase());
        return titleMatches || authorMatches || genreMatches;
      });

        return (
            <>
            <div className="main">
            <Search onSearch={setQuery} />
<div className="book-container">
            {filteredData.map((book, index) => (
              <Book
                key={index}
                author={book.author}
                title={book.title}
                genre={book.genre}
              />
            ))}
            </div>
            </div>
          </>
        );
      }
export default DataComponent;