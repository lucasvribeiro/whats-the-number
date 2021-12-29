import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h2`
  letter-spacing: -1px;
  font-size: 36px;

  background: linear-gradient(
    ${(props) => props.colorOne},
    ${(props) => props.colorTwo}
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  &:after {
    content: "";
    width: 70%;
    margin-left: 15%;
    position: relative;
    border-bottom: 1px solid #cfcfcf;
    margin-top: 12px;
    display: flex;
  }
`;

const Title = ({ children, colorOne, colorTwo }) => {
  return (
    <StyledTitle colorOne={colorOne} colorTwo={colorTwo}>
      {children}
    </StyledTitle>
  );
};

export default Title;
