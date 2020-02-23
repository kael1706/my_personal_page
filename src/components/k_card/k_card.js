import React, {Component} from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './k_card.css';

export default class K_card extends Component {
    render() {
        const {items} = this.props;
        const topic_img = require('../../assets/img/'+items.name_img);

        return <Card className="k_card" style={{ 
        width: '18rem',
        border:'0'
        }}>
        <Card.Img variant="top" src={topic_img} alt="logo" className="img_topic"/>
        <Card.Body>
        <Card.Title>{items.title}</Card.Title>
          <Card.Text>
          {items.description}
          </Card.Text>
        <Button href={items.u} variant="primary">See more</Button>
        </Card.Body>
      </Card>
    }
}