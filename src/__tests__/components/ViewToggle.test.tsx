import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { push, setSearchParams } from "../../test-utils/next-navigation";
import { ViewToggle } from "@/features/components/viewToggle/ViewToggle";

jest.mock("next/navigation", () =>
  require("@/test-utils/next-navigation")
);

describe("ViewToggle", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("defaults to grid view when no view param is present", () => {
    setSearchParams("");

    render(<ViewToggle />);

    const gridButton = screen.getByRole("button", { name: /grid/i });
    const tableButton = screen.getByRole("button", { name: /table/i });

    expect(gridButton).toHaveAttribute("aria-pressed", "true");
    expect(tableButton).toHaveAttribute("aria-pressed", "false");
  });


  it("updates URL when switching to table view", async () => {
    const user = userEvent.setup();
    setSearchParams("view=grid&page=2");

    render(<ViewToggle />);

    await user.click(screen.getByRole("button", { name: /table/i }));

    expect(push).toHaveBeenCalledWith(
      expect.stringContaining("view=table")
    );

    expect(push).toHaveBeenCalledWith(
      expect.stringContaining("page=2")
    );
  });

  it("updates URL when switching back to grid view", async () => {
    const user = userEvent.setup();
    setSearchParams("view=table");

    render(<ViewToggle />);

    await user.click(screen.getByRole("button", { name: /grid/i }));

    expect(push).toHaveBeenCalledWith(
      expect.stringContaining("view=grid")
    );
  });
});
