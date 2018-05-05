import React,{Component} from 'react';
import '../stylesheets/style.css';

class Content extends Component{
  render(){
    return(
      <div>
        <section>
          <div class="banner">
            <div className="banner-text">
              <h1>Lancer</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum neque possimus dolorum aspernatur! Id, at.
              </p>
            </div>
          </div>
        </section>

        <section className="">
          <div className="container">
            <div className="row">
              <div className="col-md-5 info-sec" id="knight">
              <img className="infographic img-fluid" src="https://cdn.pixabay.com/photo/2017/02/14/08/35/knight-hood-2065312_960_720.png" alt="This shit better work"/>
              </div>
              <div className="col-md-7">
                <h2>Hiring process</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima deserunt omnis impedit voluptatibus, recusandae ab pariatur harum aperiam quis adipisci?</p>
              </div>
            </div>
          </div>
        </section>


        <section className="">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
              <h2>Hiring process</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima deserunt omnis impedit voluptatibus, recusandae ab pariatur harum aperiam quis adipisci?</p>
              </div>
              <div className="col-md-6 view overlay">
                
                <img src="client_src/lancer/src/images/hire.png" alt="This shit better work"/>
              </div>
            </div>
          </div>
        </section>


        <section className="">
          <div>
          
          </div>
        </section>
      </div>
    )
  }
} 

export default Content;