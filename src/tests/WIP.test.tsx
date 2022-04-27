import { render, screen } from "@testing-library/react";
import WIP from "../pages/WIP";

test("Renders Cycle Time Metric Page", async () => {
  render(<WIP />);
  const mainTitle = screen.getByText(
    "Data not available, please make a valid request before you visit this page."
  );
  expect(mainTitle).toBeInTheDocument();
});
