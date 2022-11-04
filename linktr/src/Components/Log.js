import Submit from "./Submit";
import { useState } from "react";

const Log = () => {
  let name = "";

  const [message, setMessage] = useState(null);

  return (
    <form action="">
      <div className="contain">
        <div>
          <label htmlFor="first name">First name</label>
          <input
            id="first_name"
            type="text"
            name="first name"
            placeholder="Enter your first name"
          />
        </div>
        <div>
          <label htmlFor="last name">Last name</label>
          <input
            id="last_name"
            type="text"
            name="last name"
            placeholder="Enter your last name"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name=""
          id="email"
          placeholder="youremail@email.com"
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Send me a message and I'll reply you as soon as possible"></textarea>
        <div className="err"></div>
      </div>
      <div className="term">
        <input type="checkbox" name="" id="" />
        <label htmlFor="terms">
          You agree to providing your data to {name} who may contact you.
        </label>
      </div>
      <Submit />
    </form>
  );
};

export default Log;
