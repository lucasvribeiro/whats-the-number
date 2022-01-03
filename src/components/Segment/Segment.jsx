/**
 * @summary This is a Segment component to be used in the 7-segment display (Digit component).
 *          Prop-types are in the end of the file.
 */

import PropTypes from "prop-types";
import styled from "styled-components";

const StyledSegment = styled.div`
  --primary-color: #dddddd;

  .on {
    --primary-color: ${(props) => props.color};
  }

  .segment {
    position: absolute;
  }

  .right {
    right: 0;

    width: 0px;
    height: 40px;

    border-radius: 0 6px 6px 0;
  }

  .right-top {
    top: 2px;

    border-bottom: 10px solid transparent;
    border-right: 16px solid var(--primary-color);
    border-top: 18px solid transparent;
  }

  .right-bottom {
    bottom: 2px;

    border-bottom: 18px solid transparent;
    border-right: 16px solid var(--primary-color);
    border-top: 10px solid transparent;
  }

  .left-top {
    top: 2px;

    border-left: 16px solid var(--primary-color);
    border-top: 18px solid transparent;
    border-bottom: 10px solid transparent;
  }

  .left-bottom {
    bottom: 2px;

    border-left: 16px solid var(--primary-color);
    border-top: 10px solid transparent;
    border-bottom: 18px solid transparent;
  }

  .left {
    left: 0;

    width: 0px;
    height: 40px;

    border-radius: 6px 0 0 6px;
  }

  .top {
    top: 0;
    left: 2px;

    height: 0px;
    width: 40px;

    border-top: 18px solid var(--primary-color);
    border-left: 16px solid transparent;
    border-right: 16px solid transparent;

    border-radius: 6px 6px 0 0;
  }

  .bottom {
    bottom: 0;
    left: 2px;

    height: 0px;
    width: 40px;

    border-bottom: 18px solid var(--primary-color);
    border-left: 16px solid transparent;
    border-right: 16px solid transparent;

    border-radius: 0 0 6px 6px;
  }

  .middle {
    top: 62px;
    left: 5px;

    height: 0px;
    width: 40px;

    border-bottom: 8px solid var(--primary-color);
    border-left: 13px solid transparent;
    border-right: 13px solid transparent;
  }

  .middle::after {
    content: "";
    display: inline-block;
    position: absolute;

    top: 8px;
    left: -13px;

    height: 0px;
    width: 40px;

    border-top: 8px solid var(--primary-color);
    border-left: 13px solid transparent;
    border-right: 13px solid transparent;
  }

  @media only screen and (max-width: 480px) {
    .right {
      right: 0;

      width: 0px;
      height: 30px;

      border-radius: 0 6px 6px 0;
    }

    .right-top {
      top: 1px;

      border-bottom: 6px solid transparent;
      border-right: 12px solid var(--primary-color);
      border-top: 14px solid transparent;
    }

    .right-bottom {
      bottom: 1px;

      border-bottom: 14px solid transparent;
      border-right: 12px solid var(--primary-color);
      border-top: 6px solid transparent;
    }

    .left-top {
      top: 1px;

      border-left: 12px solid var(--primary-color);
      border-top: 14px solid transparent;
      border-bottom: 6px solid transparent;
    }

    .left-bottom {
      bottom: 1px;

      border-left: 12px solid var(--primary-color);
      border-top: 6px solid transparent;
      border-bottom: 14px solid transparent;
    }

    .left {
      left: 0;

      width: 0px;
      height: 30px;

      border-radius: 6px 0 0 6px;
    }

    .top {
      top: 0;
      left: 2px;

      height: 0px;
      width: 30px;

      border-top: 14px solid var(--primary-color);
      border-left: 12px solid transparent;
      border-right: 12px solid transparent;

      border-radius: 6px 6px 0 0;
    }

    .bottom {
      bottom: 0;
      left: 2px;

      height: 0px;
      width: 30px;

      border-bottom: 14px solid var(--primary-color);
      border-left: 12px solid transparent;
      border-right: 12px solid transparent;

      border-radius: 0 0 6px 6px;
    }

    .middle {
      top: 46px;
      left: 3px;

      height: 0px;
      width: 26px;

      border-bottom: 6px solid var(--primary-color);
      border-left: 13px solid transparent;
      border-right: 13px solid transparent;
    }

    .middle::after {
      content: "";
      display: inline-block;
      position: absolute;

      top: 6px;
      left: -13px;

      height: 0px;
      width: 26px;

      border-top: 6px solid var(--primary-color);
      border-left: 13px solid transparent;
      border-right: 13px solid transparent;
    }
  }
`;

const Segment = ({ className, color }) => {
  return (
    <StyledSegment data-testid="segment" color={color}>
      <div className={className} />
    </StyledSegment>
  );
};

Segment.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
};

Segment.defaultProps = {
  color: "#dddddd",
};

export default Segment;
