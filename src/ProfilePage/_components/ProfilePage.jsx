import React, { Component, useState } from 'react'
import styled from 'styled-components'
import { Button, FormControl, OutlinedInput, Grid, StepLabel, FormGroup } from '@material-ui/core';
import AccordionsSection from '../_components/AccordionsSection';
import PersonalInfo from './PersonalInfo';
const BgColor = styled.div`
    background-color: #F5EAEA;
`;
const TempoPadding = styled.div`
    padding: 10vh 15vw;
`;
const MarginBottom20 = styled.div`
    margin-bottom: 3rem;
`;
function ProfilePage(props) {

    return (
        <div>
            <BgColor>
                <TempoPadding>
                    <MarginBottom20>
                        <div className='card-border bg-white'>
                            <PersonalInfo />
                        </div>
                    </MarginBottom20>
                    <AccordionsSection />
                </TempoPadding>
            </BgColor>
        </div>
    );
}

export default ProfilePage;
