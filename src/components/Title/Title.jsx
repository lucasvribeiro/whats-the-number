import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h2`
  letter-spacing: -1px;
  font-size: 36px;
  margin: 0;

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

  @media only screen and (max-width: 480px) {
    font-size: 24px;
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
