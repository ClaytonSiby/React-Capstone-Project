import React from 'react'
import StockDetails from './StockDetails'
import { Link, Route, Switch } from 'react-router-dom'

const RouteGenerator = ({ stock }) => {
  return (
    <>
      <Link to={`/${stock.symbol}`}>Read More</Link>
      <Switch>
        <Route
          exact
          path={`/${stock.symbol}`}
          key={Math.random() * 100}
          children={<StockDetails newsDetails={stock} />}
        />
      </Switch>
    </>
  )
}

export default RouteGenerator
