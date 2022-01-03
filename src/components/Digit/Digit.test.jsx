import { render, screen } from "@testing-library/react";

import Digit from "./Digit";

describe("Digit Component", () => {
  it("should render without crashing", () => {
    render(<Digit />);
    const digit = screen.getByTestId("digit");

    expect(digit).toBeTruthy();
  });
});
