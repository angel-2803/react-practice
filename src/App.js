import React from 'react';
import './App.css';
import Menu from './Menu';
import List from './List';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      books:[
        {id:0, rating:4, title: 'Harry potter', imagen:'libro01.jpg'},
        {id:1, rating:3, title: 'The shining', imagen:'libro02.jpg'},
        {id:2, rating:1, title: 'Código de Vinci', imagen:'libro03.jpg'},
        {id:3, rating:5, title: 'El principito', imagen:'libro04.jpg'},
        {id:4, rating:5, title: 'Sobrenatural', imagen:'libro05.jpg'}
      ],
      copyBooks: []
    };
  }

  componentDidMount(){
    this.initBooks();
  }

  //cada ves que se ejecute initBooks copyBooks va a hecer una copia de state.books
  initBooks = () => {
    this.setState((state,props) => ({
      copyBooks: [...state.books]
    }));
  }

  onAdd = (item) => {
    let temp = [ ...this.state.books ];
    const id = temp[temp.length-1].id + 1;
    item['id'] = id;
    temp.push(item);

    this.setState({books: [ ...temp ]});
    this.initBooks();
  }

  onSearch = (query) => {
    if (query === '') {
      this.initBooks();
      //this.setState({copyBooks: [...this.state.books]});
    }else{
      const temp = [...this.state.books];
      let res = [];
      
      temp.forEach(item =>{
        //condicion que si el tittulo del elemento se transforma a minusculas indexof(es la coincidencia)
        if (item.title.toLowerCase().indexOf(query) > -1) {
          res.push(item);
        }
      });
      this.setState({copyBooks: [...res]});
    }
  }

  OnUpdateRating = (item) => {
    var temp= [...this.state.books];
    const index = temp.findIndex(x => x.id === item.id);

    temp[index].title = item.title;
    temp[index].imagen = item.imagen;
    temp[index].rating = item.rating;

    this.setState({books: [...temp]});
    this.initBooks();


  }

  onRemove = (id) => {
    var temp = [...this.state.books];
    const res = temp.filter(item => item.id != id );

    this.setState({books: [...res]});
    this.initBooks();
  }

  render(){
    return (
      <div className="app">
        <Menu title="App de Peliculas" onadd={this.onAdd} onsearch={this.onSearch}/>
        <List 
        items={this.state.copyBooks} 
        onupdaterating={this.OnUpdateRating} 
        onremove={this.onRemove}/>
      </div>
    );
  }

}

export default App;
