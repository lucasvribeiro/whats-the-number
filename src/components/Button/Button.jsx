import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  width: fit-content;
  height: 42px;
  padding: 0 10px;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  font-size: 12px;
  font-weight: bold;

  color: ${(props) => props.fnColor};
  background: linear-gradient(
    ${(props) => props.bgColorOne},
    ${(props) => props.bgColorTwo}
  );

  &:disabled {
    background: #dddddd;
    cursor: not-allowed;
  }
`;

const Button = ({ children, fnColor, bgColorOne, bgColorTwo, disabled }) => {
  return (
    <StyledButton
      fnColor={fnColor}
      bgColorOne={bgColorOne}
      bgColorTwo={bgColorTwo}
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
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  fnColor: "#ffffff",
  bgColorOne: "#ef6c00",
  bgColorTwo: "#c0661c",
  disabled: false,
};

export default Button;