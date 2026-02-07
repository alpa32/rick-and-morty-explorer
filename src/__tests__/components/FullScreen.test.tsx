import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FullScreenState } from "@/components/common/FullScreenState";


describe("FullScreenState", () => {
  it("renders children content", () => {
    render(
      <FullScreenState>
        <p>Loading characters...</p>
      </FullScreenState>
    );

    expect(
      screen.getByText(/Loading characters/i)
    ).toBeInTheDocument();
  });

  it("uses loading variant by default", () => {
    const { container } = render(
      <FullScreenState>
        <span>Loading...</span>
      </FullScreenState>
    );

    const wrapper = container.firstChild as HTMLElement;

    expect(wrapper).toHaveClass("loading");
  });

  it("applies loading class when variant is loading", () => {
    const { container } = render(
      <FullScreenState variant="loading">
        <span>Loading...</span>
      </FullScreenState>
    );

    const wrapper = container.firstChild as HTMLElement;

    expect(wrapper).toHaveClass("loading");
  });

  it("applies error class when variant is error", () => {
    const { container } = render(
      <FullScreenState variant="error">
        <span>Something went wrong</span>
      </FullScreenState>
    );

    const wrapper = container.firstChild as HTMLElement;

    expect(wrapper).toHaveClass("error");
  });
});
