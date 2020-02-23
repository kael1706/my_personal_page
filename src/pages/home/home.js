import React, {Component} from 'react'
import CardColumns from 'react-bootstrap/Col';
import K_card from "../../components/k_card/k_card";
import icon_github from '../../assets/img/github.svg';
import selfie_cedula from '../../assets/img/selife-cedula2.png';
import icon_twitter from '../../assets/img/twitter.svg';
import './home.css';
export default class Home extends Component {
    render() {

        const {items} = this.props

        return <div className="homeContainer">
          <div className="navbar-brand" style={{
              color: "white", position:"relative", background: "#282c34", height:"80px", display:"flex"}}>
                <div className="navbar-p1 ">
                  <img
                    alt=""
                    src={selfie_cedula}
                    width="30"
                    height="30"
                    className="d-inline-block align-top selfie_cedula"
                    style={{
                    background: "red"}}
                  />
                  Carlos Daniel Cortez (Kael)
                </div>
                <div className="navbar-p2">
                  <a href="https://github.com/kael1706">
                    <img
                      alt=""
                      src={icon_github}
                      width="30"
                      height="30"
                      className="d-inline-block align-top icon_github"
                      style={{
                        background: "#ffffff"}}
                    />
                  </a>
                  <a href="https://twitter.com/el_cortesito">
                    <img
                      alt=""
                      src={icon_twitter}
                      width="30"
                      height="30"
                      className="d-inline-block align-top icon_github"
                      style={{
                        background: "#ffffff"}}
                    />
                  </a>     
                </div>
            </div>
          
        <CardColumns className="cc">
        {items.map(e => <K_card
        key={"topic-"+e.id} 
        items={e}/>)}
      </CardColumns>
      </div> 
    }
}