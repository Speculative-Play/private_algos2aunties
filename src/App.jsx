//Packages
import React from 'react';
import styled from 'styled-components';

//Source Code
import PageRoutes from './ReactComponents/Routes/PageRoutes';

// Components
function App() {
  return (
    <AppDiv>
      <PageRoutes />
    </AppDiv>
  );
}

const AppDiv = styled.div`
height: 200vh;
background: #E5E5E5 ;
`;

export default App;