import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("Renders the Header heading", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const headingElement = screen.getByRole("heading", { name: /Little Lemon/i });
  expect(headingElement).toBeInTheDocument();
});

test("Clicking Reserve button shows time dropdown", async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Pastikan tombol "Reserve" ada sebelum mengkliknya
  const reserveButton = await screen.findByText(/Reserve Table/i);
  expect(reserveButton).toBeInTheDocument();

  // Klik tombol reserve
  fireEvent.click(reserveButton);

  // Tunggu hingga elemen dropdown waktu muncul
  const timeDropdown = await screen.findByLabelText(/Choose Time/i);
  expect(timeDropdown).toBeInTheDocument();
});
