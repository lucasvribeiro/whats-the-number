import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from "./Button";

describe("Button Component", () => {
  it("should render without crashing", () => {
    render(<Button />);
    const button = screen.getByRole("button");

    expect(button).toBeTruthy();
  });

  it("should render with a text when have a children", () => {
    render(<Button>Button Test</Button>);
    const button = screen.getByText("Button Test");

    expect(button).toBeInTheDocument();
  });

  it("should render a disabled button", () => {
    render(<Button disabled={true}>Button Test</Button>);
    const button = screen.getByRole("button");

    expect(button).toHaveAttribute("disabled");
  });

  it("should render an enabled button", () => {
    render(<Button>Button Test</Button>);
    const button = screen.getByRole("button");

    expect(button).not.toHaveAttribute("disabled");
  });

  it("should call onClick when click on button", () => {
    const handleOnClick = jest.fn();

    render(<Button onClick={handleOnClick}>Button Test</Button>);
    const button = screen.getByRole("button");

    userEvent.click(button);

    expect(handleOnClick).toHaveBeenCalled();
  });

  it("should not call onClick when click on button", () => {
    const handleOnClick = jest.fn();

    render(
      <Button onClick={handleOnClick} disabled={true}>
        Button Test
      </Button>
    );
    const button = screen.getByRole("button");

    userEvent.click(button);

    expect(handleOnClick).not.toHaveBeenCalled();
  });
});
