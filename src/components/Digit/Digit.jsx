import styled from "styled-components";

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

// Function to check if a specific segment should be on or off acording to the incoming digit
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

const StyledDigit = styled.div`
  height: 140px;
  width: 76px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;
  margin: 8px;
`;

const Digit = ({ digit, color }) => {
  return (
    <StyledDigit digit={digit}>
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

export default Digit;
