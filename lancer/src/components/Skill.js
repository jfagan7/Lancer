import React, { Component } from 'react';
import '../stylesheets/skill.css'

class Skill extends Component{
    render(){
        return(
            <div className="box">
                <h3 className="title">{this.props.title}</h3>
                <img src={this.props.url}/>
            </div>    
        );
    }
    
}

export default Skill;