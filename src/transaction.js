import React from "react";
import datas from './app.json';

class Transaction extends React.Component {
  render () {
    return (
      <div className="transaction">
        <div className="transaction-heading">
          <h1>Transaction</h1>
        </div>
        {datas.treading.map(data => {
          const value = data.marketupdate > 0;
          return (
            <div className="transaction-item d-flex justify-content-between" key={data.id}>
              <div className="transaction-img d-flex">
                {value ? <img src="./img/upload.png" alt="up" /> : <img src="./img/download.png" alt="down" />}

                <div className="transaction-title ml-3">
                  <h2 className="mb-0">Buy {data.title} stock</h2>
                  <span>Stock investment</span>
                </div>
              </div>
              <div className="transaction-interest">
                <p>interest rate <strong>{data.marketupdate}</strong></p>
              </div>
              <h5 className="transaction-price">{data.price}</h5>
            </div>
          )
        })}
      </div>
    );
  }
}

export default Transaction;