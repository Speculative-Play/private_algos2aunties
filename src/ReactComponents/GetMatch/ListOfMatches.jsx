import React, {Component} from 'react'
import styled from 'styled-components'
import { Button, FormControl, OutlinedInput, Grid } from '@material-ui/core';
import MatchItem from './MatchItem';


const ListContainerStyle = styled.div`
  background-color: rgba(245, 234, 234, 0.35);
  border-radius: 17px;
  padding: 25px;
`;
function GetMatchPage(props) {

  const sampleMatch = () =>  <>
    <Grid item xs={12}>
      <MatchItem />
    </Grid>
  </>

  return (
    <div>
        <ListContainerStyle>
          <Grid container spacing={2} direction="column">
            {sampleMatch()}
            {sampleMatch()}
            {sampleMatch()}
            {sampleMatch()}
            {sampleMatch()}
            {sampleMatch()}
            {sampleMatch()}
            {sampleMatch()}
            {sampleMatch()}
            {sampleMatch()}
            {sampleMatch()}
            {sampleMatch()}
            {sampleMatch()}
          </Grid>
        </ListContainerStyle>
    </div>
  );
}

export default GetMatchPage;
