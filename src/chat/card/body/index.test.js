import { render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import CardBody from "./index";

test("renders CardBody without errors", async () => {
  await act(async () => render(<CardBody />));
  await waitFor(() => {
    expect(screen.getByTestId("card-body")).toBeInTheDocument();
  });
});

test("CardBody scrollTop should match CardBody height", async () => {
  await act(async () => render(<CardBody />));
  await waitFor(() => {
    expect(screen.getByTestId("card-body").scrollTop).toEqual(
      screen.getByTestId("card-body").scrollHeight
    );
  });
});
