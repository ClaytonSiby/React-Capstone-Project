import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import fetchStocks from '../redux/stock/stockActions'
import StockFilter from '../components/StockFilter'
import StockNews from '../components/StockNews'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const StocksList = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    ;(async () => {
      await dispatch(fetchStocks())
    })()
  }, [])

  const stockData = useSelector(state => state.stocksData.stocks.data)
  const filter = useSelector(state => state.filter)

  return (
    <div>
      <StockFilter />
      <h3>Listing All Stocks</h3>
      <div>
        {JSON.stringify(stockData)}
      </div>
    </div>
  )
}

export default StocksList
