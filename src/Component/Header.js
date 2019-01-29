
import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import Search from './Search';
class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <NavLink activeClassName="navbar-brand active" to="/">Explore</NavLink>

                <div className="search-container">
                    <Search onSearch={this.props.onSearch}></Search>
                </div>

            </nav>
        );
    }
}

export default Header;