import { render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import ReactDOM from "react-dom";
import CardBody from "./index";

test("renders CardBody without errors", async () => {
  await act(async () => render(<CardBody />));
  await waitFor(() => {
    expect(screen.getByTestId("card-body")).toBeInTheDocument();
  });
});

let container;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});
test("CardBody scrollTop should match CardBody height", async () => {
  act(() => {
    ReactDOM.render(<CardBody />, container);
  });
  await waitFor(() => {
    expect(screen.getByTestId("card-body").scrollTop).toEqual(
      screen.getByTestId("card-body").scrollHeight
    );
  });
});
