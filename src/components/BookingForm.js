import React, { useState } from "react";

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [errors, setErrors] = useState({});

  const validationForm = () => {
    let newErrors = {};

    if (!date) newErrors.date = "Please select a date!";
    if (!times) newErrors.times = "Please choose a time!";
    if (!guests || guests < 1)
      newErrors.guests = "Number of guests must be at least 1.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validationForm()) {
      const formData = { date, times, guests, occasion };

      console.log("Book List Ordered: ", formData);
      props.SubmitForm(formData);
    }
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            {/* Date Selection */}
            <div>
              <label htmlFor="book-date">Choose Date:</label>
              <input
                id="book-date"
                value={date}
                onChange={(e) => handleChange(e.target.value)}
                type="date"
                required
              />
              {errors.date && <p style={{ color: "red" }}>{errors.date}</p>}
            </div>

            {/* Time Selection */}
            <div>
              <label htmlFor="book-time">Choose Time:</label>
              <select
                id="book-time"
                value={times}
                onChange={(e) => setTimes(e.target.value)}
              >
                <option value="">Select a Time</option>
                {props.availableTimes.availableTimes.map((availableTimes) => {
                  return <option key={availableTimes}>{availableTimes}</option>;
                })}
              </select>
              {errors.times && <p style={{ color: "red" }}>{errors.times}</p>}
            </div>

            {/* Number of Guest */}
            <div>
              <label htmlFor="book-guests">Number of Guests:</label>
              <input
                id="book-guests"
                min={1}
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
              {errors.guests && <p style={{ color: "red" }}>{errors.guests}</p>}
            </div>

            {/* Field of Occasion */}
            <div>
              <label htmlFor="book-occasion">Occasion:</label>
              <select
                id="book-occasion"
                key={occasion}
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
              >
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
              {errors.occasion && <p style={{ color: "red" }}>{errors.occasion}</p>}
            </div>

            {/* Submit Button */}
            <div className="btnReceive">
              <input aria-label="On Click" type="submit" value={"Make Your Reservation"} />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
