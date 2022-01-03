import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";

import Input from "./Input";

describe("Input Component", () => {
  it("should render without crashing", () => {
    render(<Input />);
    const input = screen.getByTestId("input");

    expect(input).toBeTruthy();
  });

  it("should render with a placeholder", () => {
    render(<Input placeholder="Test..." />);
    const input = screen.getByPlaceholderText("Test...");

    expect(input).toBeInTheDocument();
  });

  it("should render a disabled input", () => {
    render(<Input disabled={true} />);
    const input = screen.getByTestId("input");

    expect(input).toHaveAttribute("disabled");
  });

  it("should render an enabled input", () => {
    render(<Input />);
    const input = screen.getByTestId("input");

    expect(input).not.toHaveAttribute("disabled");
  });

  it("should call onChange when value change", () => {
    const handleOnChange = jest.fn();

    render(<Input onChange={handleOnChange} />);
    const input = screen.getByTestId("input");

    fireEvent.change(input, { target: { value: "7" } });

    expect(handleOnChange).toHaveBeenCalled();
  });
});
