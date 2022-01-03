/**
 * @summary This is a Button component with a two-color background gradient.
 *          Prop-types are in the end of the file.
 */

import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  width: fit-content;
  height: 42px;
  padding: 0 12px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  margin: 0 4px;

  font-size: 12px;
  font-weight: bold;
  font-family: "Roboto", sans-serif !important;

  color: ${(props) => props.fnColor};
  background: linear-gradient(
    ${(props) => props.bgColorOne},
    ${(props) => props.bgColorTwo}
  );

  &:hover {
    background: linear-gradient(
      ${(props) => `${props.bgColorOne}cc`},
      ${(props) => `${props.bgColorTwo}cc`}
    );
  }

  &:disabled {
    background: #dddddd;
    cursor: not-allowed;
  }
`;

const Button = ({
  children,
  fnColor,
  bgColorOne,
  bgColorTwo,
  onClick,
  disabled,
}) => {
  return (
    <StyledButton
      fnColor={fnColor}
      bgColorOne={bgColorOne}
      bgColorTwo={bgColorTwo}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  fnColor: PropTypes.string,
  bgColorOne: PropTypes.string,
  bgColorTwo: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  fnColor: "#ffffff",
  bgColorOne: "#ef6c00",
  bgColorTwo: "#c0661c",
  disabled: false,
};

export default Button;
