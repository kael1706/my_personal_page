import React from 'react';
import logo from './logo.svg';
import './App.css';
import K_card from "./components/k_card/k_card";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardColumns from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

import topics from './my-data/topics.json'

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
    return (<div className="App">
      <div>
        <Container fluid>
          <Row>
            <Col className="layout" sm={8}>
              <CardColumns className="cc">
                {this.state.topics.map(e => <K_card
                key={"topic-"+e.id} 
                topic={e}/>)}
              </CardColumns>
            </Col>
            <Col className="menu" sm={4}>
              <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home">Active</Nav.Link>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
                <Nav.Link eventKey="disabled" disabled>
                  Disabled
                </Nav.Link>
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
