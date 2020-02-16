import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Nav from 'react-bootstrap/Nav';

import topics from './my-data/topics.json'
import {BrowserRouter as Router, Route, link} from 'react-router-dom'

import Home from './pages/home'
console.log(topics);
class App extends React.Component {
  state = {
    topics: topics,
    test: true
  }

  changeTest = () => {
    this.setState({test: !this.state.test});
  }

  render() {
    return (

      <div className="App">
        <div>
        <Container fluid>
          <Row>
            <Col className="layout" sm={8}>
            <Router>
              <Route exact path="/" render={() => {
                return <Home topics={topics}></Home>
              }}>
              </Route>
              <Route exact path="/Proyects" render={() => {
                return 
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
                <Nav.Link href="/knowledge">Knowledge</Nav.Link>
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
