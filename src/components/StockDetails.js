import React from 'react'

const StockDetails = ({ newsDetails }) => {
    return (
        <div>
            <hr />
            <p>{ newsDetails.symbol }</p>
            <p>{ newsDetails.title }</p>
            <p>{ newsDetails.textx }</p>
            <hr />
        </div>
    )
}

export default StockDetails;
