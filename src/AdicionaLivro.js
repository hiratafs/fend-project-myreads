import React, { Component } from 'react' 

class AdicionaLivro extends Component {
    render () {
        return (
        <div className="open-search">
            <button onClick={() => this.props.acionaBusca()}>Adicionar livro</button>
        </div>
        )
    }
}

export default AdicionaLivro