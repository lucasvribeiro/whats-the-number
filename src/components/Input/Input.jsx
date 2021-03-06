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
  box-shadow: 1px 4px 22px -5px rgba(0, 0, 0, 0.15);

  &:focus {
    border: 1px solid #ff6600;
    outline: none;
  }
`;

const Input = ({
  id,
  placeholder,
  value,
  onChange,
  disabled,
  triggerButton,
}) => {
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
      data-testid="input"
      id={id}
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
  id: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  triggerButton: PropTypes.func,
};

Input.defaultProps = {
  id: "guess-input",
  placeholder: "Digite o palpite",
  disabled: false,
};

export default Input;
