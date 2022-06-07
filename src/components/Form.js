import React from "react";

function Form(props) {
  return (
    <form>
      <input type="text" value={"John"} />
      <input type="text" value={"Henry"} />
      <input
        type="text"
        onChange={props.handleFirstNameChange}
        value={props.firstName}
      />
      <input
        type="text"
        onChange={props.handleLastNameChange}
        value={props.lastName}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
