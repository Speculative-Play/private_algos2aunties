//Packages
import React, {useState} from 'react'
import styled from 'styled-components'
import { Button, 
        TextField } from '@material-ui/core';

//Source Code
import CreateAccount from './CreateAccount';

//Component
function AuthPage(props) {
    const [isLogin, setIsLogin] = useState(false);
    const [form, setForm] = React.useState({
        email: '',
        password: '',
    });

    const handleChange = (option) => (event) => {
        setForm({ ...form, [option]: event.target.value });
    };

    const handleLogin = () => {
        console.log('handle login')
    }

    return (
        <MainPadding>
            <WhiteBg>
                {isLogin ? <>
                    <h2>Welcome to A2A</h2>
                    <FormMarginBottom>
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
                    </FormMarginBottom>

                    <ButtonsContainer>
                        <PinkButton onClick={handleLogin}>Login</PinkButton>
                    </ButtonsContainer>
                    <LoginCallToAction className='cursor-pointer'>
                        <span onClick={() => setIsLogin(false)}>Create an account</span>
                    </LoginCallToAction>
                </>: <>
                        <CreateAccount setIsLogin={setIsLogin}/>
                </>}


            </WhiteBg>
        </MainPadding>
    );
}

//Styling 
const MainPadding = styled.div`
    padding: 10vh 10vw;
    background-color: #F5EAEA;
    height: 100vh;
`;
const WhiteBg = styled.div`
    background-color: #fff;
    padding: 5vh 20vw;
    border-radius: 10px;
`;
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
const ButtonsContainer = styled.div`
    display: flex;
    gap: 1.4rem;
    justify-content: center;
`;
const LoginCallToAction = styled.div`
    margin-top: 0.5rem;
    font-size: 14px;
    span{
        color: #E8A3B0;
        font-weight: bold;
    }
`;

export default AuthPage;
