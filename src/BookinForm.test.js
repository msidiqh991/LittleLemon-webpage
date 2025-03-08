import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

describe("Booking Form", () => {
    const mockSubmitForm = jest.fn();
    const mockDispatch = jest.fn();

  test("Renders form fields correctly", () => {
    render(
      <BookingForm
        availableTimes={{ availableTimes: ["18:00", "19:00", "20:00"] }}
        dispatch={mockDispatch}
        SubmitForm={mockSubmitForm}
      />
    );

    expect(screen.getByLabelText(/Choose Date:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose Time:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of Guests:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion:/i)).toBeInTheDocument();
  });

  test("Validates required fields before submission", () => {
    render(
      <BookingForm
        availableTimes={{ availableTimes: ["18:00", "19:00", "20:00"] }}
        dispatch={mockDispatch}
        SubmitForm={mockSubmitForm}
      />
    );

    const submitButton = screen.getByDisplayValue(/Make your reservation/i);
    fireEvent.click(submitButton);

    expect(screen.getByText(/Please select a date!/i)).toBeInTheDocument();
    expect(screen.getByText(/Please choose a time!/i)).toBeInTheDocument();
  });

  test("Calls submit function when form is valid", () => {
    render(
      <BookingForm
        availableTimes={{ availableTimes: ["18:00", "19:00", "20:00"] }}
        dispatch={mockDispatch}
        SubmitForm={mockSubmitForm}
      />
    );

    fireEvent.change(screen.getByLabelText(/Choose Date:/i), { target: { value: "2025-03-08" } });
    fireEvent.change(screen.getByLabelText(/Choose Time:/i), { target: { value: "18:00" } });
    fireEvent.change(screen.getByLabelText(/Number of Guests:/i), { target: { value: "2" } });
    fireEvent.change(screen.getByLabelText(/Occasion:/i), { target: { value: "Birthday" } });

    const submitButton = screen.getByDisplayValue(/Make your reservation/i);
    fireEvent.click(submitButton);

    expect(mockSubmitForm).toHaveBeenCalledWith({
      date: "2025-03-08",
      times: "18:00",
      guests: "2",
      occasion: "Birthday"
    });
  });
});
