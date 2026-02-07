import { render, screen, fireEvent } from "@testing-library/react";
import { Pagination } from "@/features/components/pagination/Pagination";
import { push, setSearchParams } from "@/test-utils/next-navigation";

jest.mock("next/navigation", () =>
  require("@/test-utils/next-navigation")
);

describe("Pagination", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders current page and total pages", () => {
    setSearchParams("page=2");

    render(<Pagination page={2} totalPages={5} />);

    expect(
        screen.getByText((content, element) =>
          element?.textContent === "Page 2 of 5"
        )
      ).toBeInTheDocument();
  });

  it("disables Prev button on first page", () => {
    setSearchParams("page=1");

    render(<Pagination page={1} totalPages={5} />);

    expect(screen.getByRole("button", { name: /prev/i })).toBeDisabled();
    expect(screen.getByRole("button", { name: /next/i })).toBeEnabled();
  });

  it("disables Next button on last page", () => {
    setSearchParams("page=5");

    render(<Pagination page={5} totalPages={5} />);

    expect(screen.getByRole("button", { name: /next/i })).toBeDisabled();
    expect(screen.getByRole("button", { name: /prev/i })).toBeEnabled();
  });

  it("navigates to next page when clicking Next", () => {
    setSearchParams("page=2&sort=asc");

    render(<Pagination page={2} totalPages={5} />);

    fireEvent.click(screen.getByRole("button", { name: /next/i }));

    expect(push).toHaveBeenCalledWith(
      "/characters?page=3&sort=asc"
    );
  });

  it("navigates to previous page when clicking Prev", () => {
    setSearchParams("page=3&view=grid");

    render(<Pagination page={3} totalPages={5} />);

    fireEvent.click(screen.getByRole("button", { name: /prev/i }));

    expect(push).toHaveBeenCalledWith(
      "/characters?page=2&view=grid"
    );
  });
});
