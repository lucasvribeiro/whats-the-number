import PropTypes from "prop-types";
import styled from "styled-components";

const StyledInput = styled.input`
  width: calc(215px - 24px);
  height: 40px;
  border-radius: 4px;

  font-size: 12px;
  border: 1px solid #cfcfcf;
  padding: 0 12px;

  margin: 0 6px;

  transition: all 0.3s ease;

  &:focus {
    border: 1px solid #ff6600;
    outline: none;
  }
`;

const Input = ({ placeholder, disabled }) => {
  return <StyledInput placeholder={placeholder} disabled={disabled} />;
};

Input.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  placeholder: "Digite o palpite",
  disabled: false,
};

export default Input;
