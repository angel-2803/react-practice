import React from 'react';


class  PanelAdd extends React.Component{
    constructor(props){
        super(props);
        this.img = React.createRef();
        this.state={
            title: '',
            // imagen: '',
            rating: 1
        };
    }

    onChangeTitle = (e) =>{
        this.setState({title: e.target.value});
    }

    // onChangeImagen = (e) =>{
    //     this.setState(
    //         {imagen: this.img.current.files[0].name}
            
    //         );
    // }

    onChangeRating = (e) =>{
        const rating = parseInt(e.target.value); 
        this.setState({rating: rating});
    }

    onSubmit =(e) => {
        e.preventDefault();
        const title = this.state.title;
        const imagen = this.img.current.files[0].name;
        const rating = this.state.rating;

        this.props.onadd({title: title, imagen: imagen, rating: rating});
        this.props.oncancel();
    }

    render(){
        return(
            <div className="new-item-panel-container">
                <div className="new-item-panel">
                    <form onSubmit= {this.onSubmit} >
                        <p>
                            <label>Título del libro</label><br/>
                            <input onChange={this.onChangeTitle} type="text" name="title" className="input" />
                        </p>

                        {/* <p>
                            <label>Nombre de imagen</label><br/>
                            <input onChange={this.onChangeImagen} type="text" name="imagen" className="input" />
                        </p> */}
                        <p>
                            <label>Nombre de imagen</label><br/>
                            <input ref={this.img} type="file" name="imagen" className="input" />
                        </p>

                        <p>
                            <label>Calificación</label><br/>
                            <select onChange={this.onChangeRating}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </p>
                        <input type="submit" className="button btn-blue" value="Registrar libro" />
                        <button onClick={this.props.oncancel} className="button btn-red">Cancelar</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default PanelAdd;