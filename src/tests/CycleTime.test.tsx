import { render, screen } from "@testing-library/react";
import CycleTime from "../pages/CycleTime";

test("Renders Cycle Time Metric Page", async () => {
  render(<CycleTime />);
  const mainTitle = screen.getByText(
    "Data not available, please make a valid request before you visit this page."
  );
  expect(mainTitle).toBeInTheDocument();
});
