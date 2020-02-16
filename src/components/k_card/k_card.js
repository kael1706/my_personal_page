import React, {Component} from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './k_card.css';

export default class K_card extends Component {
    render() {
        const {topic} = this.props;
        const topic_img = require('../../assets/img/'+topic.name_img);

        return <Card className="k_card" style={{ 
        width: '18rem',
        border:'0'
        }}>
        <Card.Img variant="top" src={topic_img} alt="logo"/>
        <Card.Body>
        <Card.Title>{topic.title}</Card.Title>
          <Card.Text>
          {topic.description}
          </Card.Text>
        <Button href={topic.u} variant="primary">See more</Button>
        </Card.Body>
      </Card>
    }
}