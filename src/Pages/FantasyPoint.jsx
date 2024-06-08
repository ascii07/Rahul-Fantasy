// src/pages/FantasyPoints.js
import React from 'react';
import styled from 'styled-components';

const FantasyPoints = () => {
  return (
    <ContentContainer>
      <h1>Fantasy Points</h1>
      <p>This is the fantasy points page.</p>
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;
`;

export default FantasyPoints;
