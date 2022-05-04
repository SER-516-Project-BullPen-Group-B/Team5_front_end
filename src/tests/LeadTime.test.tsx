import { render, screen } from "@testing-library/react";
import LeadTime from "../pages/LeadTime";

test("Renders Lead Time Metric Page", async () => {
  render(<LeadTime />);
  const mainTitle = screen.getByText(
    "Data not available, please make a valid request before you visit this page."
  );
  expect(mainTitle).toBeInTheDocument();
});
