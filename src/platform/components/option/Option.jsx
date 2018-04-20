import React, { Component } from 'react';

import {ListItem, ListItemText} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

import Button from 'material-ui/Button';
import Slide from 'material-ui/transitions/Slide';
import Dialog, {
    DialogActions,
    DialogContent
} from 'material-ui/Dialog';

import Stepper, { Step, StepLabel } from 'material-ui/Stepper';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';


import Overview from './steps/Overview';
import Vote from './steps/Vote';
import ConfirmVote from './steps/ConfirmVote';




function getSteps() {
    return ['Overview', 'Vote', 'Confirmation'];
}

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class Option extends Component {

    state = {
        open: false,
        activeStep: 0,
        skipped: new Set(),
    };

    handleClickOpen = () => {
        this.setState({
            open: true,
        });
    };

    handleClose = value => {
        this.setState({ selectedValue: value, open: false });
    };

    isStepSkipped(step) {
        return this.state.skipped.has(step);
    }

    handleNext = () => {
        const { activeStep } = this.state;
        let { skipped } = this.state;
        if (this.isStepSkipped(activeStep)) {
            skipped = new Set(skipped.values());
            skipped.delete(activeStep);
        }

        console.log(activeStep);
        if (activeStep === getSteps().length-1) {
            this.handleClose();
        } else {
            this.setState({
                activeStep: activeStep + 1,
                skipped,
            });
        }
    };

    handleBack = () => {
        const { activeStep } = this.state;
        this.setState({
            activeStep: activeStep - 1,
        });
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };


    getStepContent(activeStep) {
        switch (activeStep) {
            case 0:
                return (
                    <Overview category={this.props.category} info={this.props.info} funds={this.props.funds}></Overview>
                );

            case 1:
                return (
                    <Vote></Vote>
                );

            case 2:
                return (
                    <ConfirmVote></ConfirmVote>
                );
            default:
                return 'Unknown step';
        }
    }


    render() {
        const steps = getSteps();
        const { activeStep } = this.state;

        return (
            <div>

                <ListItem dense button onClick={this.handleClickOpen}>
                    <ListItemText primary={this.props.children}  secondary={this.props.category} />
                    <Avatar alt={this.props.children} src="http://www.material-ui.com//images/angelceballos-128.jpg" />
                </ListItem>

                <Dialog
                    open={this.state.open}
                    transition={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    fullWidth={true}
                    maxWidth={'md'}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description">
                    <DialogActions>
                        <IconButton aria-label="Close" onClick={this.handleClose}>
                            <Icon>clear</Icon>
                        </IconButton>
                    </DialogActions>
                    <DialogContent>
                        <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
                            <Stepper activeStep={activeStep}>
                                {steps.map((label, index) => {
                                    const props = {};
                                    const labelProps = {};
                                    if (this.isStepSkipped(index)) {
                                        props.completed = false;
                                    }
                                    return (
                                        <Step key={label} {...props}>
                                            <StepLabel {...labelProps}>{label}</StepLabel>
                                        </Step>
                                    );
                                })}
                            </Stepper>

                            <div>
                                {activeStep === steps.length ? (
                                    <div>
                                        <Typography>
                                            All steps completed - you&quot;re finished
                                        </Typography>
                                        <Button onClick={this.handleReset}>
                                            Reset
                                        </Button>
                                    </div>
                                ) : (
                                    <div>
                                        <Typography>{this.getStepContent(activeStep)}</Typography>
                                        <div>
                                            <Button
                                                disabled={activeStep === 0}
                                                onClick={this.handleBack}
                                            >
                                                Back
                                            </Button>
                                            <Button
                                                variant="raised"
                                                color="primary"
                                                onClick={this.handleNext}>
                                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

export default Option;
