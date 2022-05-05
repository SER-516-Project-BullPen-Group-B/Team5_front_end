import { render, screen } from "@testing-library/react";
import AcceptedWorkSpread from "../pages/AcceptedWorkSpread";

test("Renders Cycle Time Metric Page", async () => {
  render(<AcceptedWorkSpread />);
  const mainTitle = screen.getByText(
    "Data not available, please make a valid request before you visit this page."
  );
  expect(mainTitle).toBeInTheDocument();
});
