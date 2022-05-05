import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";

test("Renders Home Page", () => {
  render(<Home />);
  const mainTitle = screen.getByText("Take control of your");
  const subTitle = screen.getByText("Software Development Projects");
  const liveDemo = screen.getByText("Live demo");
  const loreIpsum = screen.getByText("Get Started");
  const statsTitle = screen.getByText(
    "Metrics that help analyze your team's performance"
  );
  const statsSubTitle = screen.getByText(
    "Our metrics provide an insight into productivity through the different stages of a software development lifecycle. This helps to assess the quality of a product and track team performance."
  );
  expect(mainTitle).toBeInTheDocument();
  expect(subTitle).toBeInTheDocument();
  expect(liveDemo).toBeInTheDocument();
  expect(loreIpsum).toBeInTheDocument();
  expect(statsTitle).toBeInTheDocument();
  expect(statsSubTitle).toBeInTheDocument();
});
