import React from 'react';

import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <Grid container
                  justify="center"
                  spacing={70}>

                <Grid item xs={12} sm={12} md={6}>
                    <div style={{ textAlign: "center", height: "300px", position: "relative", top: "50%",
                        transform: "translateY(-50%)"  }}>
                        <Typography variant="display3" gutterBottom>
                            The frontier of how start-ups receive funding
                        </Typography>
                        <p>Click the button below to register for Vault's first airdrop!</p>

                        <Link to="/airdrop-registration">
                            <Button variant="raised" size="large" color="primary">
                                Register for Airdrop
                            </Button>
                        </Link>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <div style={{ margin: "0 auto"}}>
                        <img style={{ width: "100%" }} src="https://grain.io/wp/wp-content/uploads/2018/01/standup-meeting.png" />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default HomePage;