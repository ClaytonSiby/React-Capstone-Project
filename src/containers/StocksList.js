import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import fetchStocks from '../redux/stock/stockActions'
import StockFilter from '../components/StockFilter'
import StockNews from '../components/StockNews'
import ReactLoading from 'react-loading'
import { Container } from 'react-bootstrap'

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
    <Container className="py-3">
      <StockFilter />
      <h3>Listing All Stocks</h3>

      <div>
        {!completed ? (
          <ReactLoading type='bars' color='#03cf4e' height={100} width={100} />
        ) : (
          <Container className="m-0 mt-4 p-0">
            {loaded && loaded.data && <StockNews stockData={loaded.data} />}
          </Container>
        )}
      </div>
    </Container>
  )
}

export default StocksList
