import React, {Component} from 'react';

class PostJob extends Component{
    constructor(props){
        super(props);
        this.state={
            item: props.item
        }
    }
    render(){
        return(
            <li className="collection-item">
               <Link to={`/jobs/${this.state.item.id}`}> {this.state.item.name}</Link>
            </li>
        )
    }
}

export default PostJob;