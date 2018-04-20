import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Navigation extends Component {

    render () {
        return (
            <div>
                <Link className="navigation-link navigation-brand" to="/">
                    Home
                </Link>
                <Link className="navigation-link navigation-brand" to="/platform">
                    Platform
                </Link>
            </div>
        );
    };
};

export default Navigation;