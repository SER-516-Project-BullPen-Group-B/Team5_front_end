import { render, screen } from "@testing-library/react";
import CFD from "../pages/CFD";

test("Renders Cycle Time Metric Page", async () => {
  render(<CFD />);
  const mainTitle = screen.getByText(
    "Data not available, please make a valid request before you visit this page."
  );
  expect(mainTitle).toBeInTheDocument();
});
