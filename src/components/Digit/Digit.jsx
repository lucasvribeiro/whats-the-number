/**
 * @summary This is a 7-segment Digit component.
 *          Prop-types are in the end of the file.
 */

import styled from "styled-components";
import PropTypes from "prop-types";
import Segment from "../Segment/Segment";

import {
  leftTop,
  leftBottom,
  rightTop,
  rightBottom,
  top,
  bottom,
  middle,
} from "../../services/segments";

const StyledDigit = styled.div`
  height: 140px;
  width: 76px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;
  margin: 8px;

  @media only screen and (max-width: 480px) {
    height: 104px;
    width: 58px;
  }
`;

const Digit = ({ digit, color }) => {
  /**
   * @summary Check if a specific segment should be ON or OFF acording to the incoming digit.
   * @param {number} digit The incoming digit to be displayed (Example: 5)
   * @param {string} segment The segment to be checked if should be ON or OFF (Example: "right-top")
   */
  const segmentIsOn = (digit, segment) => {
    switch (segment) {
      case "left-top":
        if (leftTop.includes(digit)) return true;
        return false;

      case "right-top":
        if (rightTop.includes(digit)) return true;
        return false;

      case "left-bottom":
        if (leftBottom.includes(digit)) return true;
        return false;

      case "right-bottom":
        if (rightBottom.includes(digit)) return true;
        return false;

      case "top":
        if (top.includes(digit)) return true;
        return false;

      case "bottom":
        if (bottom.includes(digit)) return true;
        return false;

      case "middle":
        if (middle.includes(digit)) return true;
        return false;

      default:
        return 0;
    }
  };

  return (
    <StyledDigit digit={digit} data-testid="digit">
      <Segment
        color={color}
        className={`${
          segmentIsOn(digit, "left-top") && "on"
        } segment left left-top`}
      />

      <Segment
        color={color}
        className={`${segmentIsOn(digit, "top") && "on"} segment top`}
      />
      <Segment
        color={color}
        className={`${
          segmentIsOn(digit, "right-top") && "on"
        } segment right right-top`}
      />

      <Segment
        color={color}
        className={`${segmentIsOn(digit, "middle") && "on"} segment middle`}
      />

      <Segment
        color={color}
        className={`${
          segmentIsOn(digit, "left-bottom") && "on"
        } segment left left-bottom`}
      />

      <Segment
        color={color}
        className={`${segmentIsOn(digit, "bottom") && "on"} segment bottom`}
      />

      <Segment
        color={color}
        className={`${
          segmentIsOn(digit, "right-bottom") && "on"
        } segment right right-bottom`}
      />
    </StyledDigit>
  );
};

Digit.propTypes = {
  digit: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).isRequired,
  color: PropTypes.string,
};

Digit.defaultProps = {
  digit: 0,
  color: "#dddddd",
};

export default Digit;
