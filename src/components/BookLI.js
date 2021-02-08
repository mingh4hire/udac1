import React from 'react'

import * as BooksAPI from '../BooksAPI'

export class BookLI extends React.Component {
    constructor(books   ){
        super(books);      
      }
 
       
     render() {
     
        return <div className="bookshelf-books">
        { this.books && Object.Prototype.toString.call(this.books) && this.books.map(x=>
            <ol className="books-grid">
                     <li>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url("${x.imageLinks && x.imageLinks.thumbnail}}")` }}>
                                </div>
                            </div>
                            <div className="book-title">{x.title} </div>
                            <div className="book-authors">{x.authors.reduce((a,b)=>a+','+b)}</div>
                        </div>
                    </li>
 

            </ol>)}
        </div>


    }
}

 export default BookLI