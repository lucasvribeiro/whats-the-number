import { render, screen } from "@testing-library/react";

import Title from "./Title";

describe("Title Component", () => {
  it("should render without crashing", () => {
    render(<Title />);
    const title = screen.getByTestId("title");

    expect(title).toBeTruthy();
  });

  it("should render with a text when have a children", () => {
    render(<Title>Title Test</Title>);
    const title = screen.getByText("Title Test");

    expect(title).toBeInTheDocument();
  });
});
