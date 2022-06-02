import React, { Component, useState } from 'react'
import styled from 'styled-components'
import { Button, FormControl, OutlinedInput, Grid, StepLabel, FormGroup } from '@material-ui/core';
import AccordionItem from './AccordionItem';

const TempoPadding = styled.div`
    padding: 10vh 20vw;
`;
function AccordionsSection(props) {

    return (
        <div>
                <AccordionItem progressColor="#8777D9" />
                <AccordionItem progressColor="#FFC400" />
                <AccordionItem progressColor="#57D9A3" />
                <AccordionItem progressColor="#FF7452" />
        </div>
    );
}

export default AccordionsSection;
