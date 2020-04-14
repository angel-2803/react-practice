import React from 'react';

class  search extends React.Component {
    constructor(props){
        super(props);
    }

    onChangeEvent = (e) => {
        const query = e.target.value.toString().toLowerCase();
        this.props.onsearch(query);
    }

    render(){
        return(
            <input type="text" onChange={this.onChangeEvent} />
        );
    }
}

export default search;