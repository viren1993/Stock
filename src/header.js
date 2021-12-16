import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from 'reactstrap';

class Header extends React.Component {
  render () {
    return (
      <header>
        <Row>
          <div className="top-header">
            <Col md={4}>
              <div className="wrap">
                <div className="search">
                  <input type="text" className="searchTerm" placeholder="Search for stock market..." />
                  <button type="submit" className="searchButton">
                    <i className="fa fa-search"></i>
                </button>
              </div>
              </div>
            </Col>
            <ul className="right-header">
              <li className="time-tack">
                <span>Saturday 20, October 2021 </span>
              </li>
              <li className="notification">
                <div className="notification-block">
                  <button className="btn notification-btn">
                    <i className="fa fa-bell"></i>
                    <span className="notify"></span>
                  </button>
                  <div className="collapse notification-data shadow-sm" id="collapseExample">
                    <ul>
                      <li> Trending market grop note </li>
                      <li> Trending market grop note </li>
                      <li> Trending market grop note </li>
                      <li> Trending market grop note </li>
                      <li> Trending market grop note </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="account">
                <div className="account-block">
                  <img src="./img/profile.png" alt="dummy person" />
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      William Serif
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <Link className='dropdown-item' to="/pathLink#yourAnchorTag">Action</Link>
                      <Link className='dropdown-item' to="/pathLink#yourAnchorTag">Your link text</Link>
                      <Link className='dropdown-item' to="/pathLink#yourAnchorTag">Your link text</Link>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </Row>
      </header>
    );
  }
}

export default Header;