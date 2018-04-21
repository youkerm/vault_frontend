import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Typography from 'material-ui/Typography';

class Navigation extends Component {

    render () {
        return (
            <div>
                {/*<img src={logo} style={{ float:"left" }}/>*/}

                <nav data-menu-underline-from-center>
                    <ul>
                        <li>
                            <Link className="navigation-link navigation-brand" to="/">
                                <Typography variant="button" gutterBottom>
                                    Home
                                </Typography>
                            </Link>
                        </li>
                        <li>
                            <Link className="navigation-link navigation-brand" to="/platform">
                                <Typography variant="button" gutterBottom>
                                    Platform
                                </Typography>
                            </Link>
                        </li>
                        <li>
                            <Link className="navigation-link navigation-brand" to="/how-it-works">
                                <Typography variant="button" gutterBottom>
                                    How it works
                                </Typography>
                            </Link>
                        </li>
                        <li>
                            <Link className="navigation-link navigation-brand" to="/team">
                                <Typography variant="button" gutterBottom>
                                    Team
                                </Typography>
                            </Link>
                        </li>
                        <li>
                            <Link className="navigation-link navigation-brand" to="/contact">
                                <Typography variant="button" gutterBottom>
                                    Contact
                                </Typography>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    };
}

export default Navigation;