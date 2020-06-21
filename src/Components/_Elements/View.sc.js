import React from 'react'
import styled from 'styled-components';

export const ViewWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.background ? props.background : "#fff"};
  display: flex;
  flex-flow: row nowrap;
`;
