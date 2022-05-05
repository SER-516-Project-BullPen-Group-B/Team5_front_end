import { render, screen } from "@testing-library/react";
import ScopeChange from "../pages/ScopeChange";

test("Renders Cycle Time Metric Page", async () => {
  render(<ScopeChange />);
  const mainTitle = screen.getByText(
    "Data not available, please make a valid request before you visit this page."
  );
  expect(mainTitle).toBeInTheDocument();
});
