import React, { Component } from 'react';
import Option from './option/Option.jsx';

import List from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';


class Poll extends Component {

    getTimeRemaining(end_time) {
        let current_time = Math.floor(new Date() / 1000); //time in seconds
        let seconds = parseInt(end_time - current_time);
        let minutes = parseInt(seconds / 60);
        let hours   = parseInt(seconds / 3600);
        let days    = parseInt(seconds / 86400);

        if (days >= 1) {
            if (days === 1) {
                return days + " day left";
            } else {
                return days + " days left";
            }
        } else if (hours >= 1) {
            if (hours === 1) {
                return hours + " hour left";
            } else {
                return hours + " hours left";
            }
        } else if (minutes >= 1) {
            if (minutes === 1) {
                return minutes + " minute left";
            } else {
                return minutes + " minutes left";
            }
        } else if (seconds >= 1) {
            if (seconds === 1) {
                return seconds + " second left";
            } else {
                return seconds + " seconds left";
            }
        } else {
            return "ended";
        }
    }

    render() {
        return (
            <Grid item xs={12} sm={12} md={6} lg={4}>
                <Paper className="poll" elevation={10}>
                    <List>
                        {this.props.children}
                        <Option>Delegate vote</Option>
                        <Option>Neither</Option>
                    </List>
                    <p className="timeleft">{this.getTimeRemaining(this.props.end_time)}</p>
                </Paper>
            </Grid>
        );
    }
}

export default Poll;
