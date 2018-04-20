import React from 'react';

import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

const HomePage = () => {
    return (
        <div>
            <Grid container
                  justify="center"
                  spacing={24}>

                <Grid item xs={12} sm={12} md={6}>
                    <div style={{ textAlign: "center", height: "300px", position: "relative", top: "50%",
                        transform: "translateY(-50%)"  }}>
                        <h1>The fountier of cryptocurrency funding</h1>
                        <p>This is just a test!</p>

                        <Button variant="raised" size="large" color="primary">
                            Register for Airdrop
                        </Button>
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