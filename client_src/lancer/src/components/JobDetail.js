import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';

class JobDetail extends Component{
    constructor(props){
        super(props);
        this.state={
            details: ''
        }
    }

    getJob(){
        let jobId = this.props.match.params.id; 
        Axios.get(`http://localhost:3000/api/jobs/${jobId}`)
        .then(response=>{
            this.setState({details : response.data})
        }).catch((err)=>{
            console.log(err);
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.details.name}</h1>
            </div>
        )
    }
}

export default JobDetail;