import { render, screen } from "@testing-library/react";
import NikoNiko from "../pages/Niko-Niko";

test("Renders Cycle Time Metric Page", async () => {
  render(<NikoNiko />);
  const mainTitle = screen.getByText(
    "Data not available, please make a valid request before you visit this page."
  );
  expect(mainTitle).toBeInTheDocument();
});
