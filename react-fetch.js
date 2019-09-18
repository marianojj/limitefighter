import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';

  class App extends React.Component {
    state = { loading: true, evento: null};

  async componentDidMount() {
    var url = "http://limite-fighter.herokuapp.com/evento";
    var recebe = await fetch(url);
    var result = await recebe.json();
    this.setState({evento: result, loading: false})
  }
  
  render() {
    if(this.state.loading){
      return <div>loading...</div>
    }
    if(!this.state.evento){
      return <div>Erro ao buscar evento.Volte mais tarde</div>
    }

    var eventos = this.state.evento
    var listaEventos =  eventos.map(item =>{
      return <div className="col-md-3 col-sm-6">
            <div className="card mb-2">
                <img src={item.url} height="200" className="card-img-top" alt="Imagem do evento"/>
                <div className="card-body">
                  <div className="card-title text-danger text-center h6">{item.nome}</div>
                  <div className="text-center card-text mb-1">{item.cidade}</div>
                  <div className="font-weight-bold text-center">{item.data}</div>
                  <div className="text-center mt-2">
                  <a href="#anchor" className="btn btn-danger text-light">Saiba mais</a>
                  </div>
                </div>
              </div>
            </div>
    })
    return (
      <div className="row">
       {listaEventos}
      </div>
      
    );
  }
}
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  
