import React from "react";
import datas from './app.json';
import { Row, Col } from 'reactstrap';

class MostWeek extends React.Component {
  render () {
    return (
      <div className="most-week">
        <div className="most-week-head">
          <h1>Most popular week</h1>
        </div>
        <Row className="most-week-list">
          {datas.mostweek.map(data => {
            return (
              <Col md={6} lg={3} key={data.id}>
                <div className="most-week-card shadow">
                  <img src={data.src} alt="apple" />
                  <h5 className="most-week-card-title">{data.title}<span>{data.subtitle}</span></h5>
                  <h6 className="most-week-card-price">{data.price}</h6>
                  <span className="most-week-card-body">{data.body}</span>
                </div>
              </Col>
            )
          })}
        </Row>
      </div>
    );
  }
}

export default MostWeek;