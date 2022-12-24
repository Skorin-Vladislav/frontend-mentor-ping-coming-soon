import React from "react";
import "./Input.css";
function Input() {
  const checkEmail = () => {
    let Email = document.getElementById("Email");
    let Email_error = document.getElementById("Email_error");

    if (
      !/\S+@\S+\.\S+/.test(Email.value) ||
      Email.value.length < 5 ||
      Email.value.length > 64
    ) {
      Email.classList.add("error");
      Email.placeholder = "email@example/com";
      Email_error.innerHTML = "Please provide a valid email address\r\n";
    } else {
      Email.classList.remove("error");
      Email.placeholder = "Email Address";
      Email_error.innerHTML = "";
      Email.value = "";
    }
  };

  return (
    <div className="input-area">
      <input
        className="e-mail"
        id="Email"
        type="email"
        placeholder="Your email address..."
      ></input>

      {/* <input
          type="email"
          id="Email"
          name="Email"
          placeholder="Email Address"
          onChange={checkEmail}
        ></input> */}

      <p id="Email_error"></p>
      <button className="submit-btn" onClick={checkEmail} type="submit">
        Notify Me
      </button>
    </div>
  );
}

export default Input;
