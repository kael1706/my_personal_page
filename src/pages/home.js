import React, {Component} from 'react'
import CardColumns from 'react-bootstrap/Col';
import K_card from "../components/k_card/k_card";

export default class Home extends Component {
    render() {

        const {topics} = this.props

        return <CardColumns className="cc">
        {topics.map(e => <K_card
        key={"topic-"+e.id} 
        topic={e}/>)}
      </CardColumns>
    }
}