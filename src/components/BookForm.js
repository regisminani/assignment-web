import { useState } from "react";

function BookForm() {
  const [publishedYear, setPublishedYear] = useState("");
  const [error, setError] = useState("");
  const validateInputs = (year) => {
    const fourDigitRegex = /^\d{4}$/;
    if (!fourDigitRegex.test(year))
      setError("The Published Year must be a four digit number!");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    validateInputs(publishedYear);
  };
  return (
    <form className="styled-form comp" onSubmit={handleSubmit}>
      <h2>Registration Form for Books</h2>
      <label htmlFor="title">Book Title: </label>
      <input type="text" id="title" name="title" required />
      <br />
      <label htmlFor="author">Author: </label>
      <input type="text" id="author" name="author" />
      <br />
      <label htmlFor="isbn">ISBN: </label>
      <input type="text" id="isbn" name="isbn" />
      <br />
      <label htmlFor="year">Published Year: </label>
      <input
        type="text"
        id="year"
        name="year"
        onChange={(e) => setPublishedYear(e.target.value)}
      />
      <br />
      <p style={{ color: "red", fontSize: "14px" }}>{error}</p>
      <button type="submit">Submit</button>
    </form>
  );
}

export default BookForm;
