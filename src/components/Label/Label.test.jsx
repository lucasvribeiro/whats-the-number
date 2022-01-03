import { render, screen } from "@testing-library/react";

import Label from "./Label";

describe("Label Component", () => {
  it("should render without crashing", () => {
    render(<Label />);
    const label = screen.getByTestId("label");

    expect(label).toBeTruthy();
  });

  it("should render with a text when have a children", () => {
    render(<Label>Label Test</Label>);
    const label = screen.getByText("Label Test");

    expect(label).toBeInTheDocument();
  });
});
