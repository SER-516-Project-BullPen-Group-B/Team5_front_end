import { render, screen } from "@testing-library/react";
import Throughput from "../pages/Throughput";

test("Renders Cycle Time Metric Page", async () => {
  render(<Throughput />);
  const mainTitle = screen.getByText(
    "Data not available, please make a valid request before you visit this page."
  );
  expect(mainTitle).toBeInTheDocument();
});
