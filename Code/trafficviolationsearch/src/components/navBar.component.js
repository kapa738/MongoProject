import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class navBar extends Component {
    render(){
        return(
            <nav className="navbar-logo">
                <div className="navBar-list">
                <a>
                    <Link to="/" className="navBar-brand">Traffic Violation Data</Link>
                </a>
                    <ul className="navBar-items">
                        <li className="navBar-item">
                            <a>
                                <Link to="/" className="nav-link">Home</Link>
                            </a>
                        </li>
                        <li className="navBar-item">
                            <a>
                                <Link to="/search" className="nav-link">Search by word</Link>
                            </a>
                        </li>
                        <li className="navBar-item">
                            <a>
                                <Link to="/geoSearch" className="nav-link">Search by Geolocation</Link>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}