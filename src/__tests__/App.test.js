import { render, screen, cleanup } from "@testing-library/react";
import App from "../App";

afterEach(cleanup);

describe("App", () => {
  it("renders content", () => {
    const elemento = document.getElementById("apptodo");
    expect(elemento).toBeDefined();
  });

  it("renders specific div in App", () => {
    const component = render(<App />);
    component.getByText("Welcome to Brastlewark");
  });

  it("renders custom element", () => {
    render(<div data-testid="custom-element" />);
    const element = screen.getByTestId("custom-element");
    expect(element).toBeInTheDocument();
  });
});
