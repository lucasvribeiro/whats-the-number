/**
 * @summary This is an Input component to get the user guess number.
 *          Prop-types are in the end of the file.
 */

import PropTypes from "prop-types";
import styled from "styled-components";

const StyledInput = styled.input`
  width: calc(215px - 24px);
  height: 40px;
  border-radius: 4px;

  font-size: 12px;
  border: 1px solid #cfcfcf;
  padding: 0 12px;

  margin: 0 4px;

  transition: all 0.3s ease;

  &:focus {
    border: 1px solid #ff6600;
    outline: none;
  }
`;

const Input = ({ placeholder, value, onChange, disabled, triggerButton }) => {
  /**
   * @summary Trigger the submit button when user types "Enter".
   * @param {object} e The event from keyboard.
   */
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      triggerButton();
    }
  };

  return (
    <StyledInput
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      onKeyDown={handleKeyDown}
      type="number"
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.number,
  onChange: PropTypes.func,
  triggerButton: PropTypes.func,
};

Input.defaultProps = {
  placeholder: "Digite o palpite",
  disabled: false,
};

export default Input;
