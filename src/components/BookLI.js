class BookLI extends React.Component {
    constructor( books){
        super(books);
        books.forEach(x=>{
           
            x.image =`url("${x.imageLinks.thumbnail}}")` ;
           x.category = x.shelf;
           x.author = x.authors[0];
           for (var i =1; i < x.authors.length; i++){
             x.author += ","+x.authors[i];
           }});
  
    }
    render() {
        return <div className="bookshelf-books">
            <ol className="books-grid">
                {this.books.map(x =>
                    <li>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: x.image }}>
                                </div>
                                <div className="book-shelf-changer">
                                    <select onChange={(evt) => {
                                        const val = evt.target.value;
                                        var category = val.split('|');
                                        const title = category[1];
                                        category = category[0];
                                        this.state.books.filter(x => x.title == title)[0].category = category;

                                        this.setState({ books: this.state.books, showSearchPage: this.state.showSearchPage })

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
                            <div className="book-authors">{x.author}</div>
                        </div>
                    </li>


                )}


            </ol>
        </div>


    }
}