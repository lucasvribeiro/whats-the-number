/**
 * @summary This is a Label component with a two-color background gradient.
 *          Prop-types are in the end of the file.
 */

import styled from "styled-components";
import PropTypes from "prop-types";

const StyledLabel = styled.span`
  padding: 2px 8px;
  width: fit-content;
  border-radius: 8px;
  font-size: 0.8rem;

  color: ${(props) => props.fnColor};
  background: linear-gradient(
    ${(props) => props.bgColorOne},
    ${(props) => props.bgColorTwo}
  );

  margin: 0 4px;
`;

const Label = ({ children, fnColor, bgColorOne, bgColorTwo }) => {
  return (
    <StyledLabel
      data-testid="label"
      fnColor={fnColor}
      bgColorOne={bgColorOne}
      bgColorTwo={bgColorTwo}
    >
      {children}
    </StyledLabel>
  );
};

Label.propTypes = {
  children: PropTypes.any,
  fnColor: PropTypes.string,
  bgColorOne: PropTypes.string,
  bgColorTwo: PropTypes.string,
};

Label.defaultProps = {
  fnColor: "#ffffff",
  bgColorOne: "#434854",
  bgColorTwo: "#9E9E9E",
};

export default Label;
