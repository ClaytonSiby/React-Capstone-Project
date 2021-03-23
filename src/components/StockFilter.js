import React from 'react'

const FILTERS = ['select category','AAPL,FB,GOOG,AMZN,MSFT', 'AAPL', 'FB', 'GOOG', 'AMZN', 'MSFT']

const StockFilter = () => {
  return (
    <select>
      {FILTERS.map(filter => (
        <option value={filter} key={filter}>
          {filter}
        </option>
      ))}
    </select>
  )
}

export default StockFilter
