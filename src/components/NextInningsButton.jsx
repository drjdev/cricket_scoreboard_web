import React from 'react';
import PropTypes from 'prop-types';

import '../../css/button.css';

export class NextInningsButton extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.onButtonClick();
    }
        
    render(){
        return (<button className="button-next-innings btn btn-outline-secondary btn-lg" onClick={this.handleClick}>{this.props.value}</button>);
    }
}
