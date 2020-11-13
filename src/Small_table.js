import React from 'react';
import './table1.css';
import { Card } from 'react-bootstrap';
import * as ReactBootStrap from "react-bootstrap";

const Small_table = () => {

const cardInfo = [
    { title: "4 min 24 sec", subtitle : "Time spent booking appointment"},
    { title: "12", subtitle : "Appointments booked by me today"},
    { title: "5min 14sec", subtitle : "Average time booking 8 * last 24 hours"},
    { title: "4min 55sec", subtitle : "Average time booking * last 30 days"},
    { title: "$635.95", subtitle : "Average R.O .last 30 days"}
];

    const renderCard = (card, index) => {
        return(
            <ReactBootStrap.CardGroup>
            <Card key = {index} className="boxfloat">
            <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>
          {card.subtitle}
        </Card.Text>
      </Card.Body>  
    </Card>
    </ReactBootStrap.CardGroup>

        )
    }
    return(
        <div className ="App">
          {cardInfo.map(renderCard)}
</div>

    );
}
export default Small_table