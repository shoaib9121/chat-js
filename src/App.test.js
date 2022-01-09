import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders chat app", () => {
  const wrapper = render(<App />);
  expect(wrapper).toBeTruthy();
});
