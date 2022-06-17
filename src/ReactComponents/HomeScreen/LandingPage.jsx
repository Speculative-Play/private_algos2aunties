//Packages
import { Button, Box } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components'

//Assets
import Logo from '../../assets/Logo512.png';

//Component
export default function LandingPage(props){
    return (
    <div>
        <LogoAndName />
        <Heading>First Page Animation/GIF Message</Heading>
        
        <CentralContent>
            <p>Pie Chart: Giving weighted preference to different blocks.</p>
            <p>Explore how to have different amount of personal agency.</p>
        </CentralContent>
        
        <CentralContent>
            <p>Addressing User's Pain Points: Mitigating the tension between the wants of Children vs Parents vs Society.</p>
        </CentralContent>
        
        <CentralContent>
            <p>Similar stuff like other websites, just the way you choose to work with them is different (we are not radical)</p>
        </CentralContent>

        <CentralContent>
            <p>Privacy and Visibility Options</p>
            <p>Who you are and how you wish to be represented</p>
        </CentralContent>

        <CallToActionText>Start Free Today! SIGN UP</CallToActionText>
        
        <Box display="flex" justifyContent="center" alignItems="center" sx={{m:3}}>
            <Button variant="contained" > <a href="/auth"></a>I'm a User looking for a match</Button>
        </Box>

        <Box display="flex" justifyContent="center" alignItems="center">
            <Button variant="contained" >I'm a Parent helping my child find a match</Button>
        </Box>

        <CenteredP>Already have an account? <a href='/auth'>Log In</a> </CenteredP> 
    </div>);
}

function LogoAndName() {
    return (
        <div>
            <table>
                <tr>
                    <td><AppLogo src={Logo} alt="Algos2Aunties Logo" /> </td>
                    <td><AuntiesAlgorithms> Aunties + Algorithms</AuntiesAlgorithms></td>
                </tr>
            </table>
        </div>
    );
}


//Styling
const AppLogo = styled.img`
height:80px;
width: 80px;
padding: 30px;
`;

const AuntiesAlgorithms = styled.h1`
font-size: 20px;
text-align: left;
font-family: 'Fira Sans', sans-serif;
font-style: light;
color: #E8A3B0;
`;
const Heading = styled.h1`
font-size: 20px;
text-align: center;
font-family: 'Fira Sans', sans-serif;
font-style: light;
color: #676767D9;
`;

const CentralContent = styled.div`
font-size: 14px;
text-align: center;
font-family: 'Fira Sans', sans-serif;
font-style: light;
color: #676767D9;
padding-top: 1px;
flex-wrap: wrap;
`;

const CallToActionText = styled.h2`
color = #000;
font-size: 20px;
text-align: center;
font-family: 'Fira Sans', sans-serif;
padding-top: 10px;
`;

const CenteredP = styled.p`
text-align: center;
color: #0000000;
font-family: 'Fira Sans', sans-serif;
font-size: 12px;
`;
