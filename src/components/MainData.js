import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchStocks from '../redux/stock/stockActions';

const MainData = () => {
  const dispatch = useDispatch();
  const results = useSelector(state => state);
  useEffect(() => {
    (async () => {
      await dispatch(fetchStocks());
    })();
  }, []);
  return (
    <div>
      <h3>Something is Happening!</h3>
      <div>
        { results.stock.stocks.data.map(stock => (
          <div key={Math.random() * stock.length}>
            {' '}
            { stock.symbol }
            {' '}
          </div>
        )) }
      </div>
    </div>
  );
};
export default MainData;
