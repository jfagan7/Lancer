import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/footer.css';

class Footer extends Component{
    render(){
        return(
            
                <footer>
                    <div className="container">
                        <section>
                            <div className="row">
                                <div className="col-md-12 ">
                                    <div className="row-links">
                                        <div className="col-md-4">
                                            <h2>About Lancer</h2>
                                        </div>
                                        <div className="col-md-4">
                                            <h2>Browse</h2>
                                        </div>
                                        <div className="col-md-4">
                                            <h2>Etc</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <hr />
                        <section>
                            <div className = "social-media">

                            </div>
                        </section>
                    </div>
                </footer>
            
        )
    }
}

export default Footer;