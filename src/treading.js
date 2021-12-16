import React from "react";
import { Link } from "react-router-dom";
import datas from './app.json';
import { Row, Col } from 'reactstrap';


class Treading extends React.Component {
  render () {
    return (
      <div className="treanding-section">
        <div className="treanding-section__hero">
          <h1>Stock Market</h1>
          <p>Trending market grop</p>
        </div>

        <div className="treanding-section__card-list">
          <div className="view_all d-flex justify-content-end">
            <Link to="#">View All</Link>
          </div>
          <Row>
            {datas.treading.map(data => {
              return (
                <Col md={6} key={data.id}>
                  <div className="treanding-section__card-list-item shadow">
                    <div className="treanding-section__card-list-item-box">
                      <div className="d-flex justify-content-between mb-4">
                        <div className="treanding-section_card-list-item-box-img">
                          <img src={data.src} alt="apple" />
                          <div className="treanding-section_card-list-item-box-title">
                            <h6>{data.title}</h6>
                            <span>{data.subtitle}</span>
                          </div>
                        </div>
                        <Link className="treanding-section__card-list-item-box-btn" to="#">...</Link>
                      </div>
                      <div className="reanding-section__card-list-item-box-data row">
                        <div className="graph col-8">
                          <img src={data.chart} height="50" alt="apple" />
                        </div>
                        <div className="graph-value col-4">
                          <p>{data.price}</p>
                          <span>{data.marketupdate}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    );
  }
}

export default Treading;