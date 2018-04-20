import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import {Pie} from 'react-chartjs-2';


class TokenInfo extends Component {

    render() {
        const data = {
            labels: [
                'Community',
                'Team & Advisers',
                'Pokemon Foundation'
            ],
            datasets: [{
                data: [33, 33, 33],
                backgroundColor: [
                    '#08008a',
                    '#0064ff',
                    '#6de7ff'
                ],
                hoverBackgroundColor: [
                    '#08008a',
                    '#4396ff',
                    '#6de7ff'
                ]
            }]
        };

        return (
            <div>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Token Information</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>

                            <Grid container spacing={24}>
                                <Grid item xs={12} style={{textAlign: "center"}}>
                                    <p><b>Allocated Vault Tokens:</b> 10,000 VLT</p>
                                    <br/>
                                    <p><b>Token symbol:</b> TRN</p>
                                    <p><b>Total supplies:</b> 10,000,000 TRN</p>
                                    <p><b>Initial supplies:</b> 5,000,000 TRN (50%)</p>
                                </Grid>

                                <Grid item xs={12}>
                                    <h3 style={{textAlign: "center"}}>Breakdown of Total Supplies</h3>
                                    <div>
                                        <Pie
                                            data={data}
                                            width={333}
                                            height={333}
                                            legend={{
                                                display: true,
                                                position: "bottom",
                                                fullWidth: true
                                            }}
                                            options={{
                                                maintainAspectRatio: false
                                            }}
                                        />
                                    </div>
                                </Grid>
                            </Grid>

                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        );
    }
}

export default TokenInfo;
