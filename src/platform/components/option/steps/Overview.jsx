import React, { Component } from 'react';
import Typography from 'material-ui/Typography';

import Grid from 'material-ui/Grid';


import Team from './details/Team';
import TokenInfo from './details/TokenInfo';

class Overview extends Component {

    render() {

        return (
            <div>
                <br/>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <div className={"social-header"}>
                            <a href="#"><i class="fas fa-link fa-2x"></i></a>
                            <a href="#"><i class="fab fa-facebook fa-2x"></i></a>
                            <a href="#"><i class="fab fa-twitter fa-2x"></i></a>
                            <a href="#"><i class="fab fa-youtube fa-2x"></i></a>
                            <a href="#"><i class="fab fa-telegram fa-2x"></i></a>
                            <a href="#"><i class="fab fa-github fa-2x"></i></a>
                            <a href="#"><i class="fab fa-bitcoin fa-2x"></i></a>
                            <a href="#"><i class="fab fa-medium fa-2x"></i></a>
                        </div>


                        <div class="right-hold flexbox">
                                    <span>
                                        <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"/>
                                    </span>
                            <span>
                                        <h1>{this.props.children}&nbsp;&nbsp;</h1>
                                    </span>
                        </div>
                        <Typography style={{margin: "0 15px"}}>
                            {this.props.category}
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography style={{margin: "0 15px"}}>
                            {this.props.info}
                        </Typography>
                    </Grid>

                </Grid>

                <div style={{margin: "0 15px", paddingTop: "20px"}}>
                    <TokenInfo></TokenInfo>
                    <Team></Team>
                </div>
                <br/>
            </div>
        );
    }
}

export default Overview;
