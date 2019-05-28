import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import PaginaLivros from './PaginaLivros'
import PaginaBusca from './PaginaBusca'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */

    /* listalivros ou busca */
    pagina: 'listalivros',
    livros: [],

  }
  
/* RENDERIZAÇÃO DOS LIVROS NAS ESTANTES */
  componentDidMount() {
    this.mostraCatalogo()
  }

  mostraCatalogo = () => {
    BooksAPI.getAll().then(livros => {
      this.setState({livros: livros})
    })  
  }

  atualizaLista = (book, shelf) => {
    BooksAPI.update(book, shelf).then(this.mostraCatalogo)
  }



/* ATUALIZAÇÃO DO STATUS DOS LIVROS PELAS ESTANTES */

   render() {
      return (
          <div className="app">

            <Route exact path='/' render={() => (
              <PaginaLivros  livros={this.state.livros} atualizaLista={this.atualizaLista}  />
            )}
            />

            <Route path='/busca' render={() => (
              <PaginaBusca livros={this.state.livros} atualizaLista={this.atualizaLista} />
            )} />

            {/*this.state.pagina === 'listalivros' && (
                <PaginaLivros  livros={this.state.livros} atualizaLista={this.atualizaLista}  />
            )}

            {this.state.pagina === 'busca' && (
                <PaginaBusca livros={this.state.livros} atualizaLista={this.atualizaLista} />
            ) */}

          </div>
      )
  }
}

export default BooksApp
