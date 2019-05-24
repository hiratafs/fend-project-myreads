import React, { Component } from 'react'
import BotaoRetorna from './BotaoRetorna';
//import * as BooksAPI from './BooksAPI';
//import Livro from 'react'
//import BotaoRetorna from './BotaoRetorna'

class PaginaBusca extends Component  {

  state = {
    query: ' '
  }




  render() {
    return (
      <div className="search-books">
          <div className="search-books-bar">
            <BotaoRetorna />
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" value={this.state.query} />

              </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              
            </ol>
          </div>
        </div>
  )
  }
    
}

export default PaginaBusca