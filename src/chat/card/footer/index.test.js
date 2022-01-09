import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CardFooter from "./index";

test("renders CardFooter without errors", () => {
  const { container } = render(<CardFooter />);
  expect(container).toBeTruthy();
});

test("renders CardFooter without errors", async () => {
  render(<CardFooter />);
  const textInput = screen.getByTestId("message-input");
  fireEvent.change(textInput, { target: { value: "any text message" } });
  expect(textInput.value).toEqual("any text message");

  // const messageSubmit = screen.getByTestId("message-submit");
  // fireEvent.click(messageSubmit);
  // const onSubmit = jest.fn();
  // await waitFor(() => {
  //   expect(onSubmit).toHaveBeenCalled();
  // });
});
