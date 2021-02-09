import React from 'react'

import * as BooksAPI from '../BooksAPI'

export class BookShelf extends React.Component {
  
       
     render() {
     
        return <div className="bookshelf-books">
                        <ol className="books-grid">

       { this.props.books   && this.props.books.map(x=>
                     <li>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url("${x.imageLinks && x.imageLinks.thumbnail}}")` }}>
                                </div>
                                <div className="book-shelf-changer">
                               <select onChange={ (evt)=>
                                {const val = evt.target.value;
                                   var shelf = val.split('|');
                                  const title = shelf[1];
                                  shelf = shelf[0];
                                   {this.props.updatebook(x, shelf)} 
                                     //   this.state.books.filter(x=>x.title == title)[0].shelf = shelf;
                                      
                                    //   this.setState(state => ({books: this.state.books, showSearchPage: state.showSearchPage, searchbooks:state.searchbooks}))

                                     }
                              }>
                                 <option value="move"  >Move to...</option>
                                 <option  value={'currentlyReading|'+x.title}   >Currently Reading</option>
                                 <option value={'wantToRead|'+x.title}>Want to Read</option>
                                 <option value={'read|'+x.title}>Read</option>
                                 <option value={'none|'+x.title}>None</option>
                               </select>
                             </div>
                            </div>
                            <div className="book-title">{x.title} </div>
                            <div className="book-authors">{x.authors && x.authors.reduce((a,b)=>a+','+b)}</div>
                        </div>
                    </li>)
                    }
 
            </ol>
          </div>


    }
}

 export default BookShelf