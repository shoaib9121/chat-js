import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CardHeader from "./index";

test("renders CardHeader without errors", () => {
  const { container } = render(<CardHeader />);
  expect(container).toBeTruthy();
});

test("CardHeader should have title", () => {
  render(<CardHeader />);
  expect(screen.getByTestId("header-title").innerHTML).toMatch("Chat");
});
