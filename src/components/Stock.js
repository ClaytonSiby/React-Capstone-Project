import React from 'react'
import { Col, Card } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { truncate } from '../helpers/truncate'
import RouteGenerator from './RouteGenerator';

const Stock = ({ stock }) => {
  return (
    <Col sm={12} md={4} className='mb-3'>
      <Card>
        <Card.Img variant='top' alt='..loading image' src={`${stock.image}`} />
        <Card.Body>
          <Card.Title>{stock.symbol}</Card.Title>
          <Card.Text>{truncate(stock.title, 73)}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <RouteGenerator stock={ stock } />
        </Card.Footer>
      </Card>
    </Col>
  )
}

export default Stock
