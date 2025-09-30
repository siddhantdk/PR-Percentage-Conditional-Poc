import { render, screen } from "@testing-library/react";
import { Hello } from "./Home";
import { HelloComponent } from "./Component";

test("renders the correct greeting", () => {
  render(<Hello name="Vite" />);
  expect(screen.getByText("Hello, Vite!")).toBeInTheDocument();
});

test("renders the correct greeting", () => {
  render(<Hello name="Vite" />);
  expect(screen.getByText("Hello, Vite!")).toBeInTheDocument();
});

test("renders the correct greeting", () => {
  render(<Hello name="Vite" />);
  expect(screen.getByText("Hello, Vite!")).toBeInTheDocument();
});

test("renders the correct greeting", () => {
  render(<Hello name="Vite" />);
  expect(screen.getByText("Hello, Vite!")).toBeInTheDocument();
});

test("renders the correct greeting", () => {
  render(<Hello name="Vite" />);
  expect(screen.getByText("Hello, Vite!")).toBeInTheDocument();
});

test("renders the correct greeting", () => {
  render(<Hello name="Vite" />);
  expect(screen.getByText("Hello, Vite!")).toBeInTheDocument();
});

test("renders the correct greeting", () => {
  render(<Hello name="Vite" />);
  expect(screen.getByText("Hello, Vite!")).toBeInTheDocument();
});

test("renders the correct greeting", () => {
  render(<HelloComponent name="Vite" />);
  expect(screen.getByText("HelloComponent, Vite!")).toBeInTheDocument();
});

test("renders the correct greeting", () => {
  render(<HelloComponent name="Vite" />);
  expect(screen.getByText("HelloComponent, Vite!")).toBeInTheDocument();
});

test("renders the correct greeting", () => {
  render(<HelloComponent name="Vite" />);
  expect(screen.getByText("HelloComponent, Vite!")).toBeInTheDocument();
});

test("renders the correct greeting", () => {
  render(<HelloComponent name="Vite" />);
  expect(screen.getByText("HelloComponent, Vite!")).toBeInTheDocument();
});
