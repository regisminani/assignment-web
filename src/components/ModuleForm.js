import { useState } from "react";

function ModuleForm() {
  const [credits, setCredits] = useState("");
  const [error, setError] = useState("");
  const validateInputs = (credits) => {
    if (!/^\d+$/.test(credits)) setError("The Credits field must be numeric!");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    validateInputs(credits);
  };
  return (
    <form className="styled-form comp" onSubmit={handleSubmit}>
      <h2>Registration Form for Modules</h2>
      <label htmlFor="name">Module Name: </label>
      <input type="text" id="name" name="name" />
      <br />
      <label htmlFor="code">Module Code: </label>
      <input type="text" id="code" name="code" />
      <br />
      <label htmlFor="desc">Description: </label>
      <input type="text" id="desc" name="desc" />
      <br />
      <label htmlFor="credits">Credits: </label>
      <input
        type="text"
        id="credits"
        name="credits"
        required
        onChange={(e) => setCredits(e.target.value)}
      />
      <br />
      <p style={{ color: "red", fontSize: "14px" }}>{error}</p>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ModuleForm;
