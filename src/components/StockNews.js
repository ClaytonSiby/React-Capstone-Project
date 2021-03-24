import React from 'react'
import { Row } from 'react-bootstrap'
import Stock from './Stock'
import { BrowserRouter as Router } from 'react-router-dom'

const StockNews = ({ stockData }) => {
  return (
    <Router>
      <Row>
        {stockData.map(stock => (
          <Stock stock={stock} key={Math.floor(Math.random() * 100)} />
        ))}
      </Row>
    </Router>
  )
}

export default StockNews
