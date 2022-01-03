/**
 * @summary This is a Title component with a two-color gradient.
 *          Prop-types are in the end of the file.
 */
import PropTypes from "prop-types";
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
  text-shadow: 0px 0px #00000000;

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
    <StyledTitle data-testid="title" colorOne={colorOne} colorTwo={colorTwo}>
      {children}
    </StyledTitle>
  );
};

Title.propTypes = {
  colorOne: PropTypes.string,
  colorTwo: PropTypes.string,
};

Title.defaultProps = {
  colorOne: "#ef6c00",
  colorTwo: "#c0661c",
};

export default Title;
