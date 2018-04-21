import React, { Component } from 'react';

import TextField from 'material-ui/TextField';

class AirdropRegisterPage extends Component {

    render() {
        return (
            <div>
                <h1>
                    Airdrop Registration
                </h1>
                <div>
                    <TextField
                        id="first_name"
                        label="First Name"
                        placeholder="John"
                        margin="normal"
                    />
                </div>

                <div>
                    <TextField
                        id="last_name"
                        label="Last Name"
                        placeholder="Doe"
                        margin="normal"
                    />
                </div>

                <div>
                    <TextField
                        id="email"
                        label="Email"
                        placeholder="johndoe@johndoe.com"
                        margin="normal"
                    />
                </div>

                <div>
                    <TextField
                        id="date"
                        label="Birthday"
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                    />
                </div>

                <div>
                    <TextField
                        id="password1"
                        label="Password"
                        type="password"
                        margin="normal"
                    />
                </div>

                <div>
                    <TextField
                        id="password2"
                        label="Confirm Password"
                        type="password"
                        margin="normal"
                    />
                </div>

                {/*<FormControl component="fieldset" required error>*/}
                    {/*<FormLabel component="legend">Gender</FormLabel>*/}
                        {/*<RadioGroup*/}
                            {/*aria-label="gender"*/}
                            {/*name="gender2"*/}
                            {/*value={this.state.value}*/}
                            {/*onChange={this.handleChange}*/}
                        {/*>*/}
                            {/*<FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />*/}
                            {/*<FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />*/}
                        {/*</RadioGroup>*/}
                    {/*<FormHelperText>You can display an error</FormHelperText>*/}
                {/*</FormControl>*/}


            </div>
        );
    }
}

export default AirdropRegisterPage;