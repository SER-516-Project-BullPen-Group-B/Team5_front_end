import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";

test("Renders Home Page", () => {
  render(<Home />);
  const mainTitle = screen.getByText("Take control of your");
  const subTitle = screen.getByText("Software Development Projects");
  const getStarted = screen.getByText("Get started");
  const liveDemo = screen.getByText("Live demo");
  const loreIpsum = screen.getByText("Lore ipsum");
  const statsTitle = screen.getByText("Valuable Metrics");
  const statsSubTitle = screen.getByText(
    "Get actionable data that will help grow your business"
  );
  expect(mainTitle).toBeInTheDocument();
  expect(subTitle).toBeInTheDocument();
  expect(getStarted).toBeInTheDocument();
  expect(liveDemo).toBeInTheDocument();
  expect(loreIpsum).toBeInTheDocument();
  expect(statsTitle).toBeInTheDocument();
  expect(statsSubTitle).toBeInTheDocument();
});
