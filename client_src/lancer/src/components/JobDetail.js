import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import Axios from 'axios';

class JobDetail extends Component{
    constructor(props){
        super(props);
        this.state={
            details: ''
        }
    }

    componentWillMount(){
        this.getJob();
    }

    getJob(){
        let jobId = this.props.match.params.id; 
        Axios.get(`http://localhost:3000/api/jobs/${jobId}`)
        .then(response=>{
            this.setState({details : response.data}, ()=>{
                console.log(this.state);
            })
        }).catch((err)=>{
            console.log(err);
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.details.title}</h1>
            </div>
        )
    }
}

export default JobDetail;