import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import fetchStocks from '../redux/stock/stockActions'
import StockFilter from '../components/StockFilter'
import StockNews from '../components/StockNews'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ReactLoading from 'react-loading'
import { Card } from 'react-bootstrap';

const StocksList = () => {
  const [completed, setCompleted] = useState(false)
  const loaded = useSelector(state => state.stocksData.stocks)
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()
  useEffect(() => {
    setTimeout(() => {
      ;(async () => {
        await dispatch(fetchStocks())
      })()
      setCompleted(true)
    }, 2000)
  }, [])

  return (
    <div>
      <StockFilter />
      <h3>Listing All Stocks</h3>

      <div>
        {!completed ? (
          <ReactLoading type='bars' color='#03cf4e' height={100} width={100} />
        ) : ( 
          <Router>
            {
              loaded && loaded.data && loaded.data.map(item => (
                <Card>
                  <Card.Header>
                    { item.title }
                  </Card.Header>
                  <Card.Body>
                    {
                      item.symbol
                    }
                  </Card.Body>
                  <Card.Footer>
                    <button type="button"><Link to={`/${item.symbol}`}>Details</Link></button>
                  </Card.Footer>
                  <Switch>
                    <Route path={`/${item.symbol}`}>
                      <StockNews stockData={ loaded.data } />
                    </Route>
                  </Switch>
                </Card>
              ))
            }
          </Router>
        ) }
      </div>
    </div>
  )
}

export default StocksList
