import React from 'react'


export class BookLI extends React.Component {
    constructor( books  ){
        super(books);      
        alert('books is '  + (books && books.length)  )
    }
    render() {
        return <div>
            {this.books}
            <div style={{"color":'green'}}> asfdasdfdsf</div>
            asdfadfdf
            {this.books && this.books.map(x=><span>{x.title}</span>)}
            
            </div>
        return <div className="bookshelf-books">
            <ol className="books-grid">
                {this.books && this.books.length} is length
                {this.books && this.books.map(x =>
                    <li>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url("${x.imageLinks && x.imageLinks.thumbnail}}")` }}>
                                </div>
                                <div className="book-shelf-changer">
                                    <select onChange={(evt) => {
                                        // const val = evt.target.value;
                                        // var shelf = val.split('|');
                                        // const title = shelf[1];
                                        // shelf = shelf[0];
                                        // this.state.books.filter(x => x.title == title)[0].shelf = shelf;

                                      //  this.setState({ books: this.state.books, searchbooks: this.books, showSearchPage: this.state.showSearchPage })

                                    }
                                    }>
                                        <option value="move"  >Move to...</option>
                                        <option value={'currentlyReading|' + x.title}   >Currently Reading</option>
                                        <option value={'wantToRead|' + x.title}>Want to Read</option>
                                        <option value={'read|' + x.title}>Read</option>
                                        <option value={'none|' + x.title}>None</option>
                                    </select>
                                </div>
                            </div>
                            <div className="book-title">{x.title} </div>
                            <div className="book-authors">{x.authors.reduce((a,b)=>a+','+b)}</div>
                        </div>
                    </li>


                )}


            </ol>
        </div>


    }
}

 