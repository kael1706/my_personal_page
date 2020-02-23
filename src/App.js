import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Nav from 'react-bootstrap/Nav';

import topics from './my-data/topics.json'
import proyects from './my-data/proyects.json'

import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './pages/home/home'
import Proyects from './pages/proyects/proyects'

import Particles from 'react-particles-js';

import Alert from 'react-bootstrap/Alert';
console.log(topics);
class App extends React.Component {
  state = {
    topics: topics,
    alert: true,
    proyects: proyects
  }

  changeTest = () => {
    this.setState({alert: !this.state.alert});
  }
  
  particlesConfig={
    particles: {
      number: {
        value:150,
        density: {
          enable: true,
          value_area:800
        }
      }
    }
  }

  render() {
    return (

      <div className="App">
         <Alert key="alert-1" variant="warning">
         ⚠ I am building the page at the moment so it is possible that some things are not complete.
        </Alert>
        <iframe src="https://open.spotify.com/embed/playlist/5AMLLNOAIiCBL3YwiQLjBd"
           width="100%" frameborder="0" allowtransparency="true" allow="encrypted-media" autoplay="True" style={{
            color: "white", display:"flex", background: "#282c34", height:"80px"}}>
           </iframe>
        <div>
        <Container fluid>
          <Row >
            <Col className="layout" sm={8}>
            <Particles params={this.particlesConfig} style={{
              position:"absolute", background: "#282c34", height:"100%", width:"66.67vw"}}/>
            <Router>
              <Route exact path="/" render={() => {
                return <Home items={topics}></Home>
              }}>
              </Route>
              <Route exact path="/Proyects" render={() => {
                return <Proyects items={proyects}></Proyects>
              }}>
              </Route>
              <Route exact path="/Proyects/p1" render={() => {
                return <h1>P1</h1>
              }}>
              </Route>
              
            </Router>
              
            </Col>
            <Col className="menu" sm={4}>
              <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/proyects">Proyects</Nav.Link>
                <Router>
                  <Route exact path="/Proyects" render={() => {
                    return <ul> 
                      <li><Nav.Link href="/Proyects/p1">p1</Nav.Link></li>
                      </ul>
                  }}>
                  </Route>
                </Router>
              <Nav.Link href="/Curriculums vitae">Curriculums vitae</Nav.Link>
              <Nav.Link href="/Publications">Publications</Nav.Link>
              <Nav.Link href="/About-me">About me</Nav.Link>
              </Nav>
              
            </Col>
          </Row>
        </Container>
        </div>
      </div>
    );
  }

}

export default App;
