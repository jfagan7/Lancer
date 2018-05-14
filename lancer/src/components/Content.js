import React,{Component} from 'react';
import Skill from './Skill';
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

        <section className="highlight">
          <blockquote>
            Quis application est scriptum in JavaScript potest, eventually te in JavaScript potest.
          </blockquote>
        </section>

        <section className="highlight">
          <div className="container">
            <div className="row">
              <div className="col-md-5 info-sec" id="knight">
              <img className="infographic img-fluid" src="https://cdn.pixabay.com/photo/2017/02/14/08/35/knight-hood-2065312_960_720.png" alt="This shit better work"/>
              </div>
              <div className="col-md-7">
                <div className="description">
                  <h2>Hiring process</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima deserunt omnis impedit voluptatibus, recusandae ab pariatur harum aperiam quis adipisci?</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="highlight">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="description">
                  <h2>Contract</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima deserunt omnis impedit voluptatibus, recusandae ab pariatur harum aperiam quis adipisci?</p>
                </div>
              </div>
              <div className="col-md-6">
                
                <img className="infographic img-fluid" src="https://cdn.pixabay.com/photo/2014/03/25/15/17/scroll-296404_960_720.png" alt="This shit better work"/>
              </div>
            </div>
          </div>
        </section>


        <section className="highlight">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4">
                <Skill title="Graphic Design" url="https://image.flaticon.com/icons/svg/751/751418.svg"/>
              </div>
              <div className="col-md-4">
                <Skill title="Web Developement" url="https://image.flaticon.com/icons/svg/272/272403.svg"/>
              </div>
              <div className="col-md-4">
                <Skill title="Mobile App" url="https://image.flaticon.com/icons/svg/781/781691.svg"/>
              </div>
              </div>
              
              <div className="row">
                <div className="col-md-4">
                  <Skill title="Game Development" url="https://image.flaticon.com/icons/svg/852/852063.svg"/>
                </div>
                <div className="col-md-4">
                  <Skill title="Data Science" url="https://image.flaticon.com/icons/svg/847/847277.svg"/>
                </div>
                <div className="col-md-4">
                  <Skill title="Accounting" url="https://image.flaticon.com/icons/svg/154/154923.svg"/>
                </div>
            

            </div>
          </div>
        </section>
      </div>
    )
  }
} 

export default Content;