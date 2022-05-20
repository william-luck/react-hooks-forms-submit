import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([])
  const [errors, setErrors] = useState([])

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (firstName.length > 0 ) { // Way to validate the data only if somehting is entered
      const formData = { // Putting together the current form data into an object using the vlause stored in state 
        firstName: firstName,
        lastName: lastName,
      };
      const dataArray = [...submittedData, formData] // Creates new array that just adds on the form data.
      setSubmittedData(dataArray) // Updates submittedData using setter function
      setFirstName(''); // Clears the input fields upon submit
      setLastName('');
    } else { 
      setErrors(['First name is required!'])
    }
    
  }

  const listOfSubmissions = submittedData.map((data, index) => { // Iterates through the array to make a dive for each element
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    )
  })

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
        {errors.length > 0
          ? errors.map((error, index) => (
            <p key={index} style={{ color : 'red' }}>
              {error}
            </p>
          ))
          : null }
      <h3>Submissions</h3>
      {listOfSubmissions} 
      {/* Renders that new array on the page */}
    </div>
   
  );
}

export default Form;
