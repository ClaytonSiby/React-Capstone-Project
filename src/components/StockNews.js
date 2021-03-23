import React, { useEffect } from 'react'
import { Container, Col, Row, Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

const StockNews = ({ stockData }) => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant='top' alt="..loading image" src={`${stockData[0].image}`} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant='primary'>Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

const mapStateToProps = state => {
    return {
        stockData: state.stocksData.stocks.data
    }
}

export default connect(mapStateToProps)(StockNews)
