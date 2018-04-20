import React from 'react';

import Grid from 'material-ui/Grid';

import Poll from './components/Poll';
import Option from './components/option/Option';



const PlatformPage = () => {
    return (
        <div>
            <h1>POLLS</h1>
            <Grid container
                  justify="center"
                  spacing={24}>

                <Poll end_time={1521633600}>
                    <Option category={'You-Gay-Oh'} info="This is a test" funds="1M" votes="10K">Yu-gu-oh</Option>
                    <Option category={'Social Media'} info="This is a test" funds="1M" votes="10K">Pokemon</Option>
                </Poll>

                <Poll>
                    <Option info="This is a test" funds="1M" votes="10K">Test</Option>
                    <Option info="This is a test" funds="1M" votes="10K">Test</Option>
                </Poll>

                <Poll>
                    <Option info="This is a test" funds="1M" votes="10K">Test</Option>
                    <Option info="This is a test" funds="1M" votes="10K">Test</Option>
                </Poll>

            </Grid>
        </div>
    );
};

export default PlatformPage;