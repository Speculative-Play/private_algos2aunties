import React, { Component, useState } from 'react'
import styled from 'styled-components'
import { Button, FormControl, OutlinedInput, Grid, StepLabel, FormGroup, TextField, MenuItem } from '@material-ui/core';

const PinkButton = styled(Button)`
    &:not(#au #ca){
        background: ${props => props.contrast ? "#fff" : "#E8A3B0"};
        border-radius: 5px;
        color: ${props => props.contrast ? "#E8A3B0" : "#fff"};
        min-width: 190px;
        height: 45px;
        border: ${props => props.contrast ? "1px solid #E8A3B0" : "unset"}
    }
`;
const FormMarginBottom = styled.div`
    margin-bottom: 3vh;
`;
const LoginCallToAction = styled.div`
    margin-top: 0.5rem;
    font-size: 14px;
    span{
        color: #E8A3B0;
        font-weight: bold;
    }
`;

function CreateAccount(props) {
    const [isLogin, setIsLogin] = useState(true);
    const [step, setStep] = useState(0);
    const [form, setForm] = React.useState({
        email: '',
        password: '',
        name: '',
        gender: '',
        birth: '',
        birthCountry: '',
        maritalStatus: '',
        countryOfResidence: '',
        city:'',
        state: '',
        language: '',
    });

    const handleChange = (option) => (event) => {
        setForm({ ...form, [option]: event.target.value });
    };

    const handleSaveAccount = () => {
        console.log('handle save account');
    }

    return (
        <div>
            <div>
                {step == 0 && <>
                    <h2>Create Your Account</h2>
                    <FormMarginBottom>
                        <TextField
                            onChange={handleChange('name')}
                            id="outlined-full-width-name"
                            label="Name"
                            placeholder="Enter Your Name"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />
                        <TextField
                            onChange={handleChange('email')}
                            type="email"
                            id="outlined-full-width-email"
                            label="Email"
                            placeholder="Enter Your Email"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />
                        <TextField
                            onChange={handleChange('password')}
                            type="password"
                            id="outlined-full-width-pass"
                            label="Password"
                            placeholder="Enter Your Password"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />
                        <TextField
                            onChange={handleChange('gender')}
                            select
                            id="outlined-full-width-gender"
                            label="How do you identify?"
                            placeholder="Create Your Password"
                            fullWidth
                            margin="normal"
                            defaultValue={""}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        >
                            <MenuItem key={0} value={""} disabled></MenuItem>
                            <MenuItem key={1} value={"female"}>
                                Female
                            </MenuItem>
                            <MenuItem key={2} value={"male"}>
                                Male
                            </MenuItem>
                            <MenuItem key={3} value={"other"}>
                                Other
                            </MenuItem>
                        </TextField>
                    </FormMarginBottom>
                    <div>
                        <PinkButton onClick={()=>setStep(1)}>Continue</PinkButton>
                    </div>
                    <LoginCallToAction>
                        Already have an account? <span className='cursor-pointer' onClick={()=>props.setIsLogin(true)}>Login</span>
                    </LoginCallToAction>
                </>}

                {step == 1 && <>
                    <h2>Personal Information</h2>
                    <FormMarginBottom>
                        <TextField
                            onChange={handleChange('birth')}
                            id="outlined-full-width-birth"
                            label="Date Of Birth"
                            placeholder="dd/mm/yy"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />
                        <TextField
                            onChange={handleChange('birthCountry')}
                            id="outlined-full-width-birthCountry"
                            label="Birth Country"
                            placeholder="Enter Your Birth Country"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />
                        <TextField
                            onChange={handleChange('maritalStatus')}
                            id="outlined-full-width-maritalStatus"
                            label="Marital Status"
                            placeholder="Enter Your Marital Status"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />
                    </FormMarginBottom>
                    <PinkButton onClick={()=>setStep(2)}>Continue</PinkButton>
                    <div><Button onClick={()=>setStep(0)}><small>Back</small></Button></div>
                </>}

                {step == 2 && <>
                    <h2>Personal Information</h2>
                    <FormMarginBottom>
                    <TextField
                        onChange={handleChange('countryOfResidence')}
                        id="outlined-full-width-countryOfResidence"
                        label="Country Of Residence"
                        placeholder=""
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                    <TextField
                        onChange={handleChange('city')}
                        id="outlined-full-width-city"
                        label="City"
                        placeholder=""
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                    <TextField
                        onChange={handleChange('state')}
                        id="outlined-full-width-state"
                        label="State / Province"
                        placeholder=""
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                    <TextField
                        onChange={handleChange('language')}
                        id="outlined-full-width-language"
                        label="Language"
                        placeholder=""
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                    </FormMarginBottom>
                    <PinkButton onClick={()=>handleSaveAccount()}>Save</PinkButton>
                    <div><Button onClick={()=>setStep(1)}><small>Back</small></Button></div>
                </>}

            </div>
        </div>
    );
}

export default CreateAccount;
