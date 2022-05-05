import { render, screen } from "@testing-library/react";
import ImpedimentTracker from "../pages/ImpedimentTracker";

test("Renders Cycle Time Metric Page", async () => {
  render(<ImpedimentTracker />);
  const mainTitle = screen.getByText(
    "Data not available, please make a valid request before you visit this page."
  );
  expect(mainTitle).toBeInTheDocument();
});
