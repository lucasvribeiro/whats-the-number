import { render, screen } from "@testing-library/react";

import Segment from "./Segment";

describe("Segment Component", () => {
  it("should render without crashing", () => {
    render(<Segment />);
    const segment = screen.getByTestId("segment");

    expect(segment).toBeTruthy();
  });
});
