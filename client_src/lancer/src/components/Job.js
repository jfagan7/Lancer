import React, {Component} from 'react';
import axios from 'axios';

class Job extends Component {
    constructor(){
        super();
        this.state = {
            jobs: []
        }
    }

   componentWillMount(){
        this.getJobs();
    }

    getJobs(){
        axios.get('http://localhost:3000/api/jobs')
        .then(response=>{
            this.setState({jobs: response.data}, ()=>{
                //console.log(this.state.jobs);
            })
        })
    }
    render() {
        const jobItems = this.state.jobs.map((jobs, i)=>{
            return <li className = "collection-item">{jobs.title}</li>
        })

        return ( 
            <div>
                <h1>Jobs</h1>
                <ul className="collection">
                    {jobItems}
                </ul>
            </div>    
        )
    }
}
export default Job;