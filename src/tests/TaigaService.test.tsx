import { render, screen } from "@testing-library/react";
import TaigaService from "../pages/TaigaService";

test("Renders Taiga Service Page", async () => {
  render(<TaigaService />);
  const mainTitle = screen.getByText(
    "Welcome! Visualize your project’s metrics here"
  );
  const usernameField = screen.getByLabelText("Username");
  const passwordField = screen.getByLabelText("Password");
  const slugField = screen.getByLabelText(/Taiga Project Slug/);
  const instruction = screen.getByText(/For CFD and WIP please provide the /i, {
    exact: false,
  });
  const submitButton = screen.getByText("Fetch");
  expect(mainTitle).toBeInTheDocument();
  expect(usernameField).toBeInTheDocument();
  expect(passwordField).toBeInTheDocument();
  expect(slugField).toBeInTheDocument();
  expect(instruction).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});
