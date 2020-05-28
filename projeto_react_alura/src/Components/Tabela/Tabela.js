import React, {Component} from 'react'


const TableHead = () => {
  return(
    <thead>
      <tr>
        <th>Autor</th>
        <th>Livro</th>
        <th>Preço</th>
        <th>Remover</th>
      </tr>
    </thead>
  )
}

const TableBody = props => {
  const linhas = props.autores.map((linha)=> {
    return(
      <tr key={linha.id} >
        <td>{linha.nome}</td>
        <td>{linha.livro}</td>
        <td>{linha.preco}</td>
        <td><button 
              onClick={() => props.removeAutor(linha.id)} 
              className='btn-floating waves-effect waves-light red lighten-2b'><i className="medium material-icons">delete</i>
            </button>
        </td>
      </tr>
    )
  })

  return(
    <tbody>
      {linhas}
    </tbody>
  )
}

class Tabela extends Component{
  render(){
      const { autores, removeAutor } = this.props

    return(
      <table className='centered highlight'>
        <TableHead/>
        <TableBody autores = {autores} removeAutor = {removeAutor} />
      </table>
    )
  }
}

export default Tabela