import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { push, setSearchParams } from "../../test-utils/next-navigation";
import { SortToggle } from "@/features/components/sortToggle/SortToggle";

jest.mock("next/navigation", () =>
  require("@/test-utils/next-navigation")
);

describe("SortToggle", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders default state when no sort param is present", () => {
    setSearchParams("");

    render(<SortToggle />);

    expect(
      screen.getByText(/Created: Old to New/i)
    ).toBeInTheDocument();

    expect(screen.getByText("↑")).toBeInTheDocument();
  });

  it("toggles sort from asc to desc and updates URL", async () => {
    const user = userEvent.setup();
    setSearchParams("sort=asc&page=2");

    render(<SortToggle />);

    await user.click(screen.getByRole("button"));

    expect(push).toHaveBeenCalledWith(
      expect.stringContaining("sort=desc")
    );

    expect(push).toHaveBeenCalledWith(
      expect.stringContaining("page=1")
    );
  });

  it("toggles sort from desc to asc", async () => {
    const user = userEvent.setup();
    setSearchParams("sort=desc&page=3");

    render(<SortToggle />);

    expect(
      screen.getByText(/Created: New to Old/i)
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button"));

    expect(push).toHaveBeenCalledWith(
      expect.stringContaining("sort=asc")
    );
  });
});
